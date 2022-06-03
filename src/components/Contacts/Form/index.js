import { useState, useEffect } from 'react'

const initialFormValues = {fullname: '', phone_number: ''}
const Form = ({ contacts, setContacts }) => {
    //Form's State
    const [form, setForm] = useState(initialFormValues);
    //Remove text from inputs
    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])
    //Function that captures data entry to input
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }
    //Adding new data entered in the input while submitting the form
    const onSubmitForm = (e) => {
        e.preventDefault();

        if(form.fullname === '' || form.phone_number === ''){
            console.log("Formu doldurun")
            return false;
        }

        setContacts([...contacts, form ])
        
    }
  return (
    <form onSubmit={onSubmitForm}>
        <div>
            <input 
                name='fullname' 
                placeholder='Fullname'
                value={form.fullname}
                onChange={ onChangeInput }></input>
        </div>
        <div>
            <input 
                name='phone_number'
                placeholder='Phone Number' 
                value={form.phone_number}
                onChange={ onChangeInput }></input>
        </div>
        <div>
            <button>Add</button>
        </div>
    </form>
  )
}

export default Form