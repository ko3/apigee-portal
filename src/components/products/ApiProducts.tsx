import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiProducts} from "../../store/ApiProducts/ApiProductsActions";
import { AppState } from "../../store/Types";
import {Route, useHistory} from "react-router-dom";
import ViewProduct from "./ViewProduct";
import AddProduct from "./AddProduct";
import ViewProducts from "./ViewProducts";


const ApiProducts = ()=>{
    const [displayList, setDisplayList] = useState(true);
    const [displayAddProduct, setDisplayAddProduct] = useState(false);
    const [displayAddProductButton, setDisplayAddProductButton] = useState(true);
    const apiProducts = useSelector((state: AppState)=> state.apiProducts);
    const dispatch = useDispatch();
    useEffect(() => {
      console.log("Starting to get api-products");
      dispatch(fetchApiProducts());
      console.log("Completed get api-products");
    }, [dispatch]);

    const history = useHistory();
    const routeTo=(productName: string) => {
      console.log(productName);
      setDisplayList(false);
      setDisplayAddProduct(false);
      setDisplayAddProductButton(false);
      history.push("/apiproducts" + productName);
    };

    const defaultProductView = () => {
      setDisplayAddProduct(false);
      setDisplayList(true);
      setDisplayAddProductButton(true);
    };

    const backToProductView = () => {
      setDisplayAddProduct(false);
      setDisplayList(true);
      setDisplayAddProductButton(true);
      history.push("/apiproducts");
    };
 
    return (
      <div>
        <div>Count from call: {apiProducts && apiProducts.apiProduct && apiProducts.apiProduct.length}</div>
        {displayAddProductButton && 
        <div>
          <button onClick={()=> {setDisplayAddProduct(true); setDisplayList(false); setDisplayAddProductButton(false);}}>Add API Product</button>
        </div>
        }
 
        {displayAddProduct && <AddProduct defaultView={defaultProductView}/>}
        {displayList && <ViewProducts products={apiProducts} route={routeTo}/>}
        <Route path={"/apiproducts/:apiProductName"}>
          <ViewProduct defaultView={backToProductView}/>
        </Route>
      </div>
    );
}

export default ApiProducts;







