import React from 'react';

const ImageModal = ({ imageUrl, onClose }) => {
  const modalStyles = {
    modal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.8)", 
      zIndex: 1000, 
    },
    modalImage: {
      maxWidth: "90%",
      maxHeight: "90%",
      borderRadius: "10px",
    },
    closeModal: {
      position: "absolute",
      top: "10px",
      right: "20px",
      fontSize: "30px",
      color: "#fff",
      cursor: "pointer",
    },
  };

  return (
    <div style={modalStyles.modal} onClick={onClose}>
      <span style={modalStyles.closeModal}>&times;</span>
      <img
        src={imageUrl}
        alt="Selected"
        style={modalStyles.modalImage}
      />
    </div>
  );
};

export default ImageModal;
