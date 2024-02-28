import useUnit from "../Hook/useUnit";
import ModalEmpty from "../components/ModalEmpty/ModalEmpty";
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

  const { modal, compareProduct} = useUnit();
  let Compare = compareProduct.length !== 0;
  return (
    <>
        <ZonaUnit />
        <Modal isOpen={modal} style={customStyles}>
            { Compare  ? <ModalProducto/> : <ModalEmpty frase={'Por favor, seleccione los productos que desea comparar.'} />}
        </Modal>
    </>
  )
}