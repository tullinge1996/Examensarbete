import React, { Component } from 'react';
import './Contact.css';
import './main';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';



class Contact extends Component {
    render() {
        return (
            <div className ="contactcontainer">
                <h1 className ="contacttext">Kontakt</h1>
            <Form id ="contactForm" className ="contactcontainer2">
                <FormGroup>
          <Label className="emailtext" for="exampleEmail">Name</Label>
          <Input type="Name" name="Name" id="exampleEmail" placeholder="Name" required/>
        </FormGroup>
        <FormGroup>
          <Label className="passwordtext" for="examplePassword">Email</Label>
          <Input type="Email" name="Email" id="examplePassword" placeholder="Email" required/>
        </FormGroup>
        <FormGroup>
          <Label  className="textarea" for="exampleText">Meddelande</Label>
          <Input  type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button type="submit" className ="contactbutton">Submit</Button>
            </Form>
            <div className="alert"><p>Ditt meddelande har skickats!</p></div>
            </div>
        );
    }
}

export default Contact;