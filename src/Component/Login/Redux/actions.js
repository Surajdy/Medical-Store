export const setEmail = (email) => ({
    type: 'SET_EMAIL',
    payload: email,
})

export const setOtp = (otp) => ({
    type: 'SET_OTP',
    payload: otp,
})

export const setAuthenticated = (isAuthenticated) => ({
    type: 'SET_AUTHENTICATED',
    payload: isAuthenticated,
})

export const setNewPassword = (newPassword) => ({
    type: 'SET_NEW_PASSWORD',
    payload: newPassword,
})

export const sendOtp = (email) =>  async(dispatch) => {

    try {
        
        const res = await fetch(`https://www.mecallapi.com/api/send-otp`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })

        })

        if(res.ok) {

            dispatch(setEmail(email));
            dispatch(setAuthenticated(false));
            dispatch(setNewPassword(''));

        } else {
            console.error('Failed to send OTP')
        }

    } catch (error) {
        console.log(error);
    }

}

export const verifyOtp = (email, otp) => async(dispatch) => {

    try {

        const res = await fetch(`https://www.mecallapi.com/api/verify-otp`, {
    
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, otp })
        
        })
    
        if(res.ok) {
    
            dispatch(setAuthenticated(true));
    
        } else {
            console.error('Failed to verify OTP');
        }

    } catch (error) {
        console.log(error);
    }

}

export const authenticateUser = (email, password) => async(dispatch) => {

    try {
        
        const res = await fetch(`https://www.mecallapi.com/api/login`, {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    
    })

    if(res.ok) {

        dispatch(setAuthenticated(true));

    } else {
        console.error('Failed to login');
    }

    } catch (error) {
        console.log(error);
    }

}

export const resetPassword = (email, newPassword) => async(dispatch) => {

    try {
        
        const res = await fetch(`https://www.mecallapi.com/api/reset-password`, {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, newPassword })
    
    })

    if(res.ok) {

        dispatch(setAuthenticated(false));
        dispatch(setNewPassword(newPassword))

    } else {
        console.error('Failed to reset password');
    }

    } catch (error) {
        console.log(error);
    }

}