const initialState = ''

const apptReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APPT':
      return action.payload
    default:
      return state 
  }
}

export default apptReducer;