export interface myState {
    titles: {
        [key: number]: string
    },
    tasks: {
        [key: number]: {
            [key: string]: number | string
        }
    }
}