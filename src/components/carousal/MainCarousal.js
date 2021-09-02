import React from "react";
import "./MainCarousal.css";
import img1 from "../../assets/nav-pic.jpg"
import img2 from "../../assets/nav-pic1.jpg"
import img3 from "../../assets/nav-pic2.jpg"
import img4 from "../../assets/nav-pic3.jpg"

const mainCarousalImgLink = [
  {
    id: "1",
    imgUrl: img1,
    ariaLabel: "Slide 1",
  },
  {
    id: "2",
    imgUrl: img2,
    ariaLabel: "Slide 2",
  },
  {
    id: "3",
    imgUrl: img3,
    ariaLabel: "Slide 3",
  },
  
];

const MainCarousal = () => {
  return (
    <React.Fragment>
      <div className="">
        <div
          id="carouselExampleCaptions"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          {/* <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-label="Slide 1"
            ></button>
            {mainCarousalImgLink.map((item) => (
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                className="active"
                aria-label={item.ariaLabel}
                key={item.id}
              ></button>
            ))}
          </div> */}
          <div className="carousel-inner">
            <div className="carousel-item active corousalImage">
              <img
                src = {img4}
                className="d-block w-100"
                alt="..."
                style={{height: '300px'}}
              />
              <div className="carousel-caption d-none d-md-block " style={{"color":'black'}}>
                <h4>ellComp - Compare electronic product features and price</h4>
                {/* <p>
                  Compare laptops laptops, phone and tablets price and features.
                </p> */}
              </div>
            </div>

            {mainCarousalImgLink.map((item) => (
              <div className="carousel-item corousalImage" key={item.id}>
                <img
                  src={item.imgUrl}
                  className="d-block w-100"
                  alt="imageNotFound..."
                  style={{height: '300px'}}
                />
                {/* <div className="carousel-caption d-none d-md-block" style={{"color":'black'}}>
                  <h3>Compare product price.</h3>
                  <p>Technology,News,Development and Trends.</p>
                </div> */}
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MainCarousal;
