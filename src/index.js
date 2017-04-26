import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Form extends React.Component {
  constructor() {
    super();
    this.state= {
      contactInfo: [{name: 'Tommy', phone: '(678) 483-2432', email:'tommy@gmail.com', type:'friend'},
      {name: 'Ali', phone: '(483) 234-2342', email:'ali@gmail.com', type:'family'}],
      name: "",
      phone: "",
      email: "",
      type: ""

    };
  }

  // addName(event) {
  //   this.setState({
  //     name: event.target.value
  //   });
  // }
  //
  // addPhone(event) {
  //   this.setState({
  //     phone: event.target.value
  //   });
  // }
  //
  // addEmail(event) {
  //   this.setState({
  //     email: event.target.value
  //   });
  // }
  //
  // addType(event) {
  //   this.setState({
  //     type: event.target.value
  //   });
  // }

  addContact(stateName, event) {
    this.setState({
      [stateName]: event.target.value
    });
  }



  render() {
    return (

    <div>
    <ol className="contact">
    {this.state.contactInfo.map((contactInfo, idx)=>
      <li key={idx}> {contactInfo.name}
      <br/>
       {contactInfo.phone}
       <br/> {contactInfo.email}
       <br/>
       {contactInfo.type}
      </li>

    )};

    </ol>

      <form>
        <label> Name: </label>
        <input type="text"
          value={this.state.yourName}
          onChange={event => this.addContact('name', event)}/>
        <br/>
        <label> Phone: </label>
        <input type="text" value={this.state.phone} onChange={event => this.addContact('phone',event)}/>

        <br/>
        <label> Email: </label>
        <input type="email" value={this.state.email}
        onChange={event => this.addContact('email', event)}/>
        <br/>
        <label> Type: </label>
        <select name="type"
        value={this.state.addType}
        onChange={event => this.addContact('type',event)}>
          <option value="Family">
          Family
          </option>

          <option value="Friend">
          Friend
          </option>

          <option value="Coworker">
          Coworker
          </option>

          </select>

        <br/>
        <br/>
        <button type="submit" onClick={() => this.}> Add Contact </button>

        <br/>
        <br/>
        <br/>
        <button type="submit" > Delete Contact </button>
        <button type="submit" > See Existing contacts </button>

      </form>

      </div>
    );
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
