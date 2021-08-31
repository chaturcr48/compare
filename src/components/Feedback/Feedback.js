import React from "react";
import "./Feedback.css";

const Feedback = () => {
  return (
    <React.Fragment>
      <div className="container mt-2">
        <div className="center">
          <div className="container mt-2 w-75n/ ">
            <h3>
              <i className="bi bi-chat-right"></i>
              &nbsp;we'd love your feedback
            </h3>
            <p>
              We let our users send our suggestions and idea about web page.We
              welcome problems,reports,features,ideas and general comments.We will
              be delighted to hear from you
            </p>
            <h4> your opinion on the webpage?</h4>

            <p>
              <button type="button" className="btn btn-light intcolor1">
                <i
                  className="bi bi-emoji-heart-eyes"
                  style={{ fontSize: "40px", color: "green" }}
                ></i>
                <br />
                Love it
              </button>
              <button type="button" className="btn btn-light intcolor2">
                <i
                  className="bi bi-emoji-smile"
                  style={{ fontSize: "40px", color: "rgb(38, 180, 216)" }}
                ></i>
                <br />
                Good
              </button>
              <button type="button" className="btn btn-light intcolor3">
                <i
                  className="bi bi-emoji-neutral"
                  style={{ fontSize: "40px", color: "rgb(173, 35, 162)" }}
                ></i>
                <br />
                Average
              </button>
              <button type="button" className="btn btn-light intcolor4">
                <i
                  className="bi bi-emoji-frown"
                  style={{ fontSize: "40px", color: "rgb(214, 211, 48)" }}
                ></i>
                <br />
                Poor
              </button>
              <button type="button" className="btn btn-light intcolor5">
                <i
                  className="bi bi-emoji-angry"
                  style={{ fontSize: "40px", color: "rgba(248, 24, 24, 0.836)" }}
                ></i>
                <br />
                Disgusting
              </button>
            </p>
            <h4>would you like to add comments?</h4>
            <textarea
              className="form-control mb-2"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="Your feedback is valued for us...."
            ></textarea>

            <input className="btn btn-dark float" type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Feedback;
