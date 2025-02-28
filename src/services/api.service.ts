import axios from 'axios';
import toast from 'react-hot-toast';


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
});


const handleError = (error: any) => {
    return Promise.reject(error);
};


export const get = async (url: string) => {
    try {
        const response = await api.get(url);

        return response.data;
    } catch (error: any) {
        toastError(error)

        return handleError(error);
    }
};


export const post = async (url: string, data: object) => {
    try {
        const response = await api.post(url, data, { withCredentials: true });
        return response.data;
    } catch (error) {
        toastError(error)
        return handleError(error);
    }
};


export const put = async (url: string, data: object) => {
    try {
        const response = await api.put(url, data);
        return response.data;
    } catch (error) {
        toastError(error)

        return handleError(error);
    }
};


export const remove = async (url: string) => {
    try {
        const response = await api.delete(url);
        return response.data;
    } catch (error) {
        toastError(error)

        return handleError(error);
    }
};

export const connect = async (url: string, data: object) => {
    try {
        const response = await api.post(url, data);
        return response.data;
    } catch (error: any) {

        if (error.status === 401) {
            toast("Usuário ou senha incorretos.", {
                position: "top-right",
                duration: 5000,
            });
        }
        return handleError(error);
    }
};

const toastError = (error: any) => {
    if (error.response && error.response.data) {
        const { data } = error.response
        if (data.reconnect) {
            window.location.href = '/login';
        }

        if (data.forbidden) {
            window.location.href = '/';
        }

        if (error.response.data.errors) {
            const { errors } = error.response.data;

            Object.entries(errors).forEach(([field, messages]) => {
                (messages as string[]).forEach((message) => {
                    toast(message, {
                        position: "top-right",
                        duration: 5000,
                    });
                });
            });
        }
    } else {
        toast("Erro interno", {
            position: "top-right",
            duration: 5000,
        });
    }
}