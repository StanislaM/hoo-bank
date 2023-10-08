import { useCallback } from 'react';
import { stats } from '../../constants';
import styles from '../../style';

const Stats = () => {
    const renderStats = useCallback(() => {
        return stats.map((item) => (
            <div
                key={item.id}
                className={`${styles.flexCenter} gap-x-6 text-[30px] xs:text-[40px] font-semibold text-white`}
            >
                {item.value}
                <span className="text-lg xs:text-xl text-gradient">
                    {item.title.toUpperCase()}
                </span>
            </div>
        ));
    }, []);

    return (
        <div className="flex justify-around lg:justify-between flex-col xs:flex-row items-start sm:items-center gap-x-8 flex-wrap relative z-30 mt-[600px] lg:mt-36">
            {renderStats()}
        </div>
    );
};

export default Stats;
