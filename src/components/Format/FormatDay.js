/**
  ********************************************************************************
  *  Check what type of format do we need to do and return the value from that key
  *  @param {Object, string}
  *  @return {string}
  ********************************************************************************
**/

function FormatDay(data, action){
  
  switch(action){
    case 'coverage dates': 
      return coverageDates(data)
    case 'payment': 
      return paymentDate(data)
    case 'renewal': 
      return renewalDate(data)
    case 'premium': 
      return premium(data)
    case 'description': 
      return description(data)
    default: throw Error('Something Went wrong while formating the data')
  }
}

/**
  *  @param {string}  transform the month so it can be 10-OCT-2019
  *  @return {string}
**/
const getDayMonthYear = (value) => {

  if(!value) return ''
  
  const MONTHS = ['JAN','FAB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const getDay = getTheDay(value, 'day')
  const getMonth = new Date(value).getMonth() 
  const getYear = new Date(value).getFullYear() 

  return `${getDay}-${MONTHS[getMonth]}-${getYear}`
}

/**
  *  @param {string, string} - Append a 0 to digits bellow 10 so we can have 01 02 
  *  @return {string}
**/
const getTheDay =  (value, action) => {
  let getDay = ''

  switch(action){
    case 'day': 
      if(value.length < 13){
        getDay = new Date(value).getDate() + 1
      } else {
        getDay = new Date(value).getDate() 
      }
      break
    case 'month': 
      if(value.length < 13){
        getDay = new Date(value).getMonth() + 1
      } else {
        getDay = new Date(value).getMonth() 
      }
      break
      default: throw Error('something went wrong while calcualting the day if is < 10')
  }

  if(+getDay < 10) {
    getDay = '0' + getDay
  }
  return getDay
}

/**
  *  @param {string} - Calculate the coverage_date so it can be 17-NOV-2019 to 17-NOV-2019
  *  @return {string}
**/
const coverageDates =(data) =>{

  let dia = data.coverage_start_date
  if( (data.coverage_end_date == null )&& (typeof dia === 'string')){
      dia = (new Date(dia).getFullYear() + 1) + '-' + getTheDay(dia, 'month')+ '-' + getTheDay(dia, 'day')      
  } else {
    dia = data.coverage_start_date
  }
  const formated = `${getDayMonthYear(data.coverage_start_date)} to ${getDayMonthYear(dia)}`
  return formated
}

/**
  *  @param {string} - Calculate the paymentDate so it can be 10-NOV-2019
  *  @return {string}
**/
const paymentDate =(data) =>{
  const formated = `${getDayMonthYear(data.payment_date)}`
  return formated
}

/**
  *  @param {string} - Calculate the renewal date if annual is true so it can be 11-DEC-2020
  *  @return {string}
**/
const renewalDate =(data) =>{
  if(data.renewal === null) {
    return ''
  }
  const formated = `${getDayMonthYear(data.coverage_end_date)}`
  return formated
}

/**
  *  @param {string} - Calculate the premium so it can be AUD $50.15
  *  @return {string}
**/
const premium =(data) =>{
  const formated = `${data.premium_formatted}`
  return formated
}

/**
  *  @param {string} - return the description so it can be PROD-COVE-INS | Full Product Cover
  *  @return {string}
**/
const description =(data) =>{

  const id = data.id.split('-')
  const formated = `${id[0].slice(0,4)}-${id[1].slice(0,4)}-INS | ${data.description}`

  return formated
}
export default FormatDay;