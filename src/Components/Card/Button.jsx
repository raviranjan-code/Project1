export const Button = (props) => {
    const { type, label, className, id, onClick } = props;
    return (
        <>
            <button
                type={type}
                className={className}
                id={id}
                onClick={onClick}>
                {label}{" "}
            </button>
        </>
    );
};
