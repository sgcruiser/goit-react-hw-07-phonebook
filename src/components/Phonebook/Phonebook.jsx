import React from 'react';

import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';

import Section from '../Section';
import FormContacts from '../FormContacts';
import SearchContacts from '../SearchContacts';
import ContactsList from '../ContactsList';

import styles from './Phonebook.module.scss';

const Phonebook = () => {
  return (
    <div className={styles.phonebook}>
      <Section title="Phonebook">
        <FormContacts />
      </Section>
      <Section title="Contacts">
        <SearchContacts label="Find contacts by name" />
        <ContactsList />
      </Section>
    </div>
  );
};

// const mapStateToProps = state => ({
//   isLoading: contactsSelectors.getLoading(state),
//   isError: contactsSelectors.getError(state),
// });

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(Phonebook);
