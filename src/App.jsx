import { useState } from "react";
import { Header, Filter, CardContainer } from "./components"
import { FilterContext } from "./contexts/filterContext"

function App() {

  // Estado del FilterContext
  const [filter, setFilter] = useState('All');

  return (
    <FilterContext value={{filter, setFilter}}>
      <main className="flex flex-col items-center light-gradient dark:dark-gradient h-dvh text-Neutral-900 dark:text-Neutral-0">
        <section className="w-[343px] md:w-[672px] xl:w-[1170px] my-6 ">
          <Header />
          <Filter />
          <CardContainer />
        </section>
      </main>
    </FilterContext>
  )
}

export default App
