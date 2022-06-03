/**
  ********************************************************************************
  *  Check what type of format do we need to do and return the value from that key
  *  @input {Object, string}
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

const getDayMonthYear = (value) => {

  if(!value) return ''
  
  const MONTHS = ['JAN','FAB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const getDay = getTheDay(value, 'day')
  const getMonth = new Date(value).getMonth() 
  const getYear = new Date(value).getFullYear() 

  return `${getDay}-${MONTHS[getMonth]}-${getYear}`
}

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

const paymentDate =(data) =>{
  const formated = `${getDayMonthYear(data.payment_date)}`
  return formated
}

const renewalDate =(data) =>{
  if(data.renewal === null) {
    return ''
  }
  const formated = `${getDayMonthYear(data.coverage_end_date)}`
  return formated
}

const premium =(data) =>{
  const formated = `${data.premium_formatted}`
  return formated
}
const description =(data) =>{

  const id = data.id.split('-')
  const formated = `${id[0].slice(0,4)}-${id[1].slice(0,4)}-INS | ${data.description}`

  return formated
}
export default FormatDay;