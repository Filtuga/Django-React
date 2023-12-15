import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

function Product({product}) {
  return (
    <div>
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product.id}`}><Card.Img src={product.image} fluid
            style={{ maxHeight: '270px', objectFit: 'cover' }} /></Link>
            <Card.Body>
                <Link to={`/product/${product.id}`}>
                   <Card.Title as="div">
                    <strong>{product.name}</strong>
                    </Card.Title> 
                </Link>

                <Card.Text as="h3" >
                        {product.price} €
                </Card.Text>

                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={"#f8e825"}/>
                <Card.Text as="div" >
                    <div className='mb-1'>
                        {product.rating} from {product.numReviews} reviews
                    </div>
                </Card.Text>

            </Card.Body>

        </Card>
    </div>
  )
}

export default Product