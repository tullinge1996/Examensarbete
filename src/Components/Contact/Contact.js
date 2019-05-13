import React, { Component } from 'react';
import './Contact.css';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';



class Contact extends Component {
    render() {
        return (
            <div className ="contactcontainer">
                <h1 className ="contacttext">Kontakt</h1>
            <Form className ="contactcontainer2">
                <FormGroup>
          <Label className="emailtext" for="exampleEmail">Name</Label>
          <Input type="Name" name="Name" id="exampleEmail" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label className="passwordtext" for="examplePassword">Email</Label>
          <Input type="Email" name="Email" id="examplePassword" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label  className="textarea" for="exampleText">Text Area</Label>
          <Input  type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button className ="contactbutton">Submit</Button>
            </Form>
            </div>
        );
    }
}

export default Contact;