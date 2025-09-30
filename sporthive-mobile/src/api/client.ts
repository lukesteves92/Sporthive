import axios from 'axios'

const baseURL = process.env.EXPO_PUBLIC_API_BASE_URL || 'http://192.168.0.10:3000'

export const api = axios.create({ baseURL })
