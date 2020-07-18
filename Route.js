import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductItem from './components/ProductItems';
import NavBar from './components/NavBar';
import ProductPage from './components/Productpage'


function RouteConfig() {
  return (
    <div>
      <Router>
          <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route exact path="/Product" element={<ProductPage />}>
                 <Route path='/' element={<Product />} />
                <Route path=":slug" element={<ProductItem />}/>
                </Route>
                <Route path="*" component={()=><h2>404 Not Found</h2>}/>
                
            </Routes>
        </Router>
    </div>
  );
}

export default RouteConfig;