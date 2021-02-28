import React, { useState, createContext } from "react";
import { Modal as AntModal } from "antd";
import styled from "styled-components";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";

const StyledModal = styled.div`
  min-height: 400px;
`;

export const ModalContext = createContext(null);

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [renderModalContent, setRenderModalContent] = useState(null);

  const handleOpenModal = (renderContent) => {
    setIsOpen(true);

    setRenderModalContent(() => renderContent);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const renderCustomModal = () => (
    <StyledModal>
      <div className="modalHeader flex justify-end">
        <button onClick={handleCloseModal} className="p-5 cursor-pointer">
          <AiOutlineClose className="text-primary text-2xl" />
        </button>
      </div>
      <div className="modalContent p-5">{renderModalContent()}</div>
    </StyledModal>
  );

  return (
    <ModalContext.Provider value={{ handleOpenModal, handleCloseModal }}>
      {children}
      <AntModal
        className="rounded-lg bg-secondary-light pointer-events-auto"
        title="Basic Modal"
        visible={isOpen}
        footer={null}
        centered
        modalRender={renderCustomModal}
        onCancel={handleCloseModal}
      ></AntModal>
    </ModalContext.Provider>
  );
};

export default Modal;
