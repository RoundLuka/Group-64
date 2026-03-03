import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Products from './components/Products';
import NotFound from './components/NotFound';


function App () {
    
    return (
        <>  
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/products/:id' element={<Products />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )    
}

export default App;