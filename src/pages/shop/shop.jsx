import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from "./product";
import './shop.css';

export const Shop = () => {
  return (
    <div classname="shop">
        <div classname="shopTitle" >
          <h1> Bienvenidos </h1>
        </div>
        <div className="Products">
            {PRODUCTS.map((product) =>  ( 
            
            <Product data={product} /> 
            
            ) )}
        </div>

     </div>
  );
}
