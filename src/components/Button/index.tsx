interface IProps {
    title: string;
    style: string;
    onClick: () => void;
}

const Button = ({ title, style, onClick }: IProps) => {
    return (
        <button
            className={`px-8 py-5 w-fit text-lg font-semibold rounded-xl hover:shadow-center transition-all duration-300 text-primary bg-blue-gradient ${style}`}
            onClick={() => onClick()}
        >
            {title}
        </button>
    );
};

export default Button;
