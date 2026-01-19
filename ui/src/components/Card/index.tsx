import { observer } from "mobx-react-lite";

// Types
import type { Status } from "../../types/status.type";

// Components
import StatusComponent from "../Status/index.tsx";
import Button from "../Button/index.tsx";

// Styles
import styles from './index.module.sass';

interface IProps {
  name: string;
  position: string;
  status: Status;
  id: number;
  setIsModalActive: (bool: boolean) => void
  setCandidateId: (id: number) => void
}

const Card = observer(({
  name,
  position,
  status,
  setIsModalActive,
  setCandidateId,
  id
}: IProps) => {
  const onViewMoreClick = () => {
    setIsModalActive(true);
    setCandidateId(id)
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__initials}>
          <span>
            {name.split(' ')[0]?.charAt(0)}
          </span>
          <span>
            {name.split(' ')[1]?.charAt(0)}
          </span>
        </div>
        <h2 className={styles.card__name}>
          {name}
        </h2>
        <p className={styles.card__position}>
          {position}
        </p>
        <StatusComponent status={status} />
        <Button onClick={() => onViewMoreClick()}>
          View details
        </Button>
      </div>
    </>
  )
})

export default Card;
