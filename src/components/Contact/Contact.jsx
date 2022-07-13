import React from "react";
import { ContactEl, ContactNumber, DeleteButton } from "./Contact.styled";

export const Contact = ({ id, name, number, onDeleteContact, onChangeContact }) => {
    return (
        <ContactEl>
            {name}: <ContactNumber>{number}</ContactNumber>
            <DeleteButton type="button" onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
            <button type="button" onClick={() => onChangeContact(id)}>
                sdgdfg
            </button>
        </ContactEl>
    )
}