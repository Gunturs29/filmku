import {Card, Container, Row, Col, Image} from "react-bootstrap"
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images//superhero/avenger.jpg"
import batmanImage from "../assets/images//superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermancoverImage from "../assets/images//superhero/spiderman-cover.jpg"
import spidermanImage from "../assets/images//superhero/superman.jpg"

const Superhero = () => {

    return (
        <div>
            <br/>
            <Container id="superhero">
                <h1 className="text-white text-center">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage mt-2 ">
                            <Image src={antmanImage} alt="Dune Movies" className="image"/>
                            <Card.Title className="text-center p-2 m-1">ANTMAN</Card.Title>
                            <Card.Text className="text-left p-2">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage mt-2 ">
                            <Image src={avengerImage} alt="Dune Movies"className="image"/>
                            <Card.Title className="text-center p-2 m-1">AVENGER</Card.Title>
                            <Card.Text className="text-left p-2">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage mt-2 ">
                            <Image src={batmanImage} alt="Dune Movies"className="image"/>
                            <Card.Title className="text-center p-2 m-1">BATMAN</Card.Title>
                            <Card.Text className="text-left p-2">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage mt-2 ">
                            <Image src={robinhoodImage} alt="Dune Movies"className="image"/>
                            <Card.Title className="text-center p-2 m-1">ROBINHOOD</Card.Title>
                            <Card.Text className="text-left p-2">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage mt-2 ">
                            <Image src={spidermancoverImage} alt="Dune Movies"className="image"/>
                            <Card.Title className="text-center p-2 m-1">SPIDERMAN</Card.Title>
                            <Card.Text className="text-left p-2">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                            <Card.Text className="text-left p-2">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage mt-2 ">
                            <Image src={spidermanImage} alt="Dune Movies"className="image"/>
                            <Card.Title className="text-center p-2 m-1">SUPERMAN</Card.Title>
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

export default Superhero