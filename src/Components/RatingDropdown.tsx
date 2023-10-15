import { InputGroup, Form, DropdownButton, Dropdown, Button } from "react-bootstrap"
import { ChangeEvent, SetStateAction, useState } from "react";
import { useSendRatingToDb } from "../DB/senderHelpers/sendRatingToDB";

type RatingDropdownProps = {
    albumId: string;
}

export const RatingDropdown = ({ albumId }:RatingDropdownProps) => {
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

    const useSubmitBtnClicked = () => {
        useSendRatingToDb(parseInt(inputValue),albumId);
    }

    return (
        <>
        <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Rating"
          id="input-group-dropdown-2"
          align="end"
        >
        {options}

        </DropdownButton>
        <Form.Control
            aria-label="Text input with dropdown button"
            value = {inputValue}
            onChange= {handleOnInputChange}
            />

            <Button onClick={useSubmitBtnClicked}>Submit</Button>
          </InputGroup>
    </>
    );
}