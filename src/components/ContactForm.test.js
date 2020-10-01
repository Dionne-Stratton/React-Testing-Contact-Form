import ContactForm from './ContactForm'
import React from 'react'
import {render, screen, fireEvent} from "@testing-library/react"

describe('Tests ContactForm', ()=>{
    test('App renders without errors', ()=>{
        render(<ContactForm/>);
    });

    test('user can fill out and submit form', async () => {
    
        render(<ContactForm/>)

        const firstNameInput = screen.getByLabelText(/first Name/i);
        const lastNameInput = screen.getByLabelText(/last name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const messageInput = screen.getByLabelText(/message/i);
        const button = screen.getByRole("button", {name:/submit/i});

        fireEvent.change(firstNameInput, {target:{name:'firstname', value:'Dionne'}});
        fireEvent.change(lastNameInput, {target:{name:'lastname', value:'Stratton'}});
        fireEvent.change(emailInput, {target:{name:'email', value:'nunya@bidness.com'}});
        fireEvent.change(messageInput, {target:{name:'message', value:'totes'}});
        fireEvent.click(button);
        
    });
});