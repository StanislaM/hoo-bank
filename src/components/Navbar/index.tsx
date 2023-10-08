import { useCallback, useState } from 'react';
import { close, logo, menu } from '../../assets';
import { navLinks } from '../../constants';
import styles from '../../style';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const renderNavLinks = useCallback(() => {
        return navLinks.map((item) => (
            <li key={item.id}>
                <a
                    href={`#${item.id}`}
                    className="text-white sm:text-dimWhite hover:text-white"
                >
                    {item.title}
                </a>
            </li>
        ));
    }, []);

    return (
        <div
            className={`${styles.flexBetween} sm:block navbar ${styles.boxWidth} ${styles.paddingX} relative mx-auto z-[10000]`}
        >
            <div className={`${styles.flexBetween}`}>
                {/* LOGO */}
                <div className="py-8">
                    <a href="./">
                        <img src={logo} alt="logo" className="h-8" />
                    </a>
                </div>

                {/* LINKS */}
                <ul
                    className="bg-black-gradient sm:bg-none p-4 sm:p-0 flex flex-col sm:flex-row gap-y-8 gap-x-14 rounded-xl text-2xl sm:text-base invisible sm:visible right-4 sm:right-auto absolute top-20 sm:top-0 sm:relative transition duration-200"
                    style={toggle ? { visibility: 'visible' } : {}}
                >
                    {renderNavLinks()}
                </ul>
            </div>

            <img
                src={!toggle ? menu : close}
                className="sm:hidden "
                onClick={() => setToggle((state) => !state)}
            />
        </div>
    );
};

export default Navbar;
