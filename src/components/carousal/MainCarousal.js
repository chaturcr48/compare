import React from "react";
import "./MainCarousal.css";

const mainCarousalImgLink = [
  {
    id: "2",
    imgUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/mibookpro_0.jpeg?ikxsywW.QZ5qY0zj7GdEv9Yo7M1oOtpo&size=770:433",
    ariaLabel: "Slide 2",
  },
  {
    id: "3",
    imgUrl:
      "https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31..1588859331.jpg",
    ariaLabel: "Slide 3",
  },
  {
    id: "4",
    imgUrl:
      "https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31..1588859331.jpg",
    ariaLabel: "Slide 4",
  },
  {
    id: "5",
    imgUrl:
      "https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31..1588859331.jpg",
    ariaLabel: "Slide 5",
  },
  {
    id: "6",
    imgUrl:
      "https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31..1588859331.jpg",
    ariaLabel: "Slide 6",
  },
];

const MainCarousal = () => {
  return (
    <React.Fragment>

      <div className="container Large mt-4">
        <div
          id="carouselExampleCaptions"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
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
                data-bs-slide-to="0"
                className="active"
                aria-label={item.ariaLabel}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31..1588859331.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>Compare products specifications</h3>
                <p>
                  Compare laptops laptops, phone and tablets price and features.
                </p>
              </div>
            </div>

            {mainCarousalImgLink.map((item) => (
              <div className="carousel-item" key={item.id}>
                <img
                  src={item.imgUrl}
                  className="d-block w-100"
                  alt="imageNotFound..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Compare product price.</h3>
                  <p>Technology,News,Development and Trends.</p>
                </div>
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
