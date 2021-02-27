import { useContext } from "react";
import { ModalContext } from "../components/Modal";

const useModal = () => {
  const { handleOpenModal, handleCloseModal } = useContext(ModalContext);

  return [handleOpenModal, handleCloseModal];
};

export default useModal;
