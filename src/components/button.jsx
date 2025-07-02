
export const Button = ({children, textSmall, handleClick, active=false}) => {

  console.log('active', active);

  return (
    <button onClick={handleClick} className={`border border-Neutral-300 px-5 py-2 rounded-full ${textSmall ? 'text-[16px]': 'text-[20px]'} ${active ? 'bg-Red-500' : 'bg-Neutral-0 dark:bg-Neutral-700' } hover:bg-Red-500 hover:text-Neutral-0 cursor-pointer dark:border-Neutral-600 dark:hover:text-Neutral-900`}>{children}</button>
  )
}
