import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style/style.css';
import LazyLoad from 'react-lazyload';
const ProductCard = ({ product }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card className="product-card">
      <LazyLoad height={150} offset={100}>
        <img src={product.image} alt={product.name} className="card-img-top" />
      </LazyLoad>
      <CardBody>
        <CardTitle>{product.category}</CardTitle>
        <CardText>{product.price}</CardText>
        <Button variant="primary" outline onClick={handleShow}>
        افزودن به سبد خرید
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>سبد خرید</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         چیزی اضافه نشده
        </Offcanvas.Body>
      </Offcanvas>
      </CardBody>
    </Card>
  );
};

export default ProductCard;

