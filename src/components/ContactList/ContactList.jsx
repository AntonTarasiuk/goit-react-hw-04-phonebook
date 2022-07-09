import React from "react";
import { Contact } from "components/App/Contact/Contact";
import { ListOfContacts } from "./ContactList.styled";

export const ContactList = ({data, onDeleteContact}) => {
    const arrLength = data.length
    if (arrLength > 0) {
        return (
            <ListOfContacts>
                {data.map(({id, name, number}) => <Contact key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact}/>)}
            </ListOfContacts>
        )
    } return <p>Contact list is empty</p>
}
