import { request } from '@/utils'
import { auth } from './auth'

export const process = {
  async list (pageNo, pageSize, status) {
    const response = await request({
      url: '/lic/process/v1.0/list',
      method: 'get',
      params: {
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
  },
  async getProcess (id) {
    const response = await request({
      url: `/lic/process/v1.0/getProcess/${id}`,
      method: 'get',
      headers: { 'Access-Token': auth.getAccessToken() }
    })
    const result = response.item.ApprovalFormList
    result.reason = response.item.approvalFormEntityList[0].reason
    return result
  }
}
