import { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../main';

// Constants
import { NOTIFICATION_TYPES } from '../../common/constants/errors';
import { STATUS_OPTIONS } from '../../common/constants/statusOptions.ts';

// Components
import Card from '../Card';
import Notification from '../Notification';
import ViewDetailsModal from '../ViewDetailsModal.tsx';
import Select from '../Select';
import Input from '../Input';
import NoDataToDisplay from '../NoDataToDisplay';
import Loader from '../Loader';
import { Pagination } from 'antd';

// Styles
import styles from './index.module.sass';

const Cards = observer(() => {
  const { store } = useContext(Context);
  const [isModalActive, setIsModalActive] = useState(false);
  const [id, setId] = useState<number>();
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<string>();
  const [page, setPage] = useState<number>();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      store.getCandidates({ search, status, page, limit: 8 });
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search, status, page]);

  useEffect(() => {
    if (store.error) {
      Notification(NOTIFICATION_TYPES.ERROR)({
        message: store.error,
      });
      store.setError(null);
    }
  }, [store.error]);

  return (
    <div className={styles.cards}>
      {
        id ? (
          <ViewDetailsModal candidateId={id} active={isModalActive} setActive={setIsModalActive} />
        ) : null
      }
      <div className={styles.cards__filter}>
        <Input
          value={search}
          onChange={setSearch}
          className={styles.cards__search}
          placeholder='Search'
        />
        <Select
          value={status}
          onChange={setStatus}
          options={STATUS_OPTIONS}
          className={styles.cards__select}
          placeholder="Select status"
        />
      </div>
      <>
        {
          store.isLoading ? (
            <Loader />
          ) : (
            <>
              {
                store.candidates?.items?.length ? (
                  <div>
                    <div className={styles.cards__list}>

                      {store.candidates?.items?.map(candidate => (
                        <Card
                          key={candidate.id}
                          id={candidate.id}
                          name={candidate.name}
                          position={candidate.position}
                          status={candidate.status}
                          setIsModalActive={setIsModalActive}
                          setCandidateId={setId}
                        />
                      ))}
                    </div>
                    <Pagination 
                      align="center" 
                      current={page} 
                      total={store.candidates.total} 
                      onChange={setPage}
                      showLessItems={false}
                    />
                  </div>
                ) : (
                  <NoDataToDisplay />
                )
              }
            </>
          )
        }
      </>
    </div>
  );
});

export default Cards;
