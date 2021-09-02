import React from "react";
import "./Feedback.css";

const Feedback = () => {
  return (
    <React.Fragment>
        <div className="mt-2">
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

          <div>
            <button type="button" className="btn btn-light">
              <i
                className="bi bi-emoji-heart-eyes icon-size"
                style={{ color: "green" }}
              ></i>
            </button>

            <button type="button" className="btn btn-light">
              <i
                className="bi bi-emoji-smile icon-size"
                style={{ color: "rgb(38, 180, 216)" }}
              ></i>
            </button>
            <button type="button" className="btn btn-light">
              <i
                className="bi bi-emoji-neutral icon-size"
                style={{ color: "rgb(173, 35, 162)" }}
              ></i>
            </button>
            <button type="button" className="btn btn-light">
              <i
                className="bi bi-emoji-frown icon-size"
                style={{ color: "rgb(214, 211, 48)" }}
              ></i>
            </button>
            <button type="button" className="btn btn-light">
              <i
                className="bi bi-emoji-angry icon-size"
                style={{ color: "rgba(248, 24, 24, 0.836)" }}
              ></i>
            </button>
          </div>
          <br />
          <h4>Please leave your feedback below.</h4>
          <textarea
            className="form-control mb-2"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Your feedback is valued for us...."
          ></textarea>

          <input
            className="btn btn-secondary float"
            type="submit"
            value="Submit"
          />
        </div>
    </React.Fragment>
  );
};
export default Feedback;
