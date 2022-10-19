import * as types from './mutation-types'

const mutations = {
  [types.UPDATE_RECORD] (state, payload) {
    state.record = payload
  }
}

export default mutations
