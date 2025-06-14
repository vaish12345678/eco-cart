import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function RetailerDashboard() {
  const [products, setProducts] = useState([]);

  // Assume retailerId stored in localStorage after login
  const retailerId = localStorage.getItem('retailerId');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/products/all`);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProduct = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:5000/api/products/delete/${productId}`);
        alert("Product deleted");
        fetchProducts(); // refresh list
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', marginTop: '50px' }}>
      <h2>Retailer Dashboard</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table border="1" width="100%" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Material</th>
              <th>Weight</th>
              <th>Supplier</th>
              <th>Score</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.material}</td>
                <td>{p.weight}</td>
                <td>{p.supplier}</td>
                <td>{p.sustainabilityScore}</td>
                <td>
                  <button onClick={() => deleteProduct(p._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
