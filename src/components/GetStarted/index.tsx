import { arrowUp } from '../../assets';
import styles from '../../style';

const GetStarted = () => {
    return (
        <a className="hidden ss:block rounded-full w-[140px] h-[140px] border-cyan-300 border-[3px] p-[3px] cursor-pointer hover:shadow-center transition-all duration-300">
            <div
                className={`w-full h-full rounded-full text-lg font-bold ${styles.flexCenter} flex-col `}
            >
                <div className={`${styles.flexCenter}`}>
                    <span className="text-gradient2 ">Get</span>
                    <img
                        src={arrowUp}
                        alt="arrow"
                        className="w-[23px] h-[23px] object-contain"
                    />
                </div>
                <span className="text-gradient">Started</span>
            </div>
        </a>
    );
};

export default GetStarted;
