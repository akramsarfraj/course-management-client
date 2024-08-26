import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavBar() {
    return (

        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand >Course Management</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="add-course">Add Course</Nav.Link>
                    <Nav.Link href="add-instance">Add Instance</Nav.Link>
                    <Nav.Link href="/list-course">List courses</Nav.Link>
                    <Nav.Link href="/list-instance">List instance</Nav.Link>

                </Nav>
            </Container>
        </Navbar>

    )
}

export default NavBar