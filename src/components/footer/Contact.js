import React from "react";
const Contact = () => {
    return (
        <>
            <div className="container my-3" >
                <div >
                    <div className="card m-3">
                        <div className="card-body">
                            <i className="bi bi-geo-alt"></i>
                            <h3 className="card-title">Address</h3>
                            <p className="card-text">Burdwan,Kolkata<br /> near Axis Bank,PIN-713104</p>
                        </div>
                    </div>


                    <div className="card m-3">
                        <div className="card-body">
                            <i className="bi bi-telephone"></i>
                            <h3 className="card-title">Call Us</h3>
                            <p className="card-text">+91 7004901819<br /> +91 9801178859</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card m-3">
                        <div className="card-body">
                            <i className="bi bi-envelope"></i>
                            <h3 className="card-title">Email Us</h3>
                            <p className="card-text">afhamfardeen98@gmail.com<br /> chaturcr94@gmail.com</p>
                        </div>
                    </div>

                    <div className="card m-3">
                        <div className="card-body">
                            <i className="bi bi-clock"></i>
                            <h3 className="card-title">Open Hours</h3>
                            <p className="card-text">Monday - Friday<br /> 9:00AM - 05:00PM</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container my-2" >
                <form className="p-4" >
                    <div className="mb-3" >
                        <input type="email" className="form-control" placeholder="Your Name" id="exampleInputEmail1"
                            aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3" >
                        <input type="password" className="form-control" placeholder="Your Email" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Subject" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </>
    )
}
export default Contact;