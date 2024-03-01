
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


export interface State {
    auth: AuthState
}


export interface App {
    app_id: number,
    name: string,
    description: string,
    logo?: number,
    image?: number[]
}

export interface AppState {
    apps: App[];
}

export interface AppsAction {
    type: string,
    payload?: App[] | App
}