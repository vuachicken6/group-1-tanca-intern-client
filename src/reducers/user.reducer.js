import { USER_SET, USER_UNSET } from '../actionTypes/user.actiontypes'

const initialSate = {
  token: null,
  data:{
    name: 'Tanca',
    phone:'0322555',
    role:'Quản lý'
  }
}

const reducer = function UserReducer (state = initialSate, action) {
  switch (action.type) {
    case USER_SET:
      return {...state,
        token: action.token
      }

    case USER_UNSET:
      return {
        ...state,token: null,
      }

    default:
      return state
  }
}

export default reducer
