import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../shoes';
// import ProductItem from './ProductItems'

function Product() {

    return (
        <>
            <h1>Welcome to Product</h1>
            <div className="productContainer">
                {Object.entries(Shoes.shoes).map(([slug, {name, img}]) =>    (     
                    
                    
                    
                        <Link 
                            className="link" to={`/Product/${slug}`}>
                                <h4>{name}</h4>
                                <img src={img} height={150} alt="shoe" />
                    </Link>
                  
                )
                )
                        
                
                            }
            </div>
        </>
    );
    
}

export default Product;