import React from "react";
import '../../../css/Filter.css';
import FilterBrand from "./FilterBrand";
import FilterPrice from "./FilterPrice";
import FilterRam from "./FilterRam";
import StorageCapacity from "./StorageCapacity";
import Stars from "./Stars";
import Stores from "./Stores";
import Weight from "./Weight";
import OperatingSystem from "./OperatingSystem";
import '../../laptop/Laptops.css'

const Filter = (props) => {
  const filterByBrandHandler = (value) => {
    console.log(value)
    props.filterBrand(value);
  }
  return (
    <React.Fragment>
      <div className='filter overflow-auto p-2'>
        <h4>Filters</h4>
        <FilterPrice />
        <FilterBrand filterByBrand={filterByBrandHandler} />
        <FilterRam />
        <StorageCapacity />
        <Stores />
        <Weight />
        <OperatingSystem />
        <Stars />
      </div>
    </React.Fragment>
  );
};
export default Filter;
