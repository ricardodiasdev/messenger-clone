"use client";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onClose }) => {
  return <div>Confirm Modal</div>;
};

export default ConfirmModal;