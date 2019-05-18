import React, { Component } from 'react';
import './Contact.css';
import './main';
import { Button, FormGroup} from 'reactstrap';
import firebaseConf from './main';
import profilePic from "./contactpic.png";
import {Helmet} from "react-helmet";

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
          <React.Fragment>
          <Helmet>
          <title>Kontakt - CEDWebb</title>
          <meta name="description" content="Kontakt - CEDWebb" charSet="utf-8" />
          </Helmet>
          <div className ="contactcontainer">
          <h1 className ="contacttext animated fadeInDown">Kontakt</h1>
          <h3 className ="contacttext2 animated fadeInDown">Här nedan kan du hitta information om mig eller fylla i formuläret för att komma i kontakt med mig så snabbt som möjligt.</h3>
        {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
          <div className='container'>
            {this.state.alertData.message}
          </div>
        </div>}
            <div className ="contactcontainer2 animated fadeInLeft">
            <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' id ="contactForm">
          <FormGroup>
          <label className="emailtext" htmlFor="exampleEmail">Namn</label><br></br>
          <input type="Name" name="Name" id="exampleEmail" placeholder="Namn" ref={name => this.inputName = name} required/><br></br>
        </FormGroup>
        <FormGroup>
          <label className="passwordtext" htmlFor="examplePassword">Email</label><br></br>
          <input type="Email" name="Email" id="examplePassword" placeholder="Email" ref={email => this.inputEmail = email} required/><br></br>
        </FormGroup>
        <FormGroup>
          <label  className="textarea" htmlFor="exampleText">Meddelande</label>
          <textarea type="textarea" name="text" className='form-control' id='exampleText' rows='7' ref={message => this.textAreaMessage = message}></textarea>
        </FormGroup>
        <Button type="submit" className ="contactbutton">Skicka</Button>
            </form>
        </div>
        <div className="contactcontainer3 animated fadeInRight">
        <img className ="profilepic" src={profilePic} alt="Bild på anställd" />
        <h5>Namn: Carl Brunngård</h5>
        <h5>Email: carl.brunngard@student.kyh.se</h5>
        <h5>Tel: 076-852-4567</h5>
        <h5>Adress: Månskensvägen 32</h5>
        <h5>Stad: Stockholm</h5>
        <h5>Ort: Tullinge</h5>
        </div>
            </div>
          </React.Fragment>
        );
    }
}

export default Contact;