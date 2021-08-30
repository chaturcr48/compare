import React from "react";
import '../../css/PopularMobiles.css';

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
  },
  {
    id: "6",
    imgUrl:
      "https://www.godigit.com/content/dam/godigit/directportal/en/website-images/mobile-phone.jpg",
    name: "Xiaomi Redmi Note 100",
    desc: "5G (6GB RAM + 128GB)",
  },
];

const PopularMobiles = () => {
  return (
    <React.Fragment>
      <div className="container mt-2">
        <h4>Popular Mobiles</h4>
        <div className="row columns">
          {items.map((item) => (
            <div className='col p-1' key={item.id}>
              <div className="card">
                  <img src={item.imgUrl} className="card-img-top" alt="..."/>
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">This card has supporting us</p>
              </div>
              </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default PopularMobiles;