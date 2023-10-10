import { useCallback } from 'react';
import styles, { layout } from '../../style';
import { feedback, navLinks } from '../../constants';
import { quotes } from '../../assets';

const Feedback = () => {
    const renderFeedback = useCallback(() => {
        return feedback.map((item) => (
            <div
                key={item.id}
                className="feedback-card py-6 xs:py-14 px-4 xs:px-10 rounded-2xl"
            >
                <img
                    src={quotes}
                    alt="quotes"
                    className="w-[42px] h-[27px] mb-6 xs:mb-10 opacity-50"
                />
                <p
                    className={`${styles.paragraph} text-white mb-2 xs:mb-6 max-w-[290px] min-h-[128px]`}
                >
                    {item.content}
                </p>
                <div className="flex flex-wrap items-center">
                    <img
                        src={item.img}
                        alt="photo"
                        className="w-[48px] h-[48px] mr-4"
                    />
                    <div className="text-xl text-white">
                        {item.name}
                        <span className="text-base text-dimWhite">
                            <br />
                            {item.title}
                        </span>
                    </div>
                </div>
            </div>
        ));
    }, []);

    return (
        <section
            id={`${navLinks[3].id}`}
            className={`${layout.section} ${styles.boxWidth} ${styles.paddingX} flex-wrap mx-auto relative z-20`}
        >
            <div
                className={`${styles.flexBetween} w-full flex-col md:flex-row text-left`}
            >
                <h2 className={`${styles.heading2} max-w-[470px]`}>
                    What people are saying about us
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] md:mr-10`}>
                    Everything you need to accept card payments and grow your
                    business anywhere on the planet.
                </p>
            </div>

            <div
                className={`${styles.flexCenter} lg:justify-between w-full flex-wrap mt-6 xs:mt-16`}
            >
                {renderFeedback()}
            </div>

            <div className="absolute z-10 w-[700px] h-[600px] -rotate-45 blue__gradient -right-[500px]" />
        </section>
    );
};

export default Feedback;
