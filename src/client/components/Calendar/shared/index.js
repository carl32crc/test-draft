const getDay = date => date.getDate() 
const getMonth = date => date.getMonth() + 1
const getMonthIndex = date => date.getMonth()

const getYear = (date) => {
  if(date instanceof Date) {
    return date.getFullYear()
  }
  
  if(typeof date === 'number') {
    return date
  }

  const year = parseInt(date, 10)

  if(typeof date === 'string' && !isNaN(year)) {
    return year
  }

  throw new Error(`Failed to get year from date: ${date}.`)
}

export {
  getDay,  
  getMonth,
  getMonthIndex,
  getYear    
}