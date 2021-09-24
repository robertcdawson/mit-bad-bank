import '../App.css';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function NavBar() {
  const renderTooltip = (desc, props) => (
    <Tooltip id="button-tooltip" {...props}>
      {desc}
    </Tooltip>
  );
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#/">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={() => renderTooltip('Create a new account')}
              >
                <a className="nav-link" href="#/CreateAccount/">Create Account</a>
              </OverlayTrigger>
            </li>
            <li className="nav-item">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={() => renderTooltip('Make a deposit')}
              >
                <a className="nav-link" href="#/deposit/">Deposit</a>
              </OverlayTrigger>
            </li>
            <li className="nav-item">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={() => renderTooltip('Make a withdrawal')}
              >
                <a className="nav-link" href="#/withdraw/">Withdraw</a>
              </OverlayTrigger>
            </li>
            <li className="nav-item">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 250, hide: 400 }}
                overlay={() => renderTooltip('View all account data')}
              >
                <a className="nav-link" href="#/alldata/">AllData</a>
              </OverlayTrigger>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;