import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { ApiProduct, Attribute } from "../../store/Types";
import { AppState } from "../../store/Types";

type Props = {
    defaultView: () => void;
}
const ViewProduct: React.FC<Props> = (props)=>{
    const {apiProductName} = useParams() as {
        apiProductName: string
    }
    const apiProduct: ApiProduct | undefined = useSelector((state: AppState)=> {
        const val = state.apiProducts.apiProduct.find(prd => {
           return prd.name === apiProductName;
        });
        return val;
    });
    const getValue=(attributes:Attribute[], key: string) : string => {
        const value = attributes.filter(attr => attr.name === key).map(attr => attr.value)[0];
        return value;
    }
    
    const {defaultView} = props;
    return (
      <div>
        <button onClick={()=> defaultView()}>Back To API Products</button>
        { apiProduct && 
            <div >
                <div className="catalog">
                    <div className="panel-card">
                        <div className="card-header">
                            <div className="card-header-text">Product details</div>    
                        </div>
                        <div className="card-content">
                            <div className="two-col-container">
                                <div className="left-column">
                                    <div className="feild-container">
                                        <div className="feild-name">Name:</div>
                                        <div className="feild-value">{apiProduct.name}</div>
                                    </div>
                                    <div className="feild-container">
                                        <div className="feild-name">Display Name:</div>
                                        <div className="feild-value">{apiProduct.displayName}</div>
                                    </div>
                                    <div className="feild-container">
                                        <div className="feild-name">Description:</div>
                                        <div className="feild-value">{apiProduct.description}</div>
                                    </div>
                                    <div className="feild-container">
                                        <div className="feild-name">Environment:</div>
                                        <div className="feild-value">{apiProduct.environments.join(",")}</div>
                                    </div>
                                </div>
                                <div className="right-column">
                                    <div className="feild-container">
                                        <div className="feild-name">Access:</div>
                                        <div className="feild-value">{getValue(apiProduct.attributes, "access")}</div>
                                    </div>
                                    <div className="feild-container">
                                        <div className="feild-name">Request Approval:</div>
                                        <div className="feild-value">{apiProduct.approvalType}</div>
                                    </div>
                                    <div className="feild-container">
                                        <div className="feild-name">Quota:</div>
                                        <div className="feild-value">{apiProduct.quota + " request every " + apiProduct.quotaInterval + " " + apiProduct.quotaTimeUnit}</div>
                                    </div>
                                    <div className="feild-container">
                                        <div className="feild-name">Allowed OAuth scope:</div>
                                        <div className="feild-value">{apiProduct.scopes.join(",")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalog">
                    <div className="panel-card">
                        <div className="card-header">
                            <div className="card-header-text">API resources</div>    
                        </div>
                        <div className="card-content">
                            <div className="two-col-container">
                                <div className="left-column">
                                    <div className="feild-container">
                                        <div className="feild-name">API proxies:</div>
                                        <div className="feild-value">{apiProduct.proxies.join(',')}</div>
                                    </div>
                                    <div className="feild-container">
                                        <div className="feild-name">Paths</div>
                                        <div className="feild-value">{apiProduct.apiResources.join(',')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalog">
                    <div className="panel-card">
                        <div className="card-header">
                            <div className="card-header-text">API remote service targets</div>    
                        </div>
                        <div className="card-content">
                            <div className="two-col-container">
                                <div className="left-column">
                                    <div className="feild-container">
                                    <div className="feild-name">N/A</div>
                                        <div className="feild-value">N/A</div>
                                    </div>
                                </div>
                                <div className="right-column">
                                    <div className="feild-container">
                                        <div className="feild-name">N/A</div>
                                        <div className="feild-value">N/A</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalog">
                    <div className="panel-card">
                        <div className="card-header">
                            <div className="card-header-text">Custom attributes</div>    
                        </div>
                        <div className="card-content">
                            <div className="two-col-container">
                                <div className="left-column">
                                    <div className="feild-container">
                                    <div className="feild-name">N/A</div>
                                        <div className="feild-value">N/A</div>
                                    </div>
                                </div>
                                <div className="right-column">
                                    <div className="feild-container">
                                        <div className="feild-name">N/A</div>
                                        <div className="feild-value">N/A</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalog">
                    <div className="panel-card">
                        <div className="card-header">
                            <div className="card-header-text">Developer apps</div>    
                        </div>
                        <div className="card-content">
                            <div className="two-col-container">
                                <div className="left-column">
                                    <div className="feild-container">
                                    <div className="feild-name">N/A</div>
                                        <div className="feild-value">N/A</div>
                                    </div>
                                </div>
                                <div className="right-column">
                                    <div className="feild-container">
                                        <div className="feild-name">N/A</div>
                                        <div className="feild-value">N/A</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
      </div>
    );
}

export default ViewProduct;







