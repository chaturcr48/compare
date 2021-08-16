import React from "react";

//let url = "";
const items = [
  {
    id: "1",
    imgUrl:
      "https://www.godigit.com/content/dam/godigit/directportal/en/website-images/mobile-phone.jpg",
    name: "Xiaomi Redmi Note 100",
    desc: "5G (6GB RAM + 128GB)",
  },
  {
    id: "2",
    imgUrl:
      "https://www.godigit.com/content/dam/godigit/directportal/en/website-images/mobile-phone.jpg",
    name: "Xiaomi Redmi Note 100",
    desc: "5G (6GB RAM + 128GB)",
  },
  {
    id: "3",
    imgUrl:
      "https://www.godigit.com/content/dam/godigit/directportal/en/website-images/mobile-phone.jpg",
    name: "Xiaomi Redmi Note 100",
    desc: "5G (6GB RAM + 128GB)",
  },
  {
    id: "4",
    imgUrl:
      "https://www.godigit.com/content/dam/godigit/directportal/en/website-images/mobile-phone.jpg",
    name: "Xiaomi Redmi Note 100",
    desc: "5G (6GB RAM + 128GB)",
  },
  {
    id: "5",
    imgUrl:
      "https://www.godigit.com/content/dam/godigit/directportal/en/website-images/mobile-phone.jpg",
    name: "Xiaomi Redmi Note 100",
    desc: "5G (6GB RAM + 128GB)",
  }
];

const PopularMobiles = () => {
  return (
    <React.Fragment>
      <div className="container mt-2">
        <h3>Popular Mobiles</h3>
        <div className="row row-cols-5 g-4">
          {items.map((item) => (
            <div className='col' key={item.id}>
              <div className="card">
                <img src={item.imgUrl} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below </p>
                  </div>
              </div>
              </div>
          ))}
          {/* <div className="">
            <a className="float-end" href={url}>
              Show more
            </a>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};
export default PopularMobiles;
