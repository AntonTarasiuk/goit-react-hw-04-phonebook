import React, { Component }  from "react";
import { nanoid } from "nanoid";
import { Wrapper } from "./App.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
// import { Form } from "components/Form/Form.styled";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  
  componentDidMount(prevProps, prevState) {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) {
      this.setState({ contacts })
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  handleFilter = (event) => {
    const { name, value } = event.currentTarget
    console.log(name)
    this.setState({ [name]: value })
  }

  handlerSubmit = data => {
    const contact = {
      id: nanoid(), 
      name: data.name,
      number: data.number,
    }
    const alertMessage = `${contact.name} is already in contacts.`
    const newContact = this.state.contacts.map(contactEl => contactEl.name)
    if (!newContact.includes(contact.name)) {
      this.setState({
        contacts: [contact, ...this.state.contacts]
      })
    } else {
        alert(alertMessage)
    }
  }

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  handleChangeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  render() {
    const contactListArray = this.state.contacts;
    const filterValueToLoverCase = this.state.filter.toLowerCase();
    const filteredContacts = contactListArray.filter(contact => contact.name.toLowerCase().includes(filterValueToLoverCase))

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handlerSubmit} contacts={contactListArray}/>
        <h2>Contacts:</h2>
        <Filter filteredValue={filterValueToLoverCase} onChange={this.handleFilter} />
        <ContactList 
          data={filteredContacts} 
          onDeleteContact={this.handleDeleteContact} 
          onChangeContact={this.handleChangeContact}
        />
      </Wrapper>
    );
  }
};
