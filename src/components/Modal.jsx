import { createPortal } from "react-dom";
function Modal() {
  return createPortal(
    <div>
      <div>Modal Content</div>
    </div>,
    document.getElementById("modal-root"),
  );
}

export default Modal;
