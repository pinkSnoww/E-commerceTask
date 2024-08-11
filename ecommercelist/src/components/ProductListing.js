import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col,Pagination ,Dropdown} from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import Paginations from '../components/Pagination'
const apiUrl = 'https://fakestoreapi.com/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        console.log('response=>',response);
        
        setProducts(response.data);
        setLoading(false);
       setFilteredProducts(response.data); 
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleFilterChange = (filter) => {
    setFilter(filter);
    if (filter === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === filter));
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

 
  return (
    <Container>
      <Row><Col md={3}>
       
          <Dropdown>
      <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
      {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleFilterChange('all')}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterChange('electronics')}>electronics</Dropdown.Item>
        <Dropdown.Item onClick={() => handleFilterChange('fashion')}>fashion</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Col></Row>
      <Row>
        
        {filteredProducts.map((product, index) => (
          <Col md={3} key={index}>
            <ProductCard product={product} />
          </Col>
        ))}
        <Paginations
            productsPerPage={productsPerPage}
            totalProducts={filteredProducts.length}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
      </Row>
    </Container>
  );
};



export default ProductList;