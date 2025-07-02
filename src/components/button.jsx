
export const Button = ({children, textSmall, handleClick}) => {
  return (
    <button onClick={handleClick} className={`border border-Neutral-300 bg-Neutral-0 px-5 py-2 rounded-full ${textSmall ? 'text-[16px]': 'text-[20px]'} hover:bg-Red-500 hover:text-Neutral-0 cursor-pointer dark:bg-Neutral-700 dark:border-Neutral-600 dark:hover:text-Neutral-900`}>{children}</button>
  )
}
