// {Route} is a component somehow?!

//  Switch prevents mult Routes from being active at the same time!
//  It matches the first Route it finds though, so may need to re-order them!
//  Or use "exact" as a prop. Sets it to true, makes Switch look for an exact match 
//  instead of just contained in it.

//  Redirect changes the url to a different url when used as a component in the return.
import {Route, Switch, Redirect} from 'react-router-dom';

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
        <Switch>
          <Route path="/" exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

//  Want to load dif components for dif url's, like 
//  our-domain.com => Component A,
//  our-domain.com/products => Component B.
