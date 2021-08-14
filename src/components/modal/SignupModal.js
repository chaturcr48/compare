import React, { useRef } from 'react';

const SignupModal = (props) => {


  const usernameRef = useRef("");
  const mobileNumberRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  async function submitHandler(event) {
    event.preventDefault();
    const user = {
      username: usernameRef.current.value,
      mobileNumber: mobileNumberRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
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
                  ref={usernameRef}
                />
                <label htmlFor="exampleInputPhoneNumber" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPhoneNumber"
                  ref={mobileNumberRef}
                />
                <label htmlFor="exampleInputEmail2" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail2"
                  ref={emailRef}
                />
                <label htmlFor="exampleInputPassword3" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword3"
                  ref={passwordRef}
                />
              </div>
              <div className="mb-3 form-check"></div>
              <button type="submit" className="btn btn-primary">
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
