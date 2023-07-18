export interface IEnvironment{
    app : {port: number}
}

export const myEnvironment: IEnvironment = {
    app: {
        port: 3000
    }
};