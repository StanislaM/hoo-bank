import { card } from '../../assets';
import Button from '../../components/Button';
import styles, { layout } from '../../style';

const CardDeal = () => {
    return (
        <section
            className={`${layout.section} ${styles.boxWidth} ${styles.paddingX} ${styles.flexBetween} mx-auto`}
        >
            <div className="max-w-[570px] flex flex-col items-center md:items-start ">
                <h2 className={`${styles.heading2}`}>
                    Find a better card deal in few easy steps.
                </h2>
                <p className={`${styles.paragraph} mt-6`}>
                    Arcu tortor, purus in mattis at sed integer faucibus.
                    Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices
                    ac, ametau.
                </p>
                <Button title="Get Started" style="mt-12" onClick={() => {}} />
            </div>

            <img
                className="max-w-none w-[513px] sm:max-w-[513px] sm:max-h-[449px] object-cover mt-8 md:mt-0 "
                src={card}
                alt="card deal"
            />
        </section>
    );
};

export default CardDeal;
