import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../Rating';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductScreen() {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const { id } = useParams();

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

  // Find the product with the matching id
  const product = fetchedProducts.find((p) => p.id === id);

  if (!product) {
    return <h1 className='mt-5'>Product not found...</h1>;
  }

  return (
    <div>
      <Link to='/' className='btn btn-dark my-3'>
        {' '}
        Go back{' '}
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name}></Image>
        </Col>

        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} color={'#f8e825'}></Rating>
              <div>{product.numReviews} reviews</div>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>{product.price} €</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>{product.description}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product.price} €</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  variant='success'
                  className='btn btn-block'
                  disabled={product.countInStock === 0}
                  type='button'
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
