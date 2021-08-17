import React, {useState} from "react";

const LoginModal = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHamdler = event => {
    setEmail(event.target.value);
  }
  const passwordHandler = event => {
    setPassword(event.target.value);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const loginUser = {
      email: email,
      password: password,
    };
    const response = await fetch(
      "https://synkrino-e13d6-default-rtdb.firebaseio.com/loginUser.json",
      {
        method: "POST",
        body: JSON.stringify(loginUser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await response.json();
    setEmail('');
    setPassword('');
  }

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">
              Sign-in
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
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={emailHamdler}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={passwordHandler}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary mr-2" data-bs-dismiss="modal">
                Login
              </button>
              <button
                type="button"
                className="btn btn-secondary"
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
export default LoginModal;
