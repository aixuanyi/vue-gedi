import * as types from './mutation-type.js'

const mutations = {
	[types.KIND_TYPE_LIST](state,data){
		state.kindType = data
	},
	[types.KIND_LIST_LIST](state,data){
		state.kindList = data
	},
	[types.LIST_PRO_LIST](state,data){
		state.proList = data;
	}
}

export default mutations