
import {Container,Row,Col} from 'react-bootstrap';
import Avatar from './Avatar.js';
import Caption from './Caption.js';

function Intro(props){
	return(
	<Container fluid>
		<Row>
			<Col sm={5} bg="dark">
				<Avatar animation="glow"/>	
			</Col>
			<Col  bg="dark">
				<Caption desc={props.desc}/>
			</Col>
		</Row>
	</Container>
	)
}


export default Intro;