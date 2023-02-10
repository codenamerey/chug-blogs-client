import { useEffect } from "react";

const Login = () => {
    useEffect(() => {
        const url = window.location.search;
        const params = new URLSearchParams(url);
        localStorage.setItem('jwt-token', `Bearer ${params.get('token')}`);
        window.location.href = '/';
    }, [])

    return;
}

export default Login;