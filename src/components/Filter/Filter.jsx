import React from "react";
import { nanoid } from "nanoid";
import { Label } from "./Filter.styled";

export const Filter = ({filteredValue, onChange}) => {

    // const handleInputChange = (event) => {
    //     const { name, filteredValue } = event.currentTarget
    //     this.setState({ [name]: filteredValue })
    //   }
    
    const inputSearchId = nanoid();

    return (
        <>
            <Label htmlFor={inputSearchId}>
                Find contacts by name
            </Label>
            <input 
                id={inputSearchId}
                type="text" 
                name="filter"
                value={filteredValue}
                onChange={onChange}
            />
        </>
    )
}