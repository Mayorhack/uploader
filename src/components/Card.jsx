const Card = ({ className, children }) => {
  return (
    <div
      className={`bg-[#ffffff] rounded-md shadow-sm w-full p-4 ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
