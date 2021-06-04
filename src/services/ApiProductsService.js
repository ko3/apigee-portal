import ApiService from "./Service";

const BASE_URL = "https://api.enterprise.apigee.com";
const client = new ApiService({ baseURL: BASE_URL});
const apiProductsService = {};
apiProductsService.getApiProducts = () => client.get("/v1/organizations/eklft15-eval/apiproducts");
apiProductsService.getApiProductsWithDetails = () => client.get("/v1/organizations/eklft15-eval/apiproducts?expand=true");
apiProductsService.getApiProduct = (apiProduct) => client.get("/v1/organizations/eklft15-eval/apiproducts" +  apiProduct);
apiProductsService.postApiProduct = (apiProduct) => client.post("/v1/organizations/eklft15-eval/apiproducts", apiProduct);

export default apiProductsService;