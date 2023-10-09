import { useCallback } from 'react';
import styles from '../../style';
import { clients } from '../../constants';

const Clients = () => {
    const renderClients = useCallback(() => {
        return clients.map((item, i) => (
            <div key={item.id}>
                <img
                    className={`w-[190px] ${i === 2 ? '-mt-3' : ''}`}
                    src={item.logo}
                    alt="client"
                />
            </div>
        ));
    }, []);

    return (
        <div
            className={`mt-8 mb-8 ${styles.boxWidth} ${styles.paddingX} ${styles.flexCenter} gap-x-[100px] gap-y-12 flex-wrap mx-auto`}
        >
            {renderClients()}
        </div>
    );
};

export default Clients;
