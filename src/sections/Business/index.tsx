import Button from '../../components/Button';
import Features from '../../components/Features';
import { navLinks } from '../../constants';
import styles, { layout } from '../../style';

const Business = () => {
    return (
        <section
            id={`${navLinks[1].id}`}
            className={`${layout.section} ${styles.marginY} ${styles.boxWidth} ${styles.paddingX} mx-auto ${styles.flexBetween}`}
        >
            {/* PROMO */}
            <div className="max-w-[620px] flex flex-col items-center  md:items-start">
                <h2 className={`${styles.heading2}`}>
                    You do the business, we’ll handle the money.
                </h2>
                <p className={`${styles.paragraph} mt-6`}>
                    With the right credit card, you can improve your financial
                    life by building credit, earning rewards and saving money.
                    But with hundreds of credit cards on the market.
                </p>

                <Button title="Get Started" style="mt-12" onClick={() => {}} />
            </div>

            {/* FEATURES */}
            <Features />
        </section>
    );
};

export default Business;
