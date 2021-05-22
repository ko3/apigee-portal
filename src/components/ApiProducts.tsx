import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiProducts} from "../store/ApiProducts/ApiProductsActions";
import { AppState } from "../store/Types";
import {Route, useHistory} from "react-router-dom";
import ApiProductView from "./ApiProductView";


const ApiProducts = ()=>{
  const [displayList, setDisplayList] = useState(true);
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
      //dispatch(fetchApiProduct(to))
      history.push("/apiproducts" + to);
    }

    return (
      <div>
        Count from call: {apiProducts && apiProducts.apiProduct && apiProducts.apiProduct.length}
        { displayList &&
        <div className="table-container">
          <div className="table-header">
            <div className="table-header-data">DISPLAY NAME</div>
            <div className="table-header-data">ENVIRONMENTS</div>
            <div className="table-header-data">DESCRIPTION</div>
            <div className="table-header-data">MODIFIED</div>
          </div>
          
          {apiProducts.apiProduct.map(product => (
                 <div className="table-row" key={product.name} onClick={()=>routeTo("/" + product.name)}>
                  <div className="table-data">{product.displayName}</div>
                  <div className="table-data">{product.environments.join(",")}</div>
                  <div className="table-data">{product.description}</div>
                  <div className="table-data">{new Date(product.lastModifiedAt).toLocaleString()}</div>
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







