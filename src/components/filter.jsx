import { Button } from "./Button"
import { useContext } from "react";
import { FilterContext } from "../contexts/filterContext";

export const Filter = () => {

  const {setFilter} = useContext(FilterContext);

  const handleClick = (event) => {
    setFilter(event.target.textContent);
  }

  return (
    <div className="mb-10 md:flex md:items-center md:justify-between">
      <p className="text-center text-[34px] font-bold mb-6 md:mb-0">Extensions List</p>
      <div className="flex place-content-between px-6 md:gap-3 md:px-0">
        <Button handleClick={handleClick}>All</Button>
        <Button handleClick={handleClick}>Active</Button>
        <Button handleClick={handleClick}>Inactive</Button>
      </div>
    </div>
  )
}
