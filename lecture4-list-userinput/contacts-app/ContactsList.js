import React from 'react';
import { SectionList, Text } from 'react-native';
import Row from './Row';
import PropTypes from 'prop-types';

// SectionList: has its own data array, can override the renderItem function with own custom render
// render section header as well 
const renderItem = ({ item }) => (<Row {...item} />)

// title field matches to title below
const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

const ContactsList = props => {
    const contactsByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {});
    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter]
    }));
    return (<SectionList
        renderSectionHeader={renderSectionHeader}
        sections={sections}
        renderItem={renderItem}
    />);
}

ContactsList.propTypes = {
    contacts: PropTypes.array
}

export default ContactsList; 