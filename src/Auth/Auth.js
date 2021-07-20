// src/Auth/Auth.js

import history from '../history';
import Auth0Lock from 'auth0-lock'
import { getParameterFromURL } from '../util/url'
// ...
export default class Auth {
  userMetadata;
  accessToken;
  idToken;
  expiresAt;
  authResult;

  // ...

  constructor() {
    let forParam = getParameterFromURL('for')
    const cid = process.env.NODE_ENV === 'production' && !/sam-test|nimbella-test/i.test(window.location.hostname) ? process.env.REACT_APP_AUTH_CLIENT_ID : process.env.REACT_APP_AUTH_CLIENT_ID_DEV
    const domain = process.env.NODE_ENV === 'production' && !/sam-test|nimbella-test/i.test(window.location.hostname) ? process.env.REACT_APP_AUTH_DOMAIN : process.env.REACT_APP_AUTH_DOMAIN_DEV
    console.log('*** current mode: ', domain === process.env.REACT_APP_AUTH_DOMAIN ? 'production' : 'staging')
    if(/netlify\/#auth=/i.test(window.location.href)) {
      forParam = `netlify,${window.location.hash.split('=')[1]}`
    }

    const options = {
      autoclose: false,
      allowShowPassword: true,
      // allowedConnections: ['google-oauth2', 'github', 'Username-Password-Authentication'],
      // rememberLastLogin: true,
      mustAcceptTerms: true,
      avatar: null,
      container: 'hiw-login-container',
      languageDictionary: {
        signUpTerms: "I agree to the <a href='/terms' target='_blank' rel='noopener noreferrer nofollow'>terms of service</a> and <a href='/privacy' target='_blank' rel='noopener noreferrer nofollow'>privacy policy</a>.",
        emailInputPlaceholder: "something@youremail.com",
        title: "Login to Nimbella"
      },
      theme: {
        logo: '',
        primaryColor: "#005968"
      },
      auth: {
        responseType: 'token id_token',
        redirectUrl: `${window.location.origin}/callback/index.html`,
        autoParseHash: true,
        params: {
          scope: 'openid email profile',
          // scope: 'openid email user_metadata app_metadata picture'
        }
      }
    }

    if(forParam) {
      options.additionalSignUpFields = [
        {
          type: 'hidden',
          name: 'for',
          value: forParam
        }
      ]
    }

    this.lock = new Auth0Lock(cid, domain, options)

    this.lock.on('authenticated', authResult => {
      console.log('*** on authenticated', JSON.stringify(authResult))
    })
  }

  login = () => {
    this.lock.hide()
    this.lock.show({
      allowSignUp: false
    })
  }


  signup = () => {
    this.lock.hide()
    this.lock.show({
      allowLogin: false
    })
  }

  hide = () => {
    this.lock.hide()
  }

  // handleAuthentication is only called after login
  handleAuthentication = () => {
    let forParam = window.localStorage.getItem('_forParam')

    if(/netlify\/#auth=/i.test(forParam)) {
      forParam = `netlify,${forParam.split('=')[1]}`
    }

    this.lock.resumeAuth(window.location.hash, (err, authResult) => {
      console.log('handleAuthentication', err, authResult)
      if (authResult && authResult.accessToken) {
        window.localStorage.setItem('isLoggedIn', 'true');
        console.log('*** localStorage isLoggIn set')
        this.setSession(authResult);

        // Redirect after logged in
        if(authResult) {
          const { idToken } = authResult
          if(authResult.idTokenPayload['https://nimbella.com/user_metadata']) {
            const _for = authResult.idTokenPayload['https://nimbella.com/user_metadata'].for
            if(_for) {
              window.location.replace(`https://portal-apigcp.nimbella.io/login.html${_for ? `?for=${_for}` : ''}${idToken ? `&token=${idToken}` : ''}`)
            }
          } else if(forParam) {
            window.location.replace(`https://portal-apigcp.nimbella.io/login.html${forParam ? `?for=${forParam}` : ''}${idToken ? `&token=${idToken}` : ''}`)
            // window.localStorage.removeItem('_forParam')
          } else {
            window.location.replace(`https://portal-apigcp.nimbella.io/login.html${idToken ? `?token=${idToken}` : ''}`)
          }
        }
      } else if (err) {
        // history.replace('/');
        console.log(err);
        // alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken = () => {
    return this.accessToken;
  }

  getIdToken = () => {
    return this.idToken;
  }

  getUserMetadata = () => {
    return this.userMetadata;
  }

  setSession = (authResult) => {
    // Set isLoggedIn flag in localStorage
    window.localStorage.setItem('isLoggedIn', 'true');
    console.log('*** renewSession success - localStorage set')
    // Set the time that the Access Token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.userMetadata = authResult.idTokenPayload['https://nimbella.com/user_metadata']
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
  }

  renewSession = () => {
    return new Promise((resolve, reject) => {
      this.lock.checkSession({}, (err, authResult) => {
        console.log('*** seccsion check')
        if (authResult === undefined) console.log('*** user is not logged in')
        if (authResult && authResult.accessToken) {
          console.log('*** renewSession success: ', authResult.idTokenPayload.name)
          this.setSession(authResult);
          this.getProfile((err, profile) => {
            resolve({isAuthenticated: this.isAuthenticated(), profile, userMetadata: this.getUserMetadata(), idToken: this.getIdToken(), accessToken: authResult.accessToken });
          })
        } else if (err) {
          if(err.code === 'login_required') {
            if(window.localStorage.getItem('isLoggedIn') === 'true') {
              window.localStorage.removeItem('isLoggedIn')
              console.log('*** renewSession failed: ', err)
              console.log('*** renewSession failed: localStorage removed')
            }
            window.localStorage.removeItem('_forParam')
            resolve({isAuthenticated: false})
          } else {
            reject(err)
          }
        }
      });
    })
  }

  getProfile = (cb) => {
    // console.log('getUserInfo called')
    this.lock.getUserInfo(this.accessToken, (err, profile) => {
      cb(err, profile);
    })
  }


  logout = () => {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    window.localStorage.removeItem('isLoggedIn')
    window.localStorage.removeItem('_forParam')
    console.log('*** logout - localStorage isLoggIn removed')

    this.lock.logout({
      returnTo: window.location.origin
    })

    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    console.log(`*** session expire time: ${new Date(expiresAt)}`)
    return new Date().getTime() < expiresAt;
  }
}
