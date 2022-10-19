import { request } from '@/utils'
import { auth } from './auth'

export const message = {
  async getCount () {
    const response = await request({
      url: '/lic/message/v1.0/getCount',
      method: 'get',
      headers: { 'Access-Token': auth.getAccessToken() }
    })
    return response.item.count
  },
  async list (pageNo, pageSize) {
    const response = await request({
      url: '/lic/message/v1.0/list',
      method: 'get',
      params: {
        pageNo,
        pageSize
      },
      headers: { 'Access-Token': auth.getAccessToken() }
    })
    return response.page.list
  }
}
