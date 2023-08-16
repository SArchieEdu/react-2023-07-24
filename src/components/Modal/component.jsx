export const Modal = ({ children }) => {
  const modalStyles = {
    background: "rgba(196, 196, 196, .5)",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }

  const modalWindowStyles = {
    background: "white",
    position: "absolute",
    left: "50%",
    top: "50%",
    maxWidth: "250px",
    padding: "20px",
    transform: "translate(-50%, -50%)",
  }

  return (
    <div style={modalStyles}>
      <div style={modalWindowStyles}>
        {children}
      </div>
    </div>
  )
}
