import React, { Component }  from "react";
import { nanoid } from "nanoid";
import { Wrapper } from "./App.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
// import { Form } from "components/Form/Form.styled";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  inputSearchId = nanoid();

  handleInputChange = (event) => {
    const { name, value } = event.currentTarget
    this.setState({ [name]: value })
  }

  handlerSubmit = data => {
    this.setState(() => {
      this.state.contacts.push({
          id: nanoid(), 
          name: data.name,
          number: data.number,
      })
    })
    console.log(this.state.contacts)
  }

  // handleSubmitForm = (event) => {
  //   event.preventDefault();
  //   this.setState(() => {
  //     this.state.contacts.push({ 
  //       id: nanoid(), 
  //       name: this.state.name,
  //       number: this.state.number,
  //     })
  //   })

  //   this.resetForm();
  //   console.dir(this.state.contacts)
  // }

  resetForm = () => {
    this.setState({
      name: '', 
      number: '',
    })
  }

  render() {
    const contactListArray = this.state.contacts;
    const filterValueToLoverCase = this.state.filter.toLowerCase();
    const filteredContacts = contactListArray.filter(contact => contact.name.toLowerCase().includes(filterValueToLoverCase))

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handlerSubmit} contacts={contactListArray}/>
        {/* <Form onSubmit={this.handleSubmitForm}>
          <label htmlFor={this.inputNameId}>Name</label>
            <input
              id={this.inputNameId}
              type="text"
              value={this.state.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          <label htmlFor={this.inputNumberId}>Number</label>
            <input
              id={this.inputNumberId}
              type="tel"
              value={this.state.number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
            />
          <button type="submit">Add contact</button>
        </Form> */}
        <h2>Contacts:</h2>
        {/* <Filter ... /> */}
        <label htmlFor={this.inputSearchId}>
          Find contacts by name
        </label>
        <input 
          type="text" 
          name="filter"
          value={this.state.filter}
          id={this.inputSearchId}
          onChange={this.handleInputChange}
        />
        {/* <ContactList ... /> */}
        <ul>
          {
            filteredContacts.length > 0 
            ?
            filteredContacts.map(contact => <li key={contact.id}>{contact.name}: {contact.number}</li>)
            : 
            <p>Contact list is empty</p>
          }
        </ul>

      </Wrapper>
    );
  }
};
