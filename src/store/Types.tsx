
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
    counter: Counter,
    accessToken: AccessToken
} 

export type AccessToken = {
    accessToken: string
}

export type ApiProducts = {
    apiProduct: ApiProduct[]
}

export type ApiProduct = {
    apiResources: string [],
    approvalType: string,
    attributes: Attribute[],
    createdAt: number,
    createdBy: string,
    description: string,
    displayName: string,
    environments: string[],
    lastModifiedAt: number,
    lastModifiedBy: string,
    name: string,
    proxies: string[],
    quota: string,
    quotaInterval: string,
    quotaTimeUnit: string,
    scopes: string[]
}

export type Attribute = {
    name: string,
    value: string
}