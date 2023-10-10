import { apple, bill, google } from '../../assets';
import { navLinks } from '../../constants';
import styles, { layout } from '../../style';

const Billing = () => {
    return (
        <section
            id={`${navLinks[2].id}`}
            className={`${layout.sectionReverse} ${styles.boxWidth} ${styles.paddingX} ${styles.flexBetween} mx-auto relative z-20 `}
        >
            <img
                src={bill}
                alt="billing"
                className="max-w-none w-[530px] sm:max-w-[530px] sm:max-h-[455px] object-cover mt-8 md:mt-0 "
            />

            <div className="max-w-[470px]">
                <h2 className={`${styles.heading2}`}>
                    Easily control your billing & invoicing.
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                    ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                    integer platea placerat.
                </p>

                <div className="flex mt-12 gap-x-8">
                    <a className="cursor-pointer">
                        <img src={apple} alt="app store" />
                    </a>
                    <a className="cursor-pointer">
                        <img src={google} alt="google play" />
                    </a>
                </div>
            </div>

            <div className="absolute z-10 w-[305px] h-[370px] white__gradient -top-[20%] -left-[300px] " />
            <div className="absolute z-10 w-[155px] h-[250px] pink__gradient top-[50%] -left-[350px] " />
        </section>
    );
};

export default Billing;
