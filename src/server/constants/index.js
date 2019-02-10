import dotenv from 'dotenv'

dotenv.load()

const { API_LANDBOT_TOKEN } = process.env

const landBot = {
  headers: {
    timeout: 3000,
    contentType: 'application/json',
    Authorization: API_LANDBOT_TOKEN
  },
  API: {
    urlBase: 'https://api.landbot.io/v1/',
    get customers() { return `${this.urlBase}customers/`},
    get customer() { return `${this.urlBase}customers/:ID/` },
    get updateCustomer() { return `${this.urlBase}customers/:ID/fields/:FIELD/` }
  }
}

export { landBot }