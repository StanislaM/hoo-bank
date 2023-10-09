import Button from '../../components/Button';
import styles, { layout } from '../../style';

const LetsTry = () => {
    return (
        <section
            className={`${layout.section} ${styles.boxWidth} ${styles.paddingX} flex-wrap mx-auto `}
        >
            <div
                className={`${styles.flexBetween} flex-wrap w-full px-6 py-4 xs:px-12 xs:py-6 sm:px-24 sm:py-[72px] rounded-2xl bg-black-gradient-2`}
            >
                <div>
                    <h2
                        className={`${styles.heading2} text-[24px] leading-10 max-w-[670px]`}
                    >
                        Let’s try our service now!
                    </h2>
                    <p className={`${styles.paragraph} max-w-[445px] mt-6`}>
                        Everything you need to accept card payments and grow
                        your business anywhere on the planet.
                    </p>
                </div>

                <Button title="Get Started" style="mt-12" onClick={() => {}} />
            </div>
        </section>
    );
};

export default LetsTry;
