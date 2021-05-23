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







