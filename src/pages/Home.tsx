import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';  // Make sure your CSS file is correctly imported

export function Home() {
    return (
        <div className="home-container">
            <div className="small-carousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1508161887025-ebd8f2813550?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?text=First+slide"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h1>Welcome!</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?text=Second+slide"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Records</h3>
                            <p>Explore the world of music with our specially curated items.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1601941195319-8dee9f03ed86?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?text=Third+slide"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>CD's & More!</h3>
                            <p>Enjoy the best offers on all our music-themed products.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Row className="mt-4">
                <Col md={4}>
                    <h1 className="text-white">Visit Us</h1>
                    <p className="text-white">Stop by our store to see our full collection! We're open every day from 9 AM to 7 PM. Our friendly staff is always ready to help you find exactly what you're looking for. Enjoy a personalized shopping experience and discover unique items that you won't find online.</p>
                </Col>
                <Col md={4}>
                    <h1 className="text-white">Online Catalog</h1>
                    <p className="text-white">Browse our catalog online and see what's in store. You can find our complete collection on our website. Enjoy detailed product descriptions, high-quality images, and customer reviews to help you make informed decisions. Shop from the comfort of your home and take advantage of our easy online ordering system. Additionally, explore our exclusive online-only items and special features like using abandoned records for unique, customized pieces.</p>
                </Col>
                <Col md={4}>
                    <h1 className="text-white">Exclusive Deals</h1>
                    <p className="text-white">Sign up for exclusive deals and updates on new arrivals. Don't miss out on our special promotions and discounts! As a subscriber, you'll receive early access to sales, personalized recommendations, and special offers that are only available to our valued customers. Join our community and stay connected with the latest trends and products. Plus, get the chance to use abandoned records for exclusive, one-of-a-kind creations, only available through our online platform.</p>
                </Col>
            </Row>
        </div>
    );
}


