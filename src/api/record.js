import { request } from '@/utils'
import { auth } from './auth'

export const record = {
  async list (pageNo, pageSize, status) {
    const response = await request({
      url: '/lic/record/v1.0/list',
      method: 'get',
      params: {
        leaderId: auth.getUserInfo().id,
        pageNo,
        pageSize,
        status
      },
      headers: { 'Access-Token': auth.getAccessToken() }
    })
    return {
      list: response.page.list,
      count: response.page.count
    }
  }
}
