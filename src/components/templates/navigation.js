import {Navbar,Nav,Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from './Dropdown.js';
function Navigation(){
	return (
		<Navbar bg="gray" expand="lg" fixed="top" >
		  <Container>
		    <Navbar.Brand href="#home">Julius Caezar C. Coros</Navbar.Brand>
		    <Dropdown/>
		  </Container>
		</Navbar>
		)
}

export default Navigation;