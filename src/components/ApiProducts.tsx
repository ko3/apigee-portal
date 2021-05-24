import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiProducts} from "../store/ApiProducts/ApiProductsActions";
import { AppState } from "../store/Types";
import {Route, useHistory} from "react-router-dom";
import ApiProductView from "./ApiProductView";


const ApiProducts = ()=>{
    const [displayList, setDisplayList] = useState(true);
    const [displayAddProduct, setDisplayAddProduct] = useState(false);
    const [backToProducts, setBackToProducts] = useState(false);
    const apiProducts = useSelector((state: AppState)=> state.apiProducts);
    const dispatch = useDispatch();
    useEffect(() => {
      console.log("Starting to get api-products");
      dispatch(fetchApiProducts());
      console.log("Completed get api-products");
    }, [dispatch]);

    const history = useHistory();
    const routeTo=(to: string) => {
      console.log(to);
      setDisplayList(false);
      setDisplayAddProduct(false);
      setBackToProducts(true);
      //dispatch(fetchApiProduct(to))
      history.push("/apiproducts" + to);
    };

    return (
      <div>
        <div>Count from call: {apiProducts && apiProducts.apiProduct && apiProducts.apiProduct.length}</div>
        {!displayAddProduct && 
        <div>
          <button onClick={()=> {setDisplayAddProduct(true); setDisplayList(false);}}>Add API Product</button>
        </div>
        }
        {backToProducts &&
        <div>
          <button onClick={()=> {setBackToProducts(false); setDisplayList(true);}}>Back To API Products</button>
        </div>
        }
        {displayAddProduct &&
        <div>
          <div>
            <button onClick={()=>{setDisplayAddProduct(false); setDisplayList(true);}}>Cancel</button>
            <button >Save</button>
          </div>
          <div className="catalog">
                <div className="panel-card">
                    <div className="card-header">
                        <div className="card-header-text">Product details</div>    
                    </div>
                    <div className="card-content">
                        <div className="two-col-container">
                            <div className="left-column">
                                <div className="feild-container">
                                  <span>
                                    <label>Name</label>
                                    <div>
                                      <input />
                                    </div>
                                  </span>
                                </div>
                                <div className="feild-container">
                                  <span>
                                    <label>Display Name</label>
                                    <div>
                                      <input />
                                    </div>
                                  </span>
                                </div>
                                <div className="feild-container">
                                  <span>
                                    <label>Description</label>
                                    <div>
                                      <input />
                                    </div>
                                  </span>
                                </div>
                                <div className="feild-container">
                                  <span>
                                    <label>Environment</label>
                                    <div>
                                      <input type="checkbox" id="prod" />
                                      <label htmlFor="prod">prod</label>
                                      <input type="checkbox" id="test" />
                                      <label htmlFor="test">test</label>
                                    </div>
                                  </span>
                                </div>
                            </div>
                            <div className="right-column">
                                <div className="feild-container">
                                  <span>
                                    <label>Access</label>
                                    <div>
                                      <select>
                                        <option value="private">private</option>
                                        <option value="public">public</option>
                                        <option value="restricted">restricted</option>
                                      </select>
                                    </div>
                                  </span>
                                </div>
                                <div className="feild-container">
                                  <span>
                                    <div>
                                      <input type="checkbox" id="approve-access" />
                                      <label htmlFor="approve-access">Automatically approve access requests</label>
                                    </div>
                                  </span>
                                </div>
                                <div className="feild-container">
                                  <span>
                                    <label>Quota</label>
                                    <div>
                                      <input />
                                      <span>requests every</span>
                                      <input />
                                      <select>
                                        <option value="minute">Minute</option>
                                        <option value="hour">Hour</option>
                                        <option value="day">Day</option>
                                        <option value="month">Month</option>
                                      </select>
                                    </div>
                                  </span>
                                </div>
                                <div className="feild-container">
                                  <span>
                                    <label>Allowed OAuth Scopes</label>
                                    <div>
                                      <input />
                                    </div>
                                  </span>
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
                      <div>Specify the API resources to allow access to by adding the API proxies and paths to the API Product.</div> 
                      <div className="two-col-container">
                        <div className="left-column">
                          <div className="feild-container">
                            <span>
                              <label>API proxies</label>
                              <div>
                                <button>Add a proxy</button>
                              </div>
                            </span>
                          </div>
                          <div className="feild-container">
                            <span>
                              <label>Paths</label>
                              <div>
                                <button>Add a path</button>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        }
        { displayList &&
        <div className="list-view">
          <div className="list-headers">
            <div className="list-headers-cell list-cell-width-20">DISPLAY NAME</div>
            <div className="list-headers-cell list-cell-width-15">ENVIRONMENTS</div>
            <div className="list-headers-cell list-cell-width-45">DESCRIPTION</div>
            <div className="list-headers-cell list-cell-width-20">MODIFIED</div>
          </div>
          
          {apiProducts.apiProduct.map(product => (
                 <div className="list-rows" key={product.name} onClick={()=>routeTo("/" + product.name)}>
                  <div className="list-rows-wrapper">
                    <div className="list-rows-cell list-cell-width-20">{product.displayName}</div>
                    <div className="list-rows-cell list-cell-width-15">{product.environments.join(",")}</div>
                    <div className="list-rows-cell list-cell-width-45">{product.description}</div>
                    <div className="list-rows-cell list-cell-width-20">{new Date(product.lastModifiedAt).toLocaleString()}</div>
                  </div>
                </div>
              ))
              }
          
        </div>
        }
        <Route path={"/apiproducts/:apiProductName"}>
          <ApiProductView />
        </Route>
      </div>
    );
}

export default ApiProducts;







