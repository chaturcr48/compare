import React from "react";
import "./Feedback.css";

const Feedback = () => {
  return (
    <React.Fragment>
      <div className="container mt-2">
        <div className="center">
          <h3>
          <i class="bi bi-chat-right-text"></i>
            &nbsp;We'd love your feedback
          </h3>
          <p>
            We let our users send our suggestions and idea about web page.We
            welcome problems,reports,features,ideas and general comments.We will
            be delighted to hear from you.
          </p>
          <h4>What's your opinion of this webpage?</h4>

          <div style={{width:"115%"}}>
            <button type="button" className="btn btn-light intcolor1">
              <i
                className="bi bi-emoji-heart-eyes"
                style={{ fontSize: "30px", color: "green" }}
              ></i>
            </button>
          
            <button type="button" className="btn btn-light intcolor2">
              <i
                className="bi bi-emoji-smile"
                style={{ fontSize: "30px", color: "rgb(38, 180, 216)" }}
              ></i>
            </button>
            <button type="button" className="btn btn-light intcolor3">
              <i
                className="bi bi-emoji-neutral"
                style={{ fontSize: "30px", color: "rgb(173, 35, 162)" }}
              ></i>
              
            </button>
            <button type="button" className="btn btn-light intcolor4">
              <i
                className="bi bi-emoji-frown"
                style={{ fontSize: "30px", color: "rgb(214, 211, 48)" }}
              ></i>
              
            </button>
            <button type="button" className="btn btn-light intcolor5">
              <i
                className="bi bi-emoji-angry"
                style={{ fontSize: "30px", color: "rgba(248, 24, 24, 0.836)" }}
              ></i>
              
            </button>
          </div><br/>
          <h4>Please leave your feedback below.</h4>
          <textarea
            className="form-control mb-2"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Your feedback is valued for us...."
          ></textarea>

          <input className="btn btn-primary float" type="submit" value="Submit" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Feedback;
