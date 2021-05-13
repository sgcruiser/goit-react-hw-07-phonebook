import { connect } from 'react-redux';

import { contactsOperations } from '../../redux/contacts';

import FormContacts from './FormContacts';

// const mapStateToProps = state => ({
//   contacts: contactsSelectors.getListContacts(state),
// });

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(FormContacts);
