import ReactModal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import css from './ModalWindow.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { modalClose, selectIsOpen } from '../../redux/modal/slice';

const ModalWindow = () => {
  ReactModal.setAppElement('#root');
  const isModalOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(modalClose());
  };
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleClick}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      // bodyOpenClassName={css.myModal}
      // overlayClassName={css.myOverlay}
      className={css.modal}
    >
      {
        <button
          className={css.closeButton}
          onClick={handleClick}
          aria-label="close button"
        >
          {/* <FaWindowClose
              className={css.modalIcon}
              size={30}
              onClick={handleClick}
            /> */}
        </button>
      }
    </ReactModal>
  );
};

export default ModalWindow;
