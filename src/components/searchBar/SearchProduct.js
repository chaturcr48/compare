import React from "react";

const SearchProduct = ({ searchQuery, setSearchQuery }) => {
    return (
        <React.Fragment>
          <div className="input-group mb-2">
            <input
              style={{ backgroundColor: "rgba(77,88,99,0.088)" }}
              value={searchQuery}
              onInput={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="form-control"
              placeholder="search product ....."
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              name="s"
            />
          </div>
        </React.Fragment>
      );
}
export default SearchProduct;