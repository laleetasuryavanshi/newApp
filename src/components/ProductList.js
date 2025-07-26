import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:5000/api/products');
            console.log('Fetched products:', response.data); // Debugging line
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(filter.toLowerCase()) ||
        product.description.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <section id="products">
            <h2>Products</h2>
            <input
                type="text"
                placeholder="Filter by name or description"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <div className="product-list">
                {filteredProducts.map(product => (
                    <div className="product" key={product._id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>{product.benefits}</p>
                        <img src={`/images/${product.name}.jpg`} alt={product.name} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductList;