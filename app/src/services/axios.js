import axios from 'axios'
import { apiBaseURL, apiGeneratePDF, apiTestGet } from './env'

const instance = axios.create({
  baseURL: apiBaseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const generatePDF = (data) => {
  return instance.post(apiGeneratePDF, data)
}

export const testGET = () => {
  return instance.get(apiTestGet)
}

export default instance