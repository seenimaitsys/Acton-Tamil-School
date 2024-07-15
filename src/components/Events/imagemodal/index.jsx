import { Button, Image, Modal } from "react-bootstrap";
const ImageModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={`text-center`}
        >
          Acton Tamil School Events
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          src={props.image}
          width={`100%`}
          loading={`lazy`}
          className={`background-styles`}
          fluid
        ></Image>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
