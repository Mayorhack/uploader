const FormInput = ({
  label,
  type,
  value,
  name,
  onChange,
  error,
  errorMessage,
  id,
}) => {
  return (
    <div>
      <div className="relative  group min-w-xs ">
        <label
          htmlFor=""
          className={`absolute left-3  top-1/2
        -translate-y-1/2 
        group-focus-within:bg-white
        group-focus-within:translate-y-[-200%]
        group-focus-within:px-1 
        group-focus-within:text-highlight transition-transform pointer-events-none
         leading-none
        group-focus-within:scale-90   duration-300 text-[#BDC0CC] ${
          value
            ? 'translate-y-[-200%] text-highlight  scale-90 px-1 bg-white'
            : ''
        } ${error ? ' text-red-400' : ''}`}
        >
          {label}
        </label>

        <input
          type={type}
          value={value}
          name={name}
          className={`border-[1px] border-slate-300 rounded-md w-full p-2 outline-highlight hover:border-slate-800  bg-transparent focus:border-highlight focus:outline-none ${
            error ? 'border border-red-400' : ''
          }`}
          onChange={onChange}
          autoComplete="new-password"
          id={id}
        />
      </div>
      {error ? (
        <p className="text-xs text-red-400 mt-1">{errorMessage}</p>
      ) : null}
    </div>
  )
}

export default FormInput
