import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/Products';
import Product from './components/Product';
import Exotic from './components/Exotic';
import NotFound from './components/NotFound';

function App () {
    
    return (
        <>  
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/products' >
                    <Route index element={<ProductList /> } />
                    <Route path=':id' element={<Product />} />
                    <Route path='exotic' element={<Exotic />} />
                </Route>

                {/* <Route path='/products' element={<ProductList />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/product/exotic' element={<Exotic />} /> */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )    
}

export default App;