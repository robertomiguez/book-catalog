import axios from "axios"


const app_key = process.env.VUE_APP_AIR_TABLE_API_KEY  
const app_id = process.env.VUE_APP_AIR_TABLE_API_ID

const service = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_URL}/${app_id}`,  
  headers: { Authorization: `Bearer ${app_key}` }
})

export default service