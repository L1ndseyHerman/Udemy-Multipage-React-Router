// {Route} is a component somehow?!
import {Route} from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';

//  "path" is a pre-coded prop that takes the path after the main website,
//  so this could be like "www.mywebsite.com/welcome".
function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;

//  Want to load dif components for dif url's, like 
//  our-domain.com => Component A,
//  our-domain.com/products => Component B.
