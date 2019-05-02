import React from 'react';
import "./Contact.css"
import PropTypes from "prop-types"

function Contact(props){

    return <div className ="context">
    <span>{props.name}</span>
    
    </div>;
}
export default Contact;

Contact.protoTypes={
name: PropTypes.string.isRequired
};