import styles from './index.module.sass';

const Status = ({ status = 'active'  }: { status: string }) => {
  return (
    <div className={`${styles.status} ${styles[`status--${status}`]}`}>
      {status}
    </div>
  )
}

export default Status;
