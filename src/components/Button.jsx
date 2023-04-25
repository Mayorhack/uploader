import { motion } from "framer-motion";

const Button = ({
  className,
  onClick,
  children,
  type,
  variant = "contained",
}) => {
  return (
    <motion.button
      whileTap={{ y: 1.5 }}
      onClick={onClick}
      type={type}
      className={`rounded-md capitalize p-2  min-w-[100px] hover:bg-[#009ABC] ${
        variant === "outlined"
          ? "bg-transparent text-textColor hover:bg-slate-100 border-2"
          : "text-white bg-highlight"
      } ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
