import { request } from '@/utils'
import { auth } from './auth'

export const approval = {
  async list (pageNo, pageSize, status) {
    const response = await request({
      url: '/lic/approval/v1.0/list',
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
      url: `/lic/approval/v1.0/getProcess/${id}`,
      method: 'get',
      headers: { 'Access-Token': auth.getAccessToken() }
    })
    const result = response.item.ApprovalFormList
    result.reason = response.item.approvalFormEntityList[0].reason
    return result
  },
  async delete (id, reason) {
    await request({
      url: `/lic/approval/v1.0/delete/${id}`,
      method: 'delete',
      data: { reason },
      headers: { 'Access-Token': auth.getAccessToken() }
    })
  },
  async save (payload) {
    await request({
      url: '/lic/approval/v1.0/save',
      method: 'post',
      data: payload,
      headers: { 'Access-Token': auth.getAccessToken() }
    })
  }
}
