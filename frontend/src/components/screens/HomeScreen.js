import React, {useState, useEffect} from 'react'
// import products from '../../products'
import {Row, Col} from'react-bootstrap'
import Product from '../Product'
import axios from 'axios'

function HomeScreen() {
    const [fetchedProducts, setFetchedProducts] = useState([]);

    useEffect(() => {
      async function fetchProducts() {
        try {
          const { data } = await axios.get('http://localhost:8000/api/products/');
          setFetchedProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
      fetchProducts();
    }, []);
  
    return (
      <div>
        <h1 className='text-center mt-3'>Latest Products</h1>
        <Row>
          {fetchedProducts.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }

export default HomeScreen