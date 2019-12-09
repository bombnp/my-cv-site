import React from 'react';

import "./Contacts.css"

const Contacts = (props) => {
    return (
        <div className="Contacts">
            <a href="mailto:bomb.np@gmail.com"><img src="/images/contacts/mail.png" alt="mail" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/bombnp"><img src="/images/contacts/fb.png" alt="facebook" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/bombnp"><img src="/images/contacts/github.png" alt="github" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/bomb_np"><img src="/images/contacts/ig.png" alt="instagram" /></a>
        </div>
    );
}
 
export default Contacts;