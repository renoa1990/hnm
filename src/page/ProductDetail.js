import React,{useEffect, useState} from 'react'
import { Container ,Row, Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id }= useParams()
  const [product,setProduct] = useState("null");

  const getProductDetail = async () =>{
    let url = `https://my-json-server.typicode.com/renoa1990/hnm/products/${id}`
    let response = await fetch(url)
    let data = await response.json();
    setProduct(data)
    console.log("데이터는" ,data)

  }
  useEffect(()=>{
    getProductDetail()
  },[])


  return (
    <div>
      <Container>
        <Row>
          <Col className='product-img'>
            <img src={product?.img}/>
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
          </Col>
        </Row>

      

      </Container>


    </div>
  )
}

export default ProductDetail