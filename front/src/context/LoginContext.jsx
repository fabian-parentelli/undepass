import { createContext, useContext, useState } from "react";
import { loginUserApi } from '../helpers/users/loginUser.api.js';
import { currentUserApi } from '../helpers/users/currentUser.api.js';
import { registerUserApi } from '../helpers/users/registerUser.api.js';
import { updateUserApi } from '../helpers/users/updateUser.api.js';

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        isLogged: false,
        data: null,
        error: null,
        logged: false,
        registered: false,
        update: false
    });

    const register = async (user) => {
        setLoading(true);
        const registerData = await registerUserApi(user);
        if (registerData.error) {
            setLoading(false);
            return setUser({ error: registerData.error });
        };
        if (registerData.status === 'success') setUser({ registered: true });
        setLoading(false);
    };

    const login = async (user) => {
        setLoading(true);
        const loginData = await loginUserApi(user);
        if (loginData.error) setUser({ ...user, error: loginData.error })
        if (loginData.status === 'success') {
            localStorage.setItem('token', loginData.accesToken);
            await current();
        };
        setLoading(false);
    };

    const logout = () => {
        setUser({ isLogged: false, data: null, error: null, logged: false, registered: false });
        localStorage.removeItem('token');
        localStorage.removeItem('location');
    };

    const current = async () => {
        const response = await currentUserApi();
        if (response && response.user) {
            setUser({ data: response.user, logged: true, isLogged: true, registered: true });
        };
    };

    const updateUser = async (user, id) => {
        const result = await updateUserApi(user, id);
        if (result.status === 'success') {
            localStorage.setItem('token', result.accesToken);
            await current();
            return { status: 'success' };
        };
    };

    return (
        <LoginContext.Provider
            value={{
                loading, user, setUser, register, login, logout, current, updateUser
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;