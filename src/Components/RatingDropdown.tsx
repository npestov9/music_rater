import { InputGroup, Form, DropdownButton, Dropdown } from "react-bootstrap"
import { ChangeEvent, SetStateAction, useState } from "react";

export const RatingDropdown = () => {
    const [inputValue, setInputValue] = useState("");
    const options = [];

    for (let i = 10; i >= 1; i--) {
        options.push(
        <Dropdown.Item key={i} eventKey={i} onClick={()=>handleOnDropDownElementClicked(String(i))}>
            {i}
        </Dropdown.Item>
        );
    }
    
    const handleOnInputChange =(e: ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        if (value === '' || (/^[1-9]*$/.test(value) && parseInt(value) < 11)){
            setInputValue(value);
        }
    }

    const handleOnDropDownElementClicked = (ratingNum: string)=>{
        setInputValue(ratingNum);
    }

    return (
        <>
      <InputGroup className="mb-3">
        <Form.Control
            aria-label="Text input with dropdown button"
            value = {inputValue}
            onChange= {handleOnInputChange}
            />

        <DropdownButton
          variant="outline-secondary"
          title="Rating"
          id="input-group-dropdown-2"
          align="end"
        >
        {options}

        </DropdownButton>
          </InputGroup>
    </>
    );
}