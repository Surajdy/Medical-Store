const initialState = {
    email: '',
    otp: '',
    isAuthenticated: false,
    newPassword: '',
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_EMAIL':
            return {...state, email: action.payload};
        case 'SET_OTP':
            return {...state, otp: action.payload};
        case 'SET_AUTHENTICATED':
            return {...state, isAuthenticated: action.payload};
        case 'SET_NEW-PASSWORD':
            return {...state, newPassword: action.payload};
        default:
            return state;
    }

}

export default rootReducer;