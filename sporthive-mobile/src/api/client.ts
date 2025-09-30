import axios from 'axios'
import { Platform } from 'react-native'

const env = process.env.EXPO_PUBLIC_API_BASE_URL?.trim()
const fallback = Platform.OS === 'android' ? 'http://10.0.2.2:4000' : 'http://localhost:4000'
const baseURL = env && env.length > 0 ? env : fallback

export const api = axios.create({
  baseURL,
  timeout: 5000
})
