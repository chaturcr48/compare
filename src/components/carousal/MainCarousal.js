import React from "react";
import "./MainCarousal.css";

const mainCarousalImgLink = [
  {
    id: "2",
    imgUrl:
      "https://cdn.mos.cms.futurecdn.net/X5TyA8uvkGXoNyjFzxcowS.jpg",
    ariaLabel: "Slide 2",
  },
  {
    id: "3",
    imgUrl:
      "https://cdn.mos.cms.futurecdn.net/X5TyA8uvkGXoNyjFzxcowS.jpg",
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
      <div className="">
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
                key={item.id}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active corousalImage">
              <img
                src="https://cdn.mos.cms.futurecdn.net/X5TyA8uvkGXoNyjFzxcowS.jpg"
                className="d-block w-100"
                alt="..."
                // style={{height: '350px'}}
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>Compare products specifications</h3>
                <p>
                  Compare laptops laptops, phone and tablets price and features.
                </p>
              </div>
            </div>

            {mainCarousalImgLink.map((item) => (
              <div className="carousel-item corousalImage" key={item.id}>
                <img
                  src={item.imgUrl}
                  className="d-block w-100"
                  alt="imageNotFound..."
                  // style={{height: '350px'}}
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
