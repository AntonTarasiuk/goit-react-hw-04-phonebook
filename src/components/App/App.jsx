import { useState, useEffect }  from "react";
import { nanoid } from "nanoid";
import { Wrapper } from "./App.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts') ?? []));
  const [filter, setFilter] = useState('');

  useEffect(() =>
    localStorage.setItem('contacts', JSON.stringify(contacts)), 
    [contacts]
  )

  const handleFilter = (event) => {
    const { value } = event.currentTarget
    setFilter(value)
  }

  const handlerSubmit = data => {
    const contact = {
      id: nanoid(), 
      name: data.name,
      number: data.number,
    }
    const alertMessage = `${contact.name} is already in contacts.`
    const newContact = contacts.map(contactEl => contactEl.name)
    if (!newContact.includes(contact.name)) {
      setContacts([ ...contacts, contact ])
    } else {
      alert(alertMessage)
    }
  }

  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  // const handleChangeContact = id => {
   
  // }

  const filterValueToLoverCase = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValueToLoverCase))

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handlerSubmit} contacts={contacts}/>
      <h2>Contacts:</h2>
      <Filter filteredValue={filterValueToLoverCase} onChange={handleFilter} />
      <ContactList 
        data={filteredContacts} 
        onDeleteContact={handleDeleteContact} 
        // onChangeContact={handleChangeContact}
      />
    </Wrapper>
  );
};