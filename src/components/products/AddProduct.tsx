import React from "react";

type Props = {
  defaultView: () => void;
}
const AddProduct: React.FC<Props> = (props) => {

 const {defaultView} = props;
  return <div>
    <div>
      <button onClick={()=> defaultView()}>Cancel</button>
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
  </div>;
};
export default AddProduct;