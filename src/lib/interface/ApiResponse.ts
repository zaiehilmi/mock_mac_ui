export interface ApiResponse<T> {
    responseCode: number,
    data: T,
}