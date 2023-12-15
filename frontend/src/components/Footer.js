import React from 'react'
import {Container, Row, Col} from'react-bootstrap'

function Footer() {
  return (

        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3" xs={12} sm={12} md={12} lg={12} xl={12}>
                        <p>Copyright © Filipe Ferrão 2023</p>
                    </Col>
                </Row>
            </Container>
        </footer>
  )
}

export default Footer