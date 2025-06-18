import React from 'react'
import '../css/productform.css'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct, updateForm, clearForm } from '../redux/productSlice';

function ProductForm() {
    const dispatch = useDispatch();

    const { formData, status } = useSelector((state) => state.product);

    const handleChange = (e) => {
        dispatch(updateForm({ name: e.target.name, value: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(formData));
        dispatch(clearForm());
    };
    return (
        < div >
            <form onSubmit={handleSubmit} className='product-form'>
                <label>Ürün Adı</label>
                <input onChange={handleChange} type="text" name='name' value={formData.name || ''} />

                <label>Açıklama</label>
                <textarea
                    name='description'
                    rows="5"
                    placeholder="Ürün hakkında detaylı bilgi girin..."
                    className="desc-input"
                    onChange={handleChange}
                    value={formData.description || ''}
                />

                <label>Fiyat</label>
                <input type="number" name='price' onChange={handleChange} value={formData.price || ''} />

                <label>Stok Adedi</label>
                <input type="number" name='stock' onChange={handleChange} value={formData.stock || ''} />

                <label>Kategori</label>
                <select
                    name="category"
                    onChange={handleChange}
                    value={formData.category || ''}
                >
                    <option value="">Kategori Seç</option>
                    <option value="electronics">Elektronik</option>
                    <option value="clothing">Giyim</option>
                    <option value="home">Ev Eşyası</option>
                    <option value="books">Kitaplar</option>
                </select>

                <button type='submit' disabled={status === 'loading'}>Ürün Ekle</button>
            </form>
        </div>
    )
}

export default ProductForm