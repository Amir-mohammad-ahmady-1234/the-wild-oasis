import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

const AddCabin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsModalOpen((flag) => !flag)}>
        {isModalOpen ? "Close form" : "Show form"}
      </Button>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen((is) => !is)}>
          <CreateCabinForm onCloseModal={() => setIsModalOpen((is) => !is)} />
        </Modal>
      )}
    </div>
  );
};

export default AddCabin;
