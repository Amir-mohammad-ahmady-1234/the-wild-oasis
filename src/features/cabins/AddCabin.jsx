import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add New Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

// const AddCabin = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsModalOpen((flag) => !flag)}>
//         {isModalOpen ? "Close form" : "Show form"}
//       </Button>
//       {isModalOpen && (
//         <Modal onClose={() => setIsModalOpen((is) => !is)}>
//           <CreateCabinForm onCloseModal={() => setIsModalOpen((is) => !is)} />
//         </Modal>
//       )}
//     </div>
//   );
// };

export default AddCabin;
