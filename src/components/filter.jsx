import { Button } from "./button"
import { useContext } from "react";
import { FilterContext } from "../contexts/filterContext";

export const Filter = () => {

  const {filter, setFilter} = useContext(FilterContext);

  const handleClick = (event) => {
    setFilter(event.target.textContent);
  }

  return (
    <div className="mb-10 md:flex md:items-center md:justify-between">
      <p className="text-center text-[34px] font-bold mb-6 md:mb-0">Extensions List</p>
      <div className="flex place-content-between px-6 md:gap-3 md:px-0">
        <Button active={filter === 'All'} handleClick={handleClick}>All</Button>
        <Button active={filter === 'Active'} handleClick={handleClick}>Active</Button>
        <Button active={filter === 'Inactive'} handleClick={handleClick}>Inactive</Button>
      </div>
    </div>
  )
}
