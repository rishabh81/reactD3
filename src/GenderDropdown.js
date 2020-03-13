import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default ({genderSelected}) => (
    <Dropdown>
        <Dropdown.Toggle variant='primary' id='dropdown-basic'>
            Please Select gender
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item onSelect={()=>genderSelected('men')} >Men</Dropdown.Item>
            <Dropdown.Item onSelect={()=>genderSelected('women')} >Women</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
)