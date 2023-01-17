const Button = ({ text, buttonType }) => (
    <button
      type={buttonType}
      className="hover:bg-blue-900 text-primary py-2 px-6"
    >
      {text}
    </button>
  );
  
  export default Button;