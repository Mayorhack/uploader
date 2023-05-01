const FormInput = ({ label, type, value, name, onChange }) => {
  return (
    <div className="relative  group min-w-xs ">
      <label
        htmlFor=""
        className={`absolute left-3 top-0 group-focus-within:translate-y-[-50%] 
        group-focus-within:text-highlight transition-transform 
        group-focus-within:z-20 
        group-focus-within:scale-90   duration-300 text-[#BDC0CC] -z-10 ${
          value ? 'translate-y-[-60%] text-highlight z-20 scale-90 ' : ''
        }`}
      >
        {label}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        className="border-[1px] border-slate-300 rounded-lg w-full p-2 outline-highlight hover:border-slate-800 bg-transparent focus:border-highlight focus:outline-none"
        onChange={onChange}
        placeholder={label}
      />
      <div
        className={` absolute left-3 top-0  h-[2px] z-10 group-focus-within:bg-white  ${
          value ? 'bg-white' : ''
        } `}
      >
        <p className="relative top-[-20px] opacity-0 px-1">{label}</p>
      </div>
    </div>
  )
}

export default FormInput
