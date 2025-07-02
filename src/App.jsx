import { useState } from "react";
import { Header } from "./components/header"
import { ThemeContext } from "./contexts/themeContext"

function App() {

  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext value={{isDark, setIsDark}}>
      <main className="flex flex-col items-center light-gradient dark:dark-gradient h-screen">
        <section className="w-[343px] my-6">
          <Header />
        </section>
      </main>
    </ThemeContext>
  )
}

export default App
