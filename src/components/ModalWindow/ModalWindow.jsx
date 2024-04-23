import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from '../../redux/contacts/slice';
import { selectAuthError } from '../../redux/auth/slice';
import {
  modalClose,
  selectModalType,
  selectIsOpen,
} from '../../redux/modal/slice';

import AuthenticationModal from '../AuthenticationModal/AuthenticationModal';
import LogOutModal from '../LogOutModal/LogOutModal';
import DeleteContact from '../DeleteContactModal/DeleteContact';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import clsx from 'clsx';
import css from './ModalWindow.module.css';
import EditContact from '../EditContactModal/EditContactModal';

const ModalWindow = () => {
  ReactModal.setAppElement('#root');
  const dispatch = useDispatch();
  const isModalOpen = useSelector(selectIsOpen);
  const modalType = useSelector(selectModalType);
  const authError = useSelector(selectAuthError);
  const contactsError = useSelector(selectError);
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
      shouldReturnFocusAfterClose={false}
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
          {modalType === 'AuthenticationModal' && <AuthenticationModal />}
          {modalType === 'LogoutModal' && <LogOutModal />}
          {modalType === 'DeleteModal' && <DeleteContact />}
          {modalType === 'EditModal' && <EditContact />}
          {(authError || contactsError) && <ErrorMessage />}
        </>
      }
    </ReactModal>
  );
};

export default ModalWindow;
