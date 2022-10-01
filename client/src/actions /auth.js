import {Types} from './actionTypes'

const setToken = (token) => {
    localStorage.setItem("token", token);
};

export const getToken = () => {
    return localStorage.getItem("token");
};

const deleteToken = () => {
    localStorage.removeItem("token");
}

export const signupUser = (credentials) => {
    return (dispatch) => {
        return fetch("/users", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: credentials })
        }).then((res) => {
            if (res.ok) {
                setToken(res.headers.get("Authorization"));
                return res
                    .json()
                    .then((userJson) =>
                        dispatch({ type: Types.AUTHENTICATED, payload: userJson })
                    );
            } else {
                return res.json().then((errors) => {
                    dispatch({ type: Types.NOT_AUTHENTICATED });
                    return Promise.reject(errors);
                });
            }
        });
    };
};

export const signupLandlord = (credentials) => {
    return (dispatch) => {
        return fetch("/landlords", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ landlord: credentials })
        }).then((res) => {
            if (res.ok) {
                setToken(res.headers.get("Authorization"));
                return res
                    .json()
                    .then((landlordJson) =>
                        dispatch({ type: Types.AUTHENTICATED, payload: landlordJson })
                    );
            } else {
                return res.json().then((errors) => {
                    dispatch({ type: Types.NOT_AUTHENTICATED });
                    return Promise.reject(errors);
                });
            }
        });
    };
};

export const loginUser = (credentials) => {
    return (dispatch) => {
        return fetch("/user_login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: credentials }),
        }).then((res) => {
            if (res.ok) {
                setToken(res.headers.get("Authorization"));
                return res
                    .json()
                    .then((userJson) =>
                        dispatch({ type: Types.AUTHENTICATED, payload: userJson })
                    );
            } else {
                return res.json().then((errors) => {
                    dispatch({ type: Types.NOT_AUTHENTICATED });
                    return Promise.reject(errors);
                });
            }
        });
    };
};

export const loginLandlord = (credentials) => {
    return (dispatch) => {
        return fetch("/landlord_login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ landlord: credentials }),
        }).then((res) => {
            if (res.ok) {
                setToken(res.headers.get("Authorization"));
                return res
                    .json()
                    .then((landlordJson) =>
                        dispatch({ type: Types.AUTHENTICATED, payload: landlordJson })
                    );
            } else {
                return res.json().then((errors) => {
                    dispatch({ type: Types.NOT_AUTHENTICATED });
                    return Promise.reject(errors);
                });
            }
        });
    };
};

export const logout = () => {
    return (dispatch) => {
        deleteToken()
        return Promise.reject(dispatch({ type: Types.NOT_AUTHENTICATED }))
    }
}

export const checkAuth = () => {
    return (dispatch) => {
        return fetch("/profile", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: getToken()
            }
        }).then((res) => {
            if (res.ok) {
                return res
                    .json()
                    .then(user => {
                        user.data ? dispatch({ type: Types.AUTHENTICATED, payload: user }) : dispatch({ type: Types.NOT_AUTHENTICATED })
                    })
            } else {
                return Promise.reject(dispatch({ type: Types.NOT_AUTHENTICATED }))
            }
        });
    };
};

