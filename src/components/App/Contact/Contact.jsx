import React from "react";
import { ContactEl, DeleteButton } from "./Contact.styled";

export const Contact = ({ id, name, number, onDeleteContact }) => {
    return (
        <ContactEl>
            {name}: {number}
            <DeleteButton type="button" onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
        </ContactEl>
    )
}