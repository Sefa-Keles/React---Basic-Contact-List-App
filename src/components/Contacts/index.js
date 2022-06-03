import React, { useState } from 'react'
import List from './List'
import Form from './Form'

const Contacts = () => {
    //Dummy Data
    const [contacts , setContacts] = useState([
        {
            fullname: "XXX",
            phone_number: "123"
        },
        {
            fullname: "YYY",
            phone_number: "456"
        },
        {
            fullname: "ZZZ",
            phone_number: "789"
        }
    ]);

  return (
    <div>
        Contacts Page
        <List contacts = {contacts}/>
        <Form contacts = {contacts} setContacts = {setContacts}/>
    </div>
  )
}

export default Contacts