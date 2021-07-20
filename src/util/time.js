const _timeFormat = (t) => {
  let hours = t.getHours()
  let minutes = t.getMinutes()
  let ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours || 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes
  return hours + ':' + minutes + ' ' + ampm
}

export const timeFormatted = (t, d) => {
  const fromTime = new Date(t)
  const toTime = new Date(new Date(t).getTime() + (parseInt(d) * 60 * 1000))
  return `${_timeFormat(fromTime)} ${d ? ' - ' + _timeFormat(toTime) : ''}`
}

export const numberToTime = (num) => {
  const hours = Math.floor(num / 3600) < 10 ? (Math.floor(num / 3600)) : Math.floor(num / 3600)
  const minutes = (Math.floor((num % 3600) / 60))
  const seconds = ((num % 3600) % 60)
  return (hours ? hours + ' hour ' : '') + (minutes ? minutes + ' min ' : '') + (seconds ? seconds + ' sec' : '')
}

const _monthMapToNum = (m) => {
  if(m) {
    switch (m) {
      case 'Jan':
        return '01'
      case 'Feb':
        return '02'
      case 'Mar':
        return '03'
      case 'Apr':
        return '04'
      case 'May':
        return '05'
      case 'Jun':
        return '06'
      case 'Jul':
        return '07'
      case 'Aug':
        return '08'
      case 'Sep':
        return '09'
      case 'Oct':
        return '10'
      case 'Nov':
        return '11'
      case 'Dec':
        return '12'
      default:
        console.warn('The month on monthMapToNum is not matched')
    }
  }
}

export const timestampWithGeolocation = (timestamp, options) => {
  const _dateTimeArr = (ts) => {
    const offset = new Date(ts).getTimezoneOffset() * 60 * 1000
    const t = new Date(new Date(ts).getTime() - offset).toString()
    return t.split(' ')
  }
  const _handle24Hours = (hour) => {
    return hour > 12 ? hour % 12 : hour
  }
  const _handleAmPm = (hour, minute) => {
    return (parseInt(hour) >= 13) || (parseInt(hour) === 12 && parseInt(minute) >= 0) ? 'pm' : 'am'
  }
  const arr = _dateTimeArr(timestamp)
  const M = arr[1]
  const d = arr[2]
  const y = arr[3]
  const H = arr[4].split(':')[0]
  const h = _handle24Hours(H)
  const m = arr[4].split(':')[1]
  const a = _handleAmPm(H, m)
  let output = ''

  if (options.hasOwnProperty('date') && options.date) {
    if (options.hasOwnProperty('slash') && options.slash) {
      output += `${_monthMapToNum(M)}/${d}/${y.substring(2)}`
    } else {
      output += `${M} ${d}, ${y}`
    }
  }

  if (options.hasOwnProperty('time') && options.time) {
    if (options.hasOwnProperty('duration') && options.duration) {
      const _arr = _dateTimeArr(new Date(timestamp).getTime() + options.duration * 60 * 1000)
      const _h = _handle24Hours(_arr[4].split(':')[0])
      const _m = _arr[4].split(':')[1]
      const _a = _handleAmPm(_h, _m)
      output += ` ${h}:${m} ${a} - ${_h}:${_m} ${_a}`
    } else {
      output += ` ${h}:${m} ${a}`
    }
  }

  if (options.hasOwnProperty('timezone') && options.timezone) {
    output += `  ${arr[5]}`
  }

  return /^\s/.test(output) ? output.substr(1) : output
}
