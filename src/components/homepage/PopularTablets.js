import React from "react";

let url = "";
const items = [
  {
    id: "1",
    imgUrl: "https://cdn.mos.cms.futurecdn.net/nrgKnzWePRJkQNXzo66bXM.jpg",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  },
  {
    id: "2",
    imgUrl: "https://cdn.mos.cms.futurecdn.net/nrgKnzWePRJkQNXzo66bXM.jpg",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  },
  {
    id: "3",
    imgUrl: "https://cdn.mos.cms.futurecdn.net/nrgKnzWePRJkQNXzo66bXM.jpg",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  },
  {
    id: "4",
    imgUrl: "https://cdn.mos.cms.futurecdn.net/nrgKnzWePRJkQNXzo66bXM.jpg",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  },
  {
    id: "5",
    imgUrl: "https://cdn.mos.cms.futurecdn.net/nrgKnzWePRJkQNXzo66bXM.jpg",
    name: "Xiaomi Redmi Note 10",
    desc: "5G (6GB RAM +128GB)",
  }
];

const PopulatTablets = () => {
  return (
    <React.Fragment>
      <div className="container mt-2">
        <h3>Popular Tablets</h3>
        <div className="row row-cols-5 g-4">
          {items.map((item) => (
            <div className="col">
              <div className="card" key={item.id}>
                <img src={item.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name} </h5>
                  <p className="card-text">{item.desc} </p>
                  <a href={url} className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default PopulatTablets;
