function login(state, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      return {
        ...state,
        List: [
          ...state.List,
          action.payload
        ]
      }
    }
    case 'REMOVE_TASK': {
      const list = state.List;
      let results = list.filter((item) => {
        return item.id !== action.payload.id.toString()
      })
      return {
        ...state,
        List: results
      }
    }
    case 'SIGN_IN': {
      let results = [];
      const list = state.Users;
        results = list.filter((item) => {
          return item.email === action.payload.email && item.password === action.payload.password
        })
        if (results.length > 0) {
          return {
            ...state,
            login: [action.payload]
          }
        }
    }
    default:
      return state
  }
}

export default login;
