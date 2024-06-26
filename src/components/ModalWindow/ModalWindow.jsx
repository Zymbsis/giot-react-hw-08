import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from '../../redux/contacts/selectors';
import { selectAuthError } from '../../redux/auth/selectors';
import { modalClose } from '../../redux/modal/slice';

import AuthenticationModal from '../AuthenticationModal/AuthenticationModal';
import LogoutModal from '../LogoutModal/LogoutModal';
import DeleteContact from '../DeleteContactModal/DeleteContact';
import EditContact from '../EditContactModal/EditContactModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import clsx from 'clsx';
import css from './ModalWindow.module.css';
import { selectIsOpen, selectModalType } from '../../redux/modal/selectors';

const ModalWindow = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(selectIsOpen);
  const modalType = useSelector(selectModalType);
  const authError = useSelector(selectAuthError);
  const contactsError = useSelector(selectError);

  const handleClick = () => {
    dispatch(modalClose());
  };

  ReactModal.setAppElement('#root');
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
          {modalType === 'LogoutModal' && <LogoutModal />}
          {modalType === 'DeleteModal' && <DeleteContact />}
          {modalType === 'EditModal' && <EditContact />}
          {(authError || contactsError) && <ErrorMessage />}
        </>
      }
    </ReactModal>
  );
};

export default ModalWindow;
