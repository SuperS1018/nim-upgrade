const fetch = window.fetch

export const payment = {
  baseURL: function (namespace) {
    return `https://apigcp.nimbella.io/api/v1/web/${namespace}/stripe-billing/`
  },
  customerIdValidation: function (teamId, namespace) {
    return new Promise((resolve, reject) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          team_id: teamId
        })
      }
      fetch(`${this.baseURL(namespace)}get-customer-status`, options)
        .then(handleResponse)
        .then(result => {
          resolve(result)
        })
        .catch(() => resolve({ status: 'failed', message: 'Bad request'}))
    })
  },
  createSubscription: function (teamId, namespace, email, name, token) {
    return new Promise((resolve, reject) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: (token && name) ? JSON.stringify({
          team_id: teamId,
          customerDetails: { email, name },
          card_token: token.id
        }) : JSON.stringify({
          team_id: teamId,
          email
        })
      }
      fetch(`${this.baseURL(namespace)}create-subscription`, options)
        .then(handleResponse)
        .then(result => {
          resolve(result)
        })
    })
  },
  fetchCustomerHistory: function (teamId, namespace) {
    console.log('*** fetch billing info')
    return new Promise((resolve, reject) => {
      if (teamId && namespace) {
        fetch(`${this.baseURL(namespace)}get-customer-history?team_id=${teamId}`)
          .then(handleResponse)
          .then(data => {
            resolve(data)
          }).catch(() => resolve({ status: 'failed', message: 'Bad request' }))
      } else {
        reject({
          error: 'team_id is required'
        })
      }
    })
  },
  unsubscribe: function (team_id, namespace) {
    return new Promise((resolve, reject) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          team_id
        })
      }
      fetch(`${this.baseURL(namespace)}cancel-subscription`, options)
        .then(handleResponse)
        .then(result => {
          resolve(result)
        })
        .catch(err => reject(err))
    })
  }
}

export const fetchLog = (from, to) => {
  return new Promise((resolve, reject) => {
    fetch(`https://f.nimbella.com/cops/range/${Math.floor(from.getTime()/1000)}/${Math.floor(to.getTime()/1000)}`)
      .then(handleResponse)
      .then(data => {
        resolve(data)
      })
  })
}

export const fetchCloudHttpsPing = (from, to) => {
  return new Promise((resolve, reject) => {
    fetch(`https://cops.nimbella.io:3200/range/cloudHttpsPing/${Math.floor(from.getTime()/1000)}/${Math.floor(to.getTime()/1000)}`)
      .then(handleResponse)
      .then(data => {
        resolve(data)
      })
  })
}

export const fetchCloudError = (from, to) => {
  return new Promise((resolve, reject) => {
    fetch(`https://cops.nimbella.io:3200/range/cloudError/${Math.floor(from.getTime()/1000)}/${Math.floor(to.getTime()/1000)}`)
      .then(handleResponse)
      .then(data => {
        resolve(data)
      })
  })
}

export const fetchCloudNginxPing = (from, to) => {
  return new Promise((resolve, reject) => {
    fetch(`https://cops.nimbella.io:3200/range/cloudNginxPing/${Math.floor(from.getTime()/1000)}/${Math.floor(to.getTime()/1000)}`)
      .then(handleResponse)
      .then(data => {
        resolve(data)
      })
  })
}

export const fetchCloudIcmpPing = (from, to) => {
  return new Promise((resolve, reject) => {
    fetch(`https://cops.nimbella.io:3200/range/cloudIcmpPing/${Math.floor(from.getTime()/1000)}/${Math.floor(to.getTime()/1000)}`)
      .then(handleResponse)
      .then(data => {
        resolve(data)
      })
  })
}

export const fetchCommanderMysql = (from, to) => {
  return new Promise((resolve, reject) => {
    fetch(`https://cops.nimbella.io:3200/range/commanderMysql/${Math.floor(from.getTime()/1000)}/${Math.floor(to.getTime()/1000)}`)
      .then(handleResponse)
      .then(data => {
        resolve(data)
      })
  })
}

export const fetchCommanderDynamo = (from, to) => {
  return new Promise((resolve, reject) => {
    fetch(`https://cops.nimbella.io:3200/range/commanderDynamo/${Math.floor(from.getTime()/1000)}/${Math.floor(to.getTime()/1000)}`)
      .then(handleResponse)
      .then(data => {
        resolve(data)
      })
  })
}

const handleResponse = (res) => {
  if (res.ok) {
    return res.json()
  } else {
    try {
      let error = new Error(res.statusText)
      error['response'] = res
      return { error, statusCode: res.status }
    }
    catch (err) {}
  }
}
