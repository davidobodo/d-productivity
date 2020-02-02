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

export const convertArrayToObject = (array: any, key: string) => {
    const initialValue = {};
    return array.reduce((obj: any, item: any) => {
        return {
            ...obj,
            [item[key]]: item,
        };
    }, initialValue)
}

export const convertArrayToObject2 = (array: any) => {
    const initialValue = {};
    return array.reduce((obj: any, item: any) => {
        return {
            ...obj,
            [item[0]]: item[1],
        };
    }, initialValue)
}