import React, { useState } from "react";

const SignupModal = (props) => {

  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const usernameHandler = event => {
    setUsername(event.target.value);
  }
  const mobileNumberHandler = event => {
    setMobileNumber(event.target.value);
  }
  const emailHandler = event => {
    setEmail(event.target.value);
  }
  const passwordHandler = event => {
    setPassword(event.target.value);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const user = {
      username: username,
      mobileNumber: mobileNumber,
      email: email,
      password: password,
    };
    const response = await fetch(
      "https://synkrino-e13d6-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await response.json();
    setUsername('');
    setMobileNumber('');
    setEmail('');
    setPassword('');
  }
  const submitButton = () => {
    window.alert("SignUp successfully, Login to continue");
  }

  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex="-1"
      aria-labelledby="signupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="esignupodalLabel">
              Sign-up
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={submitHandler}>
              <div className="">
                <label htmlFor="exampleInputUsername" className="form-label">
                  Choose a Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputUsername"
                  value={username}
                  onChange={usernameHandler}
                />
                <label htmlFor="exampleInputPhoneNumber" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPhoneNumber"
                  value={mobileNumber}
                  onChange={mobileNumberHandler}
                />
                <label htmlFor="exampleInputEmail2" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail2"
                  value={email}
                  onChange={emailHandler}
                />
                <label htmlFor="exampleInputPassword3" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword3"
                  value={password}
                  onChange={passwordHandler}
                />
              </div>
              <div className="mb-3 form-check"></div>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={submitButton}>
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary ml-3"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupModal;
