// Icon
import SvgClose from '../iconsLibriary/SvgClose';

// Styles
import styles from './index.module.sass';

interface ModalTypes {
    children: React.ReactNode;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
    wrapperClassName?: string;
}

const ModalComponent = (props: ModalTypes) => {
  const {
    children,
    active,
    setActive,
    wrapperClassName = '',
    className = ''
  } = props;

  return (
    <div
      role="presentation"
      tabIndex={-1}
      className={`${styles.modal} ${wrapperClassName} ${active ? styles['modal--active'] : ''}`}
      onClick={() => setActive(false)}
    >
      <span
        role="button"
        tabIndex={0}
        className={styles['modal__button-close']}
        onClick={() => setActive(false)}
      >
        <span className={`${styles['modal__button-close-icon']} cursor--pointer`}>
          <SvgClose />
        </span>
      </span>
      <div
        className={`${styles.modal__content} ${active ? styles['modal__content--active'] : ''} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
