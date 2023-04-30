interface CustomAxiosError extends Error {
    response: {
        data: {
            errors: string[];
        }
    }
}

export default CustomAxiosError;