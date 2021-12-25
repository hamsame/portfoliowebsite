const Modal = ({ textColor, modalContent }) => {
  return (
    <div>
      <p style={{ color: textColor }}>{modalContent}</p>
    </div>
  )
}

export default Modal
