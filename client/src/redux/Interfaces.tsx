
export interface User {
    id?: number,
    username?: string,
    email?: string,
    nameEmail?: string
    password: string
}

export interface AuthState {
    user: User | object,
    isLoggedIn: boolean,
    message?: string
}

export interface AuthAction {
    type: string,
    payload?: User,
    message?: string

}