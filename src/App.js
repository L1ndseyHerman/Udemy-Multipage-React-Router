// {Route} is a component somehow?!
import {Route} from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

//  "path" is a pre-coded prop that takes the path after the main website,
//  so this could be like "www.mywebsite.com/welcome".

// :productId the ":" is required, "productId" is a variable.
//  www.mywebsite.com/product-detail/<any value>
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;

//  Want to load dif components for dif url's, like 
//  our-domain.com => Component A,
//  our-domain.com/products => Component B.
