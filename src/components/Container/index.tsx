import styles from '../../style';

interface IProps {
    children: React.ReactNode;
}

const Container = ({ children }: IProps) => {
    return (
        <div className={`${styles.boxWidth} ${styles.paddingX} mx-auto`}>
            {children}
        </div>
    );
};

export default Container;
