import React from "react";

const FooterDetail = () => {
  return (
    <React.Fragment>
      <div className="container pt-2">
        <div className="row my-2">
          <div className="bg-dark p-4 text-white">
            <h3>This is the card of Contact Us</h3>
            <div>Phone no: 12345</div>
            <div>Email: abcde@gmail.com</div>
            <div>
                <div>Leace a comment for Us: </div>
                <input type='textarea' placeholder='Comment...'></input>
                <button>Submit</button>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="bg-dark p-4 text-white">
            <h3>This is the card of About Us</h3>
            <div>dmcndk. dknckd mdc dk cjbvj vjrrbfrj scjrbfrj crbfr crsb l</div>
          </div>
        </div>
        <div className="row my-2">
          <div className="bg-dark p-4 text-white">
            <h3>This is the card of Careers</h3>
            <div>Make Your Career on Synkrino</div>
            <div>Upload Your resume</div>
            <input type='file'></input>
          </div>
        </div>
        <div className="row my-2">
          <div className="bg-dark p-4 text-white">
            <h3>This is the card of Feedback</h3>
            <div>Please give your precious feedback</div>
            <div>Your feedback is valuable for us</div>
            <input type='textarea' placeholder='Give feedback...'></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FooterDetail;
