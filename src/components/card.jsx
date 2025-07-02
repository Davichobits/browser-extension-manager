import { Button } from "./Button"
import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';

export const Card = ({logo, name, description, isActive, setExtensions, extensions }) => {

  const handleToggle = () => {
    setExtensions(extensions.map(extension =>
      extension.name === name
        ? { ...extension, isActive: !extension.isActive }
        : extension));
  }

  const handleRemove = () => {
    setExtensions(extensions.filter(extension => extension.name !== name));
  }

  return (
    <div className="bg-Neutral-0 dark:bg-Neutral-700 border border-Neutral-200 rounded-[20px] p-[20px] md:w-[330px]">

      <div className="flex items-start gap-4 mb-4">
        <img src={logo} alt="" />
        <div>
          <h2 className="text-[20px] font-bold mb-2">{name}</h2>
          <p className="text-Neutral-600 dark:text-Neutral-300 text-[15px]">{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button handleClick={handleRemove} textSmall >Remove</Button>
        <Toggle onClick={handleToggle} checked={isActive} color="red" />
      </div>
    </div>
  )
}
