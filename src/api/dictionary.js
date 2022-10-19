import { request } from '@/utils'
import { auth } from './auth'

export const dictionary = {
  async dictionary (pageNo, pageSize, type) {
    const response = await request({
      url: '/system/dictionary',
      method: 'get',
      params: {
        pageNo,
        pageSize,
        type
      },
      headers: { 'Access-Token': auth.getAccessToken() }
    })
    return response.page.list
  }
}
