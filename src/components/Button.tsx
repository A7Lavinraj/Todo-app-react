interface buttonProps {
  content: string;
  onClick: () => any;
}

const Button: React.FC<buttonProps> = ({ content, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-secondary text-highlight rounded px-2 py-1"
    >
      {content}
    </button>
  );
};

export default Button;
