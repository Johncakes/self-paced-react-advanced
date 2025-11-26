import Modal from "./Modal";
import styled from "styled-components";
import ModalButton from "../ModalButton";

export default function RestaurantDetailModal({
  closeModal,
  selectedRestaurant,
}) {
  return (
    <Modal title={selectedRestaurant?.name} onBackdropClick={closeModal}>
      <ModalRestaurantInfo>
        <p className="text-body">{selectedRestaurant?.description}</p>
      </ModalRestaurantInfo>
      <ModalButton onClick={closeModal} autoFocus>
        닫기
      </ModalButton>
    </Modal>
  );
}

const ModalRestaurantInfo = styled.div`
  margin-bottom: 24px;
`;
