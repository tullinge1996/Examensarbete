import React, { Component } from 'react';
import './Contact.css';
import './main';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import firebaseConf from './main';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
  }

  resetForm() {
    this.refs.contactForm.reset();
  }

  componentWillMount() {
    let formRef = firebaseConf.database().ref('Form').orderByKey().limitToLast(6);
    formRef.on('child_added', snapshot => {
      const { name, email, message } = snapshot.val();
      const data = { name, email, message };
      this.setState({ form: [data].concat(this.state.form) });
    })
  }
  sendMessage(e) {
    e.preventDefault();
    const params = {
      name: this.inputName.value,
      email: this.inputEmail.value,
      message: this.textAreaMessage.value
    };
    if (params.name && params.email && params.message) {
      firebaseConf.database().ref('messages').push(params).then(() => {
        this.showAlert('success', 'Ditt meddelande skickades!');
      }).catch(() => {
        this.showAlert('danger', 'Ditt meddelande kunde inte skickas!');
      });
      this.resetForm();
    } else {
      this.showAlert('warning', 'Fyll i alla fält!');
    };
  }
    render() {
        return (
          <div className ="contactcontainer">
          <h1 className ="contacttext">Kontakt</h1>
        {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
          <div className='container'>
            {this.state.alertData.message}
          </div>
        </div>}
            <div className ="contactcontainer2">
            <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' id ="contactForm">
          <FormGroup>
          <label className="emailtext" for="exampleEmail">Namn</label><br></br>
          <input type="Name" name="Name" id="exampleEmail" placeholder="Name" ref={name => this.inputName = name} required/><br></br>
        </FormGroup>
        <FormGroup>
          <label className="passwordtext" for="examplePassword">Email</label><br></br>
          <input type="Email" name="Email" id="examplePassword" placeholder="Email" ref={email => this.inputEmail = email} required/><br></br>
        </FormGroup>
        <FormGroup>
          <label  className="textarea" for="exampleText">Meddelande</label>
          <textarea type="textarea" name="text" className='form-control' id='exampleText' rows='7' ref={message => this.textAreaMessage = message}></textarea>
        </FormGroup>
        <Button type="submit" className ="contactbutton">Skicka</Button>
            </form>
        </div>
            </div>
        );
    }
}

export default Contact;