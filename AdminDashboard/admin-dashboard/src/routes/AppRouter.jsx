import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AddProducts from '../pages/AddProducts'
import Products from '../pages/Products'
function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add-products' element={<AddProducts />} />
            <Route path='/products' element={<Products />} />
        </Routes>

    )
}

export default AppRouter