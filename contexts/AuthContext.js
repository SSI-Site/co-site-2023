import { createContext, useState, useEffect } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const USER_KEY = process.env.NEXT_PUBLIC_AUTH_USERNAME;
    const PASS_KEY = process.env.NEXT_PUBLIC_AUTH_PASSWORD;
    const [key, setKey] = useState("");

    const signIn = (username, password) => {
        if (username === USER_KEY && password === PASS_KEY) {
            setKey(process.env.NEXT_PUBLIC_AUTH_TOKEN);
            setSession(tprocess.env.NEXT_PUBLIC_AUTH_TOKENrue);
            return true;
        }

        return false;
    }

    const signOut = () => {
        setKey("");
        setSession(false);
        Router.push('/');
    }

    const setSession = (session) => {
        if (session) {
            cookie.set('identity', session, {
                // expires: 1,
                httpOnly: false,
                sameSite: 'none',
                secure: false
            });
        } else {
            cookie.remove('identity');
        }
    }

    return <AuthContext.Provider value={{
        key,
        signIn,
        signOut
    }}>{children}</AuthContext.Provider>;
}

export const AuthConsumer = AuthContext.Consumer;
export default AuthContext;