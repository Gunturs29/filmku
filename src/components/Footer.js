import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const Footer = () => {

    return(
        <div >
            <Container className='daftar'>
                <h1 className='text-center text-white'>Daftar</h1>
            <Form>
                <Row>
                    <Col md={6} className='mb-4'>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col md={6}>
                    <Form.Control placeholder="Last name" />
                </Col>
            </Row>
            <Button variant="primary" type="submit" className='mt-2 '>
            Submit
            </Button>
            </Form>
            
        </Container>
        <div className='mt-4'>
            <footer className='text-center text-white    border'>
                Guntur Sukmaraharjo
            </footer>
            </div>
            
        </div>
    )
}

export default Footer