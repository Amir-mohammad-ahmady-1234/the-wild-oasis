import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
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
