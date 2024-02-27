import useUnit from "../Hook/useUnit";
import ModalProducto from "../components/ModalProducto/ModalProducto";
import ZonaUnit from "../pages/ZonaUnit/ZonaUnit";
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
};

Modal.setAppElement('#root')

export default function Layout() {

  const { modal} = useUnit();
  
  return (
    <>
        <ZonaUnit />
        <Modal isOpen={modal} style={customStyles}>
            <ModalProducto/>
        </Modal>
    </>
  )
}