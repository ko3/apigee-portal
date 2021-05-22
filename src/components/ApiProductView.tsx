import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { ApiProduct, Attribute } from "../services/ApiProductsType";
import { AppState } from "../store/Types";

const ApiProductView = ()=>{
    const {apiProductName} = useParams() as {
        apiProductName: string
    }
    const apiProduct: ApiProduct | undefined = useSelector((state: AppState)=> {
        console.log("State APIProducts")
        console.log(state.apiProducts.apiProduct)
        console.log("query param:" )
        console.log( apiProductName)
        const val = state.apiProducts.apiProduct.find(prd => {
            console.log("product name:" + prd.name);
           return prd.name === apiProductName;
        });
        console.log("filtered apiProduct")
        console.log(val)
        return val;
    });
    const getValue=(attributes:Attribute[], key: string) : string => {
        const value = attributes.filter(attr => attr.name === key).map(attr => attr.value)[0];
        return value;
    }
    

    return (
      <div>
        { apiProduct && 
        <div >
            <div>
                <h1>Product details</h1>
                <div className="tile-container wrap">
                    <div className="tile-half">
                        <div className="tile-item">
                            <div className="tile-item-key">Name:</div>
                            <div className="tile-item-value">{apiProduct.name}</div>
                        </div>
                        <div className="tile-item">
                            <div className="tile-item-key">Display Name:</div>
                            <div className="tile-item-value">{apiProduct.displayName}</div>
                        </div>
                        <div className="tile-item">
                            <div className="tile-item-key">Description:</div>
                            <div className="tile-item-value">{apiProduct.description}</div>
                        </div>
                        <div className="tile-item">
                            <div className="tile-item-key">Environment:</div>
                            <div className="tile-item-value">{apiProduct.environments.join(",")}</div>
                        </div>
                    </div>
                    <div className="tile-half">
                        <div className="tile-item">
                            <div className="tile-item-key">Access:</div>
                            <div className="tile-item-value">{getValue(apiProduct.attributes, "access")}</div>
                        </div>
                        <div className="tile-item">
                            <div className="tile-item-key">Request Approval:</div>
                            <div className="tile-item-value">{apiProduct.approvalType}</div>
                        </div>
                        <div className="tile-item">
                            <div className="tile-item-key">Quota:</div>
                            <div className="tile-item-value">{apiProduct.quota + " request every " + apiProduct.quotaInterval + " " + apiProduct.quotaTimeUnit}</div>
                        </div>
                        <div className="tile-item">
                            <div className="tile-item-key">Allowed OAuth scope:</div>
                            <div className="tile-item-value">{apiProduct.scopes.join(",")}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1>API resources</h1>
                <div className="tile-container wrap">
                   <div className="tile-item">
                        <div className="tile-item-key">API proxies</div>
                        <div className="tile-item-value">{apiProduct.proxies.join(',')}</div>
                    </div>
                    <div className="tile-item">
                        <div className="tile-item-key">Paths</div>
                        <div className="tile-item-value">{apiProduct.apiResources.join(',')}</div>
                    </div>
                </div>
            </div>
            <div>
                <h1>API remote service targets</h1>
            </div>
            <div>
                <h1>Custom attributes</h1>
            </div>
            <div>
                <h1>Developer apps</h1>
            </div>
        </div>
        }
      </div>
    );
}

export default ApiProductView;







