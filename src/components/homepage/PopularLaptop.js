import React from "react";

let url = "";
const items = [
  {
    id: "1",
    imgUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/mibookpro_0.jpeg?ikxsywW.QZ5qY0zj7GdEv9Yo7M1oOtpo&size=770:433",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  },
  {
    id: "2",
    imgUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/mibookpro_0.jpeg?ikxsywW.QZ5qY0zj7GdEv9Yo7M1oOtpo&size=770:433",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  },
  {
    id: "3",
    imgUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/mibookpro_0.jpeg?ikxsywW.QZ5qY0zj7GdEv9Yo7M1oOtpo&size=770:433",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  },
];

const PopulatLaptop = () => {
  return (
    <React.Fragment>
      <div className="container my-5 mx-2" style={{ marginRight: "2px" }}>
        <h3>Popular Laptops</h3>
        <div className="container">
          <div className="row">
              {items.map(item => (

                  <div className="card mx-1" style={{ width: "13rem" }} key={item.id}>
                    <img
                        src={item.imgUrl}
                        className="card-img-top"
                        alt="..."
                        />
                    <div className="card-body">
                        <h5 className="card-title">{item.name} </h5>
                        <p className="card-text">{item.desc} </p>
                        <a href={url} className="btn btn-primary">
                        Go somewhere
                        </a>
                    </div>
                    </div>
                ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PopulatLaptop;
