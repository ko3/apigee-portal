import { ApiProducts } from "../services/ApiProductsType"


export type Counter = {
    count: number,
    data: string
}

export type Action = {
    type: string;
    payload: any | null;
}

export type AppState = {
    apiProducts: ApiProducts,
    counter: Counter
} 