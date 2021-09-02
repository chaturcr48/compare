import React, { useEffect } from "react";
import img from "../../assets/Afham.jpg"
import img1 from "../../assets/himanshu.jpg"

const TeamDetail = () => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, []);
  return (
    <React.Fragment>
      <div className="row">

        <div className="col-lg-6">
          <div className="member d-flex align-items-start pt-2 pb-2" style={{backgroundColor:"#ECFADF"}}>
            <div className="pic ml-2"><img src={img} className="img-fluid" alt="" style={{ borderRadius: "50%" }} /></div>
            <div className="member-info ml-3">
              <h4>Afham Fardeen</h4>
              <span><strong>Developer</strong></span>
              <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
              <div className="social">
                <a href=""><i class="bi bi-twitter"></i></a>&nbsp;&nbsp;
                <a href=""><i class="bi bi-facebook"></i></a>&nbsp;&nbsp;
                <a href=""><i class="bi bi-instagram"></i></a>&nbsp;&nbsp;
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-4 mt-lg-0" >
          <div className="member d-flex align-items-start pt-2 pb-2" style={{backgroundColor:"#ECFADF"}}>
            <div className="pic ml-2"><img src="https://source.unsplash.com/180x180/?nature,water" className="img-fluid" alt="" style={{ borderRadius: "50%" }} /></div>
            <div className="member-info ml-3">
              <h4>K C Ranjan</h4>
              <span><strong>Engineer</strong></span>
              <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
              <div className="social">
                <a href=""><i class="bi bi-twitter"></i></a>&nbsp;&nbsp;
                <a href=""><i class="bi bi-facebook"></i></a>&nbsp;&nbsp;
                <a href=""><i class="bi bi-instagram"></i></a>&nbsp;&nbsp;
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mt-4" >
          <div className="member d-flex align-items-start pt-2 pb-2" style={{backgroundColor:"#ECFADF"}}>
            <div className="pic ml-2"><img src={img1} className="img-fluid" alt="" style={{ borderRadius: "50%" }} /></div>
            <div className="member-info ml-3">
              <h4>Himanshu Kumar</h4>
              <span><strong>Designer</strong></span>
              <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
              <div className="social">
                <a href=""><i class="bi bi-twitter"></i></a>&nbsp;&nbsp;
                <a href=""><i class="bi bi-facebook"></i></a>&nbsp;&nbsp;
                <a href=""><i class="bi bi-instagram"></i></a>&nbsp;&nbsp;
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>




      </div>
    </React.Fragment>
  );
};
export default TeamDetail;
