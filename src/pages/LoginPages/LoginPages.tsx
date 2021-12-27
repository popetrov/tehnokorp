import { Container, Row, Col } from "react-bootstrap"
import { Login } from "../../components/Login/Login"

export const LoginPage = () => {
    return (
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                <Login/>
                </Col>
            </Row>
        </Container>
        
    )
}