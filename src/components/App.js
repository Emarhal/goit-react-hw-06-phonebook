import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import ContactForm from "./contactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("items");
    if (contacts) {
      const parsedItems = JSON.parse(contacts);
      this.setState({ contacts: parsedItems });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("items", JSON.stringify(this.state.contacts));
    }
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((item) => item.id !== id),
    }));
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (name, number) => {
    const isDuplicate = this.state.contacts.some((item) => item.name === name);

    if (isDuplicate) {
      alert(name + " is already in contacts ");
      return;
    }

    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.setState((prevState) => {
      const newContacts = [newContact, ...prevState.contacts];
      return { contacts: newContacts };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const formattedFilter = filter.toLowerCase().trim();
    const filteredContacts = contacts.filter((item) =>
      item.name.toLowerCase().includes(formattedFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList
          contacts={filteredContacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
