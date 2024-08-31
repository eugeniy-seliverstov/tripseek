import axios, { AxiosResponse } from 'axios'

const VITE_SKRATCH_API = import.meta.env.VITE_SKRATCH_API

export const getUserData = (secret: string): Promise<AxiosResponse> => {
  return axios.get(`${VITE_SKRATCH_API}/v2/users/secret/${secret}`)
}