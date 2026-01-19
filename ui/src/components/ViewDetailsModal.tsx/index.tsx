import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite';

// Types
import type { Status } from '../../types/status.type';

// Context
import { Context } from '../../main';

// Components
import ModalComponent from '../Modal';
import Notification from '../Notification';
import StatusComponent from '../Status';
import Select from '../Select';

// Constants
import { NOTIFICATION_TYPES } from '../../common/constants/errors';
import { STATUS_OPTIONS } from '../../common/constants/statusOptions';

// Styles
import styles from './index.module.sass';

interface IProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  candidateId: number
}

const ViewDetailsModal = observer(({ active, setActive, candidateId }: IProps) => {
  const { store } = useContext(Context)

  useEffect(() => {
    store.getCandidate(candidateId);
  }, [candidateId]);
  
  useEffect(() => {
    if (store.error) {
      Notification(NOTIFICATION_TYPES.ERROR)({
        message: store.error,
      });
      store.setError(null);
    }
  }, [store.error]);

  const onChangeStatusHandler = async (value: string) => {
    store.updateCandidateStatus(candidateId, value as Status);
  }

  const { singleCandidate: candidate } = store;
  console.log('🚀 ~ index.tsx:50 ~ candidate:', candidate.id)

  return (
    <ModalComponent setActive={setActive} active={active}>
      <div className={styles.modal}>
        <h2 className={styles.modal__name}>
          {candidate?.name}
        </h2>
        <p>
          {candidate?.email}
        </p>
        <p>
          {candidate?.phone}
        </p>
        <ul className={styles.modal__skills}>
          {candidate?.skills?.map((skill) => {
            const { id, name } = skill
            return (
              <div key={id}>
                {name}
              </div>
            )
          })}
        </ul>
        <p>
          {candidate?.description}
        </p>
        <StatusComponent status={candidate?.status} />
        <Select
          className=''
          defaultValue={candidate?.status}
          onChange={onChangeStatusHandler}
          value={candidate?.status}
          options={STATUS_OPTIONS}
        />
      </div>

    </ModalComponent>
  )
})

export default ViewDetailsModal;
