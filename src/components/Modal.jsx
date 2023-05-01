import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

const Modal = ({ children, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -300 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 300 }}
      transition={{ duration: 0.5, type: 'spring', ease: 'easeOut' }}
      className=" max-w-[400px] bg-white rounded z-30 p-8 relative w-full"
    >
      <p
        className="absolute right-0 -top-8 bg-[#E7E6E6] p-1 cursor-pointer hover:bg-red-400 hover:text-white rounded-full "
        onClick={onClick}
      >
        <FiX size={'12px'} />
      </p>
      {children}
    </motion.div>
  )
}

export default Modal
