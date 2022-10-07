const authState = {
    isLoggedIn: false,
    user: {
        id: 0,
        first_name: "",
        last_name: "",
    },
    jwt: ""
}

const AuthReducer = (state = authState, action)=>{
    return state;
}

export default AuthReducer;