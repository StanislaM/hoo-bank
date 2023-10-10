import { useCallback } from 'react';
import { logo } from '../../assets';
import styles, { layout } from '../../style';
import { footerLinks, socialMedia } from '../../constants';

const Footer = () => {
    const renderLinks = useCallback(() => {
        return footerLinks.map((item) => (
            <div key={item.title}>
                <h4 className="text-white text-lg mb-5">{item.title}</h4>

                <ul className="flex flex-col gap-y-3">
                    {item.links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.link}
                                className="text-dimWhite hover:text-white text-base"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        ));
    }, []);

    const renderSocials = useCallback(() => {
        return socialMedia.map((item) => (
            <a key={item.id} href={item.link}>
                <img src={item.icon} alt="social" />
            </a>
        ));
    }, []);

    return (
        <section
            className={` ${layout.section} ${styles.boxWidth} ${styles.paddingX} ${styles.flexBetween} sm:pb-7 pb-7 flex-wrap mx-auto`}
        >
            <div
                className={`flex items-start justify-between flex-wrap w-full gap-y-6`}
            >
                <div className="mr-20 lg:mr-36">
                    <img src={logo} alt="logo" />
                    <p
                        className={`${styles.paragraph} max-w-[310px] ml-6 mt-7`}
                    >
                        A new way to make the payments easy, reliable and
                        secure.
                    </p>
                </div>
                <div className="flex items-start justify-start xs:justify-between flex-wrap ml-6 md:ml-0 gap-x-16 lg:gap-x-32 gap-y-6">
                    {renderLinks()}
                </div>
            </div>

            <hr className="w-full h-[1px] border-[#3F3E45] mt-10 mb-7" />

            <div
                className={`${styles.flexBetween} flex-col-reverse xs:flex-row flex-wrap gap-y-6 w-full`}
            >
                <div className={`${styles.paragraph} opacity-60`}>
                    Copyright © 2021 HooBank. All Rights Reserved.
                </div>

                <div className={`${styles.flexCenter} gap-x-7 `}>
                    {renderSocials()}
                </div>
            </div>
        </section>
    );
};

export default Footer;
