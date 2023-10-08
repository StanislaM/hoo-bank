import { useCallback } from 'react';
import { features } from '../../constants';
import styles from '../../style';

const Features = () => {
    const renderfeatures = useCallback(() => {
        return features.map((item) => (
            <div
                key={item.id}
                className="max-w-[470px] min-w-[auto] xs:min-w-[400px] flex gap-x-2 xs:gap-x-5 items-center py-4 pl-0 xs:pl-5 rounded-[20px] feature-card"
            >
                <div className=" w-[64px] h-[64px] rounded-full flex shrink-0 justify-center items-center">
                    <img src={item.icon} alt={item.title} />
                </div>

                <div>
                    <h3 className="text-white text-md xs:text-lg font-semibold">
                        {item.title}
                    </h3>
                    <p className={`${styles.paragraph} xs:text-base mt-1`}>
                        {item.content}
                    </p>
                </div>
            </div>
        ));
    }, []);

    return (
        <div className="mt-9 md:mt-0 flex flex-col ">{renderfeatures()}</div>
    );
};

export default Features;
