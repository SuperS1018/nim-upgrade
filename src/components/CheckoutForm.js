import React, { Component, Fragment } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import { payment } from '../action'
import { withRouter } from 'react-router-dom'
import { googleAnalyticsEvent } from '../util/ga'

import '../stylesheets/components/CheckoutForm.css'

const createOptions = () => { // Stripe CardElement Style
  return {
    style: {
      base: {
        fontSize: '18px',
        fontWeight: 'light',
        color: '#586163',
        fontFamily: 'Open Sans, sans-serif',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#a9a9a9',
        },
      },
      invalid: {
        color: '#ff3d3d',
      },
    }
  }
};

const required = (value) => { // All input require validation
  if (!value) {
    return <span className='text text-red text-small'>This field is required</span>
  }
};

const email = (value) => { // Email input validation
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (value && !re.test(String(value).toLowerCase())) {
    return <span className='text text-red text-small'>{value} is not a valid email.</span>
  }
};

class CheckoutForm extends Component {
  state = {
    errorMessage: '',
    disabled: true,
    country: 'US',
    state: '',
    form: {
      name: '',
      email: '',
      address_line1: '',
      address_line2: '',
      address_city: '',
    },
    creditCard: {}
  };

  componentDidMount () {
    const { teamId, namespace, cardExp } = this.props
    this.props.loadingShow()
    try {
      payment.fetchCustomerHistory(teamId, namespace).then(res => {
        if(res) {
          this.props.loadingHide()
        }
        if(res.statusCode === 400) {
          this.props.alert({
            title: 'Error',
            message: res.error,
            cb: () => {
              this.props.history.replace({
                pathname: '/pricing/commander'
              })
            }
          })
        }
        if(res.status === 'failed') {
          if(res.message === 'No customer found.') {
            this.props.alert({
              title: 'Welcome to Commander Order',
              message: 'Please fill up the form and hit submit to complete subscriptions.',
              btn: 'Ok',
              cb: () => {
                this.setState({
                  disabled: false
                })
              }
            })
          } else {
            this.props.alert({
              title: 'Error',
              message: res.message,
              cb: () => {
                this.props.history.replace({
                  pathname: '/pricing/commander'
                })
              }
            })
            return false
          }
        }
        if(res.status === 'success' && res.data['default_source']) {
          const {
            default_source: {
              address_city,
              address_line1,
              address_line2,
              address_state,
              address_zip,
              brand,
              country,
              last4,
              exp_month,
              exp_year
            }
          } = res.data
          const { email, name } = res.data
          this.setState({
            form: { name, email, address_line1, address_line2, address_city },
            country,
            state: address_state,
            creditCard: { last4, exp_month, exp_year, address_zip, brand },
            disabled: !cardExp
          })
        }

        const { workspace } = res.data
        this.props.handleWorkspace(workspace)
      })
    } catch (err) {}
  }

  handleReset = () => {
    this.setState({
      errorMessage: '',
      disabled: false,
      country: 'US',
      state: '',
      form: {
        name: '',
        email: '',
        address_line1: '',
        address_line2: '',
        address_city: '',
      },
      creditCard: {}
    })
  }

  handleCardChange = ({error}) => { // to handle Stripe CardElement change
    this.setState({ errorMessage: '' })
    if (error) {
      this.setState({ errorMessage: error.message });
    }
  }

  handleChange = e => { // to handle address input change
    const { form } = this.state
    Object.assign(form, { [e.target.name]: e.target.value })
    this.setState({ form })
  }

  handleSubmitValidation = () => {
    const ele = document.querySelectorAll('.form-item-validate')
    for(let i = 0; i < ele.length; i++) {
      // console.log('validate', ele[i].children[0].childNodes)
      if(ele[i].children[0].childNodes.length > 1) {
        return false
      }
    }
    return true
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    if (this.props.stripe) {
      await this.form.validateAll()
      const { country, state, disabled } = this.state

      if(disabled) {
        googleAnalyticsEvent(0, 'Order', 'Submit - returned customers')
        let { email } = this.form.getValues()
        this.props.handleResult({ form: { email } })
      } else {
        if(this.handleSubmitValidation()) {
          googleAnalyticsEvent(0, 'Order', 'Submit - new customers')
          this.props.loadingShow()
          let form = this.form.getValues()
          const {name, address_line1, address_line2, address_city, email} = form
          this.props.stripe.createToken({
            type: 'card',
            address_country: country,
            address_state: state,
            email,
            name,
            address_line1,
            address_line2,
            address_city
          }).then(r => {
            this.props.loadingHide()
            if(r && r.hasOwnProperty('token')) {
              this.props.handleResult({
                token: r.token,
                form,
              })
            }
            if(r && r.hasOwnProperty('error')) {
              this.props.alert({
                title: r.error.code,
                message: r.error.message
              })
            }
          })
        }
      }
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  handleCountryChange (val) {
    if(val) {
      this.setState({ country: val })
    }
  }

  handleRegionChange (val) {
    if(val) {
      this.setState({ state: val })
    }
  }

  removeApiError = (ele) => {
    this.form.hideError(this[ele]);
  };

  handleEditChange = e => {
    e.preventDefault()
    this.setState({
      disabled: !this.state.disabled
    })
  }

  render() {
    const { country, state, form, creditCard, disabled, errorMessage } = this.state
    return (
      <Fragment>
        <Form className="col-md-7 offset-md-1 CheckoutForm" ref={c => { this.form = c }} onSubmit={this.handleSubmit.bind(this)}>
          <div className='CheckoutForm--Section'>
            <h2 className='d-inline'>Billing Information</h2>
            {Object.keys(creditCard).length !== 0 && disabled && <button className='btn btn-outline-app btn-small float-right' onClick={this.handleEditChange}>{disabled ? 'Edit' : 'Close'}</button>}
            <div className='row mt-4'>
              <label className='col-md-12'>
                <div className='CheckoutForm--Item'>
                  <span className='form-title required'>Name</span>
                  <div className='form-item-validate'>
                    <Input
                      type="text"
                      name='name'
                      ref={c => { this.nameInput = c }}
                      value={form.name}
                      onFocus={() => this.removeApiError('nameInput')}
                      onChange={this.handleChange}
                      disabled={disabled}
                      validations={[required]} />
                  </div>
                </div>
              </label>

              <label className='col-md-12'>
                <div className='CheckoutForm--Item'>
                  <span className='form-title required'>Email</span>
                  <div className='form-item-validate'>
                    <Input
                      type="email"
                      name='email'
                      ref={c => { this.emailInput = c }}
                      value={form.email}
                      onFocus={() => this.removeApiError('emailInput')}
                      onChange={this.handleChange}
                      disabled={disabled}
                      validations={[required, email]}
                    />
                  </div>
                </div>
              </label>

              <label className={`${((disabled && form.address_line2) || (!disabled)) ? 'col-md-8' : 'col-md-12'}`}>
                <div className='CheckoutForm--Item'>
                  <span className='form-title required'>Street Address</span>
                  <div className='form-item-validate'>
                    <Input
                      type="text"
                      name='address_line1'
                      ref={c => { this.addressInput = c }}
                      value={form.address_line1}
                      onFocus={() => this.removeApiError('addressInput')}
                      onChange={this.handleChange}
                      disabled={disabled}
                      validations={[required]} />
                  </div>
                </div>
              </label>

              {((disabled && form.address_line2) || (!disabled)) && <label className='col-md-4'>
                <div className='CheckoutForm--Item'>
                  <span className='form-title'>Suite/Unit (optional)</span>
                  <div className='form-item-validate'>
                    <Input
                      type="text"
                      value={form.address_line2 || ''}
                      onChange={this.handleChange}
                      disabled={disabled}
                      name='address_line2' />
                  </div>
                </div>
              </label>}

              <label className='col-md-12'>
                <div className='CheckoutForm--Item'>
                  <span className='form-title required'>City</span>
                  <div className='form-item-validate'>
                    <Input
                      type="text"
                      name='address_city'
                      ref={c => { this.cityInput = c }}
                      value={form.address_city}
                      onFocus={() => this.removeApiError('cityInput')}
                      onChange={this.handleChange}
                      disabled={disabled}
                      validations={[required]} />
                  </div>
                </div>
              </label>

              <label className='col-md-6'>
                <div className='CheckoutForm--Item'>
                  <span className='form-title required'>State</span>
                  <div className={`form-item select-wrap ${disabled ? 'disabled' : ''}`}>
                    <RegionDropdown
                      country={country}
                      value={state}
                      name='address_state'
                      showDefaultOption={false}
                      countryValueType={'short'}
                      labelType={'full'}
                      valueType={'short'}
                      disabled={disabled}
                      onChange={(val) => this.handleRegionChange(val)} />
                  </div>
                </div>
              </label>

              <label className='col-md-6'>
                <div className='CheckoutForm--Item'>
                  <span className='form-title required'>Country</span>
                  <div className={`form-item select-wrap ${disabled ? 'disabled' : ''}`}>
                    <CountryDropdown
                      value={country}
                      name='address_country'
                      showDefaultOption={false}
                      labelType={'full'}
                      valueType={'short'}
                      // whitelist={['US', 'CN', 'IN', 'TW']}
                      priorityOptions={['US', 'CN', 'IN', 'TW']}
                      disabled={disabled}
                      onChange={(val) => this.handleCountryChange(val)} />
                  </div>
                </div>
              </label>
            </div>
          </div>


          <div className='CheckoutForm--Section'>
            <h2>Payment Information</h2>
            <div className='row'>
              <label className='col-md-12'>
                {!disabled &&
                <div className='CheckoutForm--Item'>
                  <span className='form-title required'>Card details</span>
                  <CardElement
                    className='form-item'
                    onChange={this.handleCardChange}
                    {...createOptions()}
                  />
                </div>}

                {disabled &&
                <div className='CheckoutForm--Item'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <span className='form-title required'>Card number</span>
                      <p>xxxx-xxxx-xxxx-{creditCard.last4}</p>
                    </div>

                    <div className='col-md-6'>
                      <span className='form-title required'>Exp</span>
                      <p>{creditCard.exp_month < 10 ? '0' : ''}{creditCard.exp_month}/{creditCard.exp_year}</p>
                    </div>

                    <div className='col-md-6'>
                      <span className='form-title required'>Zip</span>
                      <p>{creditCard.address_zip}</p>
                    </div>
                  </div>


                </div>
                }
              </label>
              {errorMessage && <div className="error" role="alert">
                <p className='text text-red text-small'>{errorMessage}</p>
              </div>}
            </div>
          </div>

          <div className='btn-wrap'>
            <button className='btn btn-app'>Submit</button>
          </div>
        </Form>
      </Fragment>
    );
  }
}

export default injectStripe(withRouter(CheckoutForm))
