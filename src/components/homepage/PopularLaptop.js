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
  {
    id: "4",
    imgUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/mibookpro_0.jpeg?ikxsywW.QZ5qY0zj7GdEv9Yo7M1oOtpo&size=770:433",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  },
  {
    id: "5",
    imgUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/mibookpro_0.jpeg?ikxsywW.QZ5qY0zj7GdEv9Yo7M1oOtpo&size=770:433",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  }
];

const PopulatLaptop = () => {
  return (
    <React.Fragment>
      <div className="container mt-2">
        <h3>Popular Laptops</h3>
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
        </div>
      </div>
    </React.Fragment>
  );
};
export default PopulatLaptop;
