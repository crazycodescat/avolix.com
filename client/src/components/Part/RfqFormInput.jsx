import PropTypes from "prop-types";

const RfqFormInput = ({
  name,
  placeholder,
  type,
  id,
  pattern,
  required,
  maxLength,
  max,
  handelChange,
}) => {
  return (
    <input
      className="border-solid border border-neutral-400 p-3 placeholder:text-xs text-xs font-medium w-full focus:outline-red-400 focus:border-none active:outline-red-300 focus:rounded-none"
      type={type}
      name={name}
      id={id}
      pattern={pattern}
      placeholder={placeholder}
      required={required}
      maxLength={maxLength}
      max={max}
      onChange={handelChange}
    />
  );
};

RfqFormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  required: PropTypes.string,
  maxLength: PropTypes.number,
  max: PropTypes.number,
};

export default RfqFormInput;
