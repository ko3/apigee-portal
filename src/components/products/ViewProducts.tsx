import React from "react";
import { ApiProducts } from "../../services/ApiProductsType";

type Props = {
    products: ApiProducts;
    route: (productName: string) => void;
}

const ViewProducts : React.FC<Props> = (props) => {
    const {products, route} = props;
    return <div className="list-view">
    <div className="list-headers">
      <div className="list-headers-cell list-cell-width-20">DISPLAY NAME</div>
      <div className="list-headers-cell list-cell-width-15">ENVIRONMENTS</div>
      <div className="list-headers-cell list-cell-width-45">DESCRIPTION</div>
      <div className="list-headers-cell list-cell-width-20">MODIFIED</div>
    </div>
    
    {products.apiProduct.map(product => (
           <div className="list-rows" key={product.name} onClick={()=>route("/" + product.name)}>
            <div className="list-rows-wrapper">
              <div className="list-rows-cell list-cell-width-20">{product.displayName}</div>
              <div className="list-rows-cell list-cell-width-15">{product.environments.join(",")}</div>
              <div className="list-rows-cell list-cell-width-45">{product.description}</div>
              <div className="list-rows-cell list-cell-width-20">{new Date(product.lastModifiedAt).toLocaleString()}</div>
            </div>
          </div>
        ))
    }
    
  </div>;
};
export default ViewProducts;