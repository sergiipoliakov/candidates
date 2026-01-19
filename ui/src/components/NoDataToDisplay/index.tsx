import SvgNoDataCross from '../iconsLibriary/SvgNoDataCross';

// Styles
import styles from './index.module.sass';

const NoDataToDisplay = (props: { errorMessage?: string  }) => {
    const { errorMessage = '' } = props;
    return (
        <div className={styles['no-data']}>
            <SvgNoDataCross />

            <p className={styles['no-data__text']}>
                {errorMessage !== '' ? errorMessage : 'No Data'}
            </p>
        </div>
    );
};

export default NoDataToDisplay;
