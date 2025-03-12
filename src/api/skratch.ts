import axios, { AxiosResponse } from 'axios'

const VITE_SKRATCH_API = 'https://api2.skratch.world'

export const getUserData = (userId: string): Promise<AxiosResponse> => {
  return axios.get(`${VITE_SKRATCH_API}/share-api/user/${userId}`)
}