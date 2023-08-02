
import { Col, Button, Card} from "react-bootstrap";


    // {
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     "rating": {
    //         "rate": 3.9,
    //         "count": 120
    //     }
    // }
    // ,[])

const ProductCard =( {productDetail})=>{
    const {image, title, description} = productDetail;
    return(
        <Col md={3} className="mb-3 d-flex justify-content-center text-center">
            <Card>
      <Card.Img variant="top" src={image} className="img-fluid mx-auto" style={{width:'100px'}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title></Card.Title>
        <Card.Text>{description}</Card.Text>
        {/* <Card.Text>{rate}</Card.Text> */}
        <Button className="me-3" variant="primary">Add t cart</Button>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
            
        
        </Col>

    )
}
export default ProductCard;