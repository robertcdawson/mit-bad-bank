import '../App.css';
import React from 'react';
import Card from './Card';
import { UserContext } from './context';

function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const currentUserBalance =
    ctx.users[ctx.users.length - 1]
    && ctx.users[ctx.users.length - 1].balance;
  const [balance, setBalance] = React.useState(currentUserBalance);
  const submitDisabledValue = React.useRef('');

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(amount, 'amount')) {
      alert('Enter amount');
      return;
    }
    submitDisabledValue.current = "";
    if (Number(amount) <= Number(balance)) {
      setBalance(Number(balance) - Number(amount));
      setShow(false);
    } else {
      setStatus('Insufficient funds');
    }
  }

  React.useEffect(() => {
    ctx.users[ctx.users.length - 1].balance = balance;
    if (!amount) {
      submitDisabledValue.current = "disabled";
    }
  }, [amount, balance, ctx.users]);

  function canSubmit() {
    if (!validate(amount, 'amount')) {
      submitDisabledValue.current = "disabled";
    } else {
      submitDisabledValue.current = "";
    }
  }

  function handleChange(e, setField) {
    if (isNaN(e.currentTarget.value)) {
      alert("Please enter a number");
      return;
    }
    setField(e.currentTarget.value);
    canSubmit();
  }

  function clearForm() {
    setAmount('');
    setShow(true);
  }

  return (
    <>
      <h1>Withdraw</h1>
      <Card
        bgcolor="primary"
        status={status}
        body={show ? (
          <>
            <p>Balance: {balance}</p>
            Withdraw Amount<br />
            <input type="input" required className="form-control" id="amount" placeholder="Enter withdrawal amount" value={amount} onChange={e => handleChange(e, setAmount)} /><br />
            <button type="submit" className="btn btn-light" disabled={submitDisabledValue.current} onClick={handleCreate}>Make Withdrawal</button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <p>New Balance: {balance}</p>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
          </>
        )}
      />
    </>
  )
}

export default Withdraw;