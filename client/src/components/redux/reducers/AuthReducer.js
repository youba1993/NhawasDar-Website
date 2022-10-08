const authState = {
    isLoggedIn: false,
    user: {
        id: 0,
        first_name: "",
        last_name: "",
    },
    jwt: ""
}

const AuthReducer = (state = authState, action) => {
    switch (action.type) {
        case "RENTER/LOGIN":
            return {
                ...action.payload, isLoggedIn: true
            }

        case "LANDLORD/LOGIN":
            return {
                ...action.payload, isLoggedIn: true
            }
        case "LOGOUT":
            return authState

        default:
            return state;

    }
}

export default AuthReducer;