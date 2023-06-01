import {Card, Container, Row, Col, Image} from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"

const Trending = () => {

    return (
        <div>
            <br/>
            <Container id="trending">
                <h1 className="text-white text-center">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper mb-2">
                        <Card className="bg-dark text-white movieImage mt-2 mb-2 ">
                            <Image src={duneImage} alt="Dune Movies" className="image"/>
                            <Card.Title className="text-center p-2 m-1">DUNE</Card.Title>
                            <Card.Text className="text-left p-2">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage mt-2 ">
                            <Image src={everythingImage} alt="Dune Movies"className="image"/>
                            <Card.Title className="text-center p-2 m-1">EVERYTHING</Card.Title>
                            <Card.Text className="text-left p-2">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage mt-2 ">
                            <Image src={infiniteImage} alt="Dune Movies"className="image"/>
                            <Card.Title className="text-center p-2 m-1">infinite</Card.Title>
                            <Card.Text className="text-left p-2">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage mt-2 ">
                            <Image src={jokerImage} alt="Dune Movies"className="image"/>
                            <Card.Title className="text-center p-2 m-1">joker</Card.Title>
                            <Card.Text className="text-left p-2">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage mt-2 ">
                            <Image src={lightyearImage} alt="Dune Movies"className="image"/>
                            <Card.Title className="text-center p-2 m-1">lightyear</Card.Title>
                            <Card.Text className="text-left p-2">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage mt-2 ">
                            <Image src={morbiusImage} alt="Dune Movies"className="image"/>
                            <Card.Title className="text-center p-2 m-1">morbius</Card.Title>
                            <Card.Text className="text-left p-2">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>    
        </div>
    )
}

export default Trending 