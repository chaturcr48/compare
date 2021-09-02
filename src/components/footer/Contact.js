import React from "react";
const Contact = () => {
    return (
        <>
            <div className="row gy-4">

                <div className="col-lg-6">

                    <div className="row gy-3">
                        <div className="col-md-6">
                            <div className="info-box text-center" style={{backgroundColor: "rgb(225, 239, 240)"}}>
                                <i className="bi bi-geo-alt" style={{color:"blue",fontSize:"25px"}}></i>
                                <h3 style={{color: "#012970"}}>Address</h3>
                                <p>Burdwan<br />West Bengal,713104<br/>India</p>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="info-box text-center" style={{backgroundColor: "rgb(225, 239, 240)"}}>
                                <i className="bi bi-telephone" style={{color:"blue",fontSize:"25px"}}></i>
                                <h3 style={{color: "#012970"}}>Call Us</h3>
                                <p>+91 9110065062<br />+91 9801178859<br />+91 9801178859</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-box text-center" style={{backgroundColor: "rgb(225, 239, 240)"}}>
                                <i className="bi bi-envelope" style={{color:"blue",fontSize:"25px"}}></i>
                                <h3 style={{color: "#012970"}}>Email Us</h3>
                                <p>kumarhimanshu0620@gmail.com<br />afhamfardeen98@gmail.com<br />chaturcr94@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-box text-center" style={{backgroundColor: "rgb(225, 239, 240)"}}>
                                <i className="bi bi-clock" style={{color:"blue",fontSize:"25px"}}></i>
                                <h3 style={{color: "#012970"}}>Open Hours</h3>
                                <p>Monday - Friday<br />9:00AM - 05:00PM<br/><br/></p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-6" style={{backgroundColor: "rgb(225, 239, 240)",height:"333px"}}>
                    <form>
                        <div className="row gy-3 pt-1">

                            <div className="col-md-6">
                                <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                            </div>

                            <div className="col-md-6 ">
                                <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                            </div>

                            <div className="col-md-12">
                                <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                            </div>

                            <div className="col-md-12">
                                <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                                
                            </div>
                            <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-sm">Send Message</button>
                             </div>   
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact;