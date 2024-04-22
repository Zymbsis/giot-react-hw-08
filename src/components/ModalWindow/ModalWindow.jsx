import ReactModal from 'react-modal';

import css from './ModalWindow.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  modalClose,
  selectActionType,
  selectIsOpen,
} from '../../redux/modal/slice';
import clsx from 'clsx';
import AuthenticationModal from '../AuthenticationModal/AuthenticationModal';
import LogOutModal from '../LogOutModal/LogOutModal';
import DeleteContact from '../DeleteContactModal/DeleteContact';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { selectError } from '../../redux/auth/slice';

const ModalWindow = () => {
  ReactModal.setAppElement('#root');
  const isModalOpen = useSelector(selectIsOpen);
  const actionType = useSelector(selectActionType);
  const authError = useSelector(selectError);
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
      overlayClassName={css.myOverlay}
      className={clsx(css.modal, {
        [css.onOpen]: isModalOpen,
        [css.onClose]: !isModalOpen,
      })}
    >
      {
        <>
          <button
            className={css.closeButton}
            onClick={handleClick}
            aria-label="close button"
          ></button>
          {actionType === 'AuthenticationModal' && <AuthenticationModal />}
          {actionType === 'LogOutModal' && <LogOutModal />}
          {actionType === 'DeleteModal' && <DeleteContact />}
          {authError && <ErrorMessage />}
        </>
      }
    </ReactModal>
  );
};

export default ModalWindow;
