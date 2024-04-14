
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        padding: 20,
        background: '#746B4A',
        borderRadius: 5,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '80%',
        maxWidth: 500
      }}>
        <button onClick={onClose} style={{ float: 'right', border: 'none', background: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
