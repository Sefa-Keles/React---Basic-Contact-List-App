import { useState } from 'react'

const List = ({ contacts }) => {
  //List's State
  const [inputText, setInputText] = useState("")
  //Function that filters the word I typed in the entry from the whole list by name or phone number
  const filteredText = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
      .toString()
      .toLowerCase()
      .includes(inputText.toLocaleLowerCase())
    )
  })

  return (
    <div>
      <input placeholder= "Search" value= { inputText } onChange= {(e) => setInputText(e.target.value)}/>
      <ul>
        {
          filteredText.map((contact, index) => 
            <li key={index}>
              Name: {contact.fullname}<br/>
              Phone: {contact.phone_number}
              <hr />
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default List