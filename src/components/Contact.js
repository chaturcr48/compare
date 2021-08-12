import React from 'react'

const Contact = () => {
    return (
      <>  <div>
            <div className="container my-4">
                <h2>Contact us</h2>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-check">

                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                    Are you a member?
                    </label>
                </div>
                <div className="form-check">

                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                    <label className="form-check-label" for="flexCheckDefault1">
                    Are you a coder?
                    </label>
                </div>
                <div className="form-check">

                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
                    <label className="form-check-label" for="flexCheckDefault2">
                    Are you a professor?
                    </label>
                </div>
                <div className="form-check">

                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
                    <label className="form-check-label" for="flexCheckDefault3">
                    Are you a student?
                    </label>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Tell us about yourself</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea2" className="form-label">Elaborate your concern</label>
                    <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
            </div>

        </div>

        </div></>
    )
}
export default Contact;