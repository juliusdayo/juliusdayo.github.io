import Dropdown from 'react-bootstrap/Dropdown';

function Select(props) {

	let itemList = <Dropdown.Item>sda</Dropdown.Item>;

	

	return(
		<Dropdown >
			<Dropdown.Toggle variant="dark" id="dropdown-basic">
				A Dropdown
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item disabled>Under Construction</Dropdown.Item>
				
			</Dropdown.Menu>
		</Dropdown>
	);
}

export default Select;