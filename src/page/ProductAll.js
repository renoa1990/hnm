import {React, useEffect,useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import {productAction} from '../redux/actions/productAction'
import { useDispatch } from 'react-redux';

const ProductAll = () => {
  const [productList , setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();


  const getProduct =  () => {
    let searchQuery = query.get("q")||"";
    console.log("쿼리값은",searchQuery)
    dispatch(productAction.getProduct(searchQuery));

    }
  
  
  useEffect(()=>{
    getProduct()

  },[query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map(item=><Col lg={3}>
            <ProductCard item = {item} /></Col>)}   
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll