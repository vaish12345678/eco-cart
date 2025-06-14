import React, { useState } from 'react';
import axios from 'axios';

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    material: '',
    weight: '',
    supplier: '',
    sustainabilityScore: '',
    price: '',  // <-- added price field
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/products/add', product);
      alert('Product added successfully!');
      console.log(res.data);
      // Reset form after successful upload
      setProduct({
        name: '',
        category: '',
        material: '',
        weight: '',
        supplier: '',
        sustainabilityScore: '',
        price: '',  // reset price too
      });
    } catch (err) {
      console.error(err);
      alert('Error adding product.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <h2>Add Product (Retailer)</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required /><br/><br/>
        <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} required /><br/><br/>
        <input type="text" name="material" placeholder="Material" value={product.material} onChange={handleChange} required /><br/><br/>
        <input type="number" name="weight" placeholder="Weight" value={product.weight} onChange={handleChange} required /><br/><br/>
        <input type="text" name="supplier" placeholder="Supplier Name" value={product.supplier} onChange={handleChange} required /><br/><br/>
        <input type="number" name="sustainabilityScore" placeholder="Sustainability Score" value={product.sustainabilityScore} onChange={handleChange} required /><br/><br/>
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required /><br/><br/>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
