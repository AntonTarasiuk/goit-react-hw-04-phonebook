import React, { Component }  from "react";
import { nanoid } from "nanoid";
import { Form, Input, SubmitButton } from "./ContactForm.styled";

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    inputNameId = nanoid();
    inputNumberId = nanoid();

    handleInputChange = (event) => {
        const { name, value } = event.currentTarget
        this.setState({ [name]: value })
    }

    handleSubmitForm = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state)
        this.resetForm();
        // console.dir(this.state.contacts)
    }

    resetForm = () => {
        this.setState({
            name: '', 
            number: '',
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmitForm}>
                <label htmlFor={this.inputNameId}>Name</label>
                    <Input
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
                    <Input
                    id={this.inputNumberId}
                    type="tel"
                    value={this.state.number}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleInputChange}
                    />
                <SubmitButton type="submit">Add contact</SubmitButton>
            </Form>
        )
    }
}