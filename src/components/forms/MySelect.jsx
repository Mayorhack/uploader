const MySelect = ({ options, placeholder, onChange, id, name }) => {
  return (
    <select
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      className="border border-slate-300 rounded-lg w-full p-2 outline-highlight hover:border-slate-800  bg-transparent focus:border-highlight focus:outline-none"
    >
      <option value="">Select Role</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default MySelect
