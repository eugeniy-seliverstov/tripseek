import axios, { AxiosResponse } from 'axios'

const VITE_SKRATCH_API = 'https://api2.skratch.world/'

export const getUserData = (secret: string): Promise<AxiosResponse> => {
  return axios.get(`${VITE_SKRATCH_API}/v2/users/secret/${secret}`)
}