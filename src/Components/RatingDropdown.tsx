import { InputGroup, Form, DropdownButton, Dropdown, Button } from "react-bootstrap"
import { ChangeEvent, SetStateAction, useState } from "react";
import { sendRatingToDb } from "../DB/senderHelpers/sendRatingToDB";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Configs/firebase";
import { User } from "firebase/auth";

type RatingDropdownProps = {
    albumId: string;
}

export const RatingDropdown = ({ albumId }:RatingDropdownProps) => {
    const [inputValue, setInputValue] = useState("");
    const options = [];
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(false);

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

    const submitBtnClicked = () => {
        if ((/^[1-9]*$/.test(inputValue) && parseInt(inputValue) < 11)){
            setLoading(true);

            sendRatingToDb(parseInt(inputValue), albumId, user as User);
            
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }

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

            <Button variant = {loading? "success":"primary"} disabled = {loading} onClick={submitBtnClicked}>Submit</Button>
          </InputGroup>
    </>
    );
}