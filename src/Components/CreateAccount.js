import '../App.css';
import React from 'react';
import Card from './Card';
import { UserContext } from './context';

function CreateAccount() {
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const submitDisabledValue = React.useRef('');

  function validate(field, label) {
    if (!field || (label === 'password' && field.length < 8)) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(name, 'name')) {
      alert('Enter name');
      return;
    }
    if (!validate(email, 'email')) {
      alert('Enter email');
      return;
    }
    if (!validate(password, 'password')) {
      alert('Enter password (at least 8 characters)');
      return;
    }
    submitDisabledValue.current = "";
    // Delete initial placeholder user account
    if (ctx.users[0].name === 'abel') {
      ctx.users.length = 0;
    }
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(false);
  }

  function canSubmit() {
    if (!validate(name, 'name')
      && !validate(email, 'email')
      && !validate(password, 'password')) {
      submitDisabledValue.current = "disabled";
    } else {
      submitDisabledValue.current = "";
    }
  }

  function handleChange(e, setField) {
    setField(e.currentTarget.value);
    canSubmit();
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (
        <>
          Name<br />
          <input type="input" required className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => handleChange(e, setName)} /><br />
          Email address<br />
          <input type="input" required className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => handleChange(e, setEmail)} /><br />
          Password<br />
          <input type="password" required className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => handleChange(e, setPassword)} /><br />
          <button type="submit" className="btn btn-light" disabled={submitDisabledValue.current} onClick={handleCreate}>Create Account</button>
        </>
      ) : (
        <>
          <h5>Success</h5>
          <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
        </>
      )}
    />
  )
}

export default CreateAccount;