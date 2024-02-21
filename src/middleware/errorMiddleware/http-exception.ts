// Error Handling using http-exception
export default class HttpException extends Error {
    statusCode?: number
    message: string
    error?: string | null

    constructor({
        error,
        message,
        statusCode,
    }: {
        error?: string
        message?: any
        statusCode?: number
    }) {
        super(message)

        this.statusCode = statusCode || 503
        this.message = message || '';
        this.error = error || 'Internal Server Error';
    }
}
