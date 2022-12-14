import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Text() {
    return (
        <Container>
            <Row>
                <Col className="mt-5 text-center">
                    <h1>Lorem ipsum dolor </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum doloribus impedit magnam similique velit. Accusamus distinctio doloremque impedit ipsa iure laudantium mollitia, porro quis quod reiciendis repellat, tempore ut voluptatum.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Text;