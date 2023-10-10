import { discount, robot } from '../../assets';
import GetStarted from '../../components/GetStarted';
import Stats from '../../components/Stats';
import { navLinks } from '../../constants';
import styles, { layout } from '../../style';

const Header = () => {
    return (
        <section
            id={`${navLinks[0].id}`}
            className={`relative ${layout.section} ${styles.marginY} `}
        >
            <div className={`${styles.boxWidth} ${styles.paddingX} mx-auto`}>
                <div className="max-w-[670px] z-30 relative mx-auto lg:mx-0 ">
                    {/* DISCOUNT */}
                    <div
                        className={`px-1 sm:px-3 py-1 bg-discount-gradient ${styles.flexCenter} flex-wrap w-fit gap-x-1 rounded-xl text-dimWhite text-sm ss:text-lg relative z-10 `}
                    >
                        <img src={discount} alt="discount" />
                        <span className="text-white">20%</span>
                        DISCOUNT FOR
                        <span className="text-white"> 1 MONTH </span>
                        ACCOUNT
                    </div>
                    {/* HEADING */}
                    <h1 className=" text-[52px] xs:text-[72px] font-bold leading-snug text-white relative block tracking-[0.72px]">
                        <div className="flex justify-start gap-x-4 sm:justify-between flex-wrap">
                            <div className="max-w-[320px]">
                                The Next
                                <span className="text-gradient">
                                    {' '}
                                    Generation{' '}
                                </span>
                            </div>
                            <GetStarted />
                        </div>
                        Payment Method.
                        <div className="absolute -left-[200px] top-0 w-[195px] h-[324px] rounded-full white__gradient_small " />
                    </h1>
                    {/* DESCR */}
                    <p className={`${styles.paragraph} max-w-[480px] mt-10`}>
                        Our team of experts uses a methodology to identify the
                        credit cards most likely to fit your needs.
                        <br /> We examine annual percentage rates, annual fees.
                    </p>
                </div>
                <Stats />
            </div>
            {/* IMAGE */}
            <div className="absolute bottom-[120px] lg:top-0 -right-[100px] xs:right-0 w-[669px] h-[674px]">
                <img
                    src={robot}
                    alt="robot"
                    className="z-20 relative opacity-60 lg:opacity-100 "
                />

                <div className="blue__gradient w-[578px] h-[571px] top-0 absolute z-10" />
                <div className="white__gradient w-[405px] h-[471px] top-0 right-0 absolute z-10" />
                <div className="pink__gradient w-[150px] h-[200px] top-0 absolute z-10" />
            </div>
        </section>
    );
};

export default Header;
