export const userLogin = (user) =>{
    return {
        type: 'RENTER/LOGIN',
        payload: user
    };
};

export const landlordLogin = (landlord) =>{
    return {
        type: 'LANDLORD/LOGIN',
        payload: landlord
    };
};

export const logout = ()=>{
    return{
        type: 'LOGOUT'
    }
}