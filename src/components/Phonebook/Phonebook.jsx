import { Component } from 'react';

import Section from '../Section';
import FormContacts from '../FormContacts';
import SearchContacts from '../SearchContacts';
import ContactsList from '../ContactsList';
import Loader from '../Loader';

import styles from './Phonebook.module.scss';

class Phonebook extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={styles.phonebook}>
        <Section title="Phonebook">
          <FormContacts />
        </Section>
        {this.props.isLoading && <Loader />}

        <Section title="Contacts">
          <SearchContacts label="Find contacts by name" />
          {this.props.isError ? (
            <p className={styles.phonebook__error}>! Connection error</p>
          ) : (
            <ContactsList />
          )}
        </Section>
      </div>
    );
  }
}

export default Phonebook;
