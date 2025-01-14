export const Input = (props) => {
    const { type, name, id, placeholder, onChange, onBlur, className, value,checked } = props;
    return (
      <>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur} 
          value={value}
          className={className}
          checked={checked}
       
        />
      </>
    );
  };
  