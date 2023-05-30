import { useEffect } from 'react'
import Modal from './Modal'
import { AnimatePresence, motion } from 'framer-motion'

const Overlay = ({ onClick, children, openState }) => {
  useEffect(() => {
    const body = document.querySelector('body')
    openState ? body.classList.add('disable-scroll') : null
    return () => body.classList.remove('disable-scroll')
  }, [openState])
  return (
    <AnimatePresence mode="wait">
      {openState ? (
        <motion.div
          key={'modal'}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, type: 'spring', ease: 'easeOut' }}
          className={`min-w-screen min-h-screen w-screen h-screen absolute overflow-hidden inset-0 grid place-items-center z-10 p-1 ${
            children ? 'z-40' : ''
          }`}
        >
          <div
            className={`min-w-screen min-h-screen w-full h-full bg-[#1a1a1a] opacity-50  absolute overflow-hidden inset-0`}
            onClick={onClick}
          ></div>
          {children ? <Modal onClick={onClick}>{children}</Modal> : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default Overlay
