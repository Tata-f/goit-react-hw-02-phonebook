import React, { Component } from 'react';
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';
import Container from './components/Container';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const contact = {
      name,
      number,
      id: shortid.generate(),
    };
    const dubbleContact = contacts.map(contact => contact.name).includes(name);

    if (dubbleContact) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Container>
          <Form onSubmit={this.addContact}></Form>
        </Container>

        <Container>
          <ContactsList
            onDeleteContact={this.deleteContact}
            contacts={filteredContacts}
          ></ContactsList>
        </Container>

        <Container>
          <Filter onChange={this.changeFilter} value={filter}></Filter>
        </Container>
      </>
    );
  }
}

export default App;
