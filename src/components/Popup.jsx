function Popup({ children }) {
  return (
    <div
      style={{ background: "#000000a8" }}
      className="fixed h-screen  z-50 flex items-center justify-center inset-0"
    >
      {children}
    </div>
  );
}

export default Popup;
