interface topProps {
  content: string;
}

const Top: React.FC<topProps> = ({ content }) => {
  return (
    <h1 className="bg-secondary text-highlight min-w-[90%] p-2 mt-2 rounded-lg tracking-wider">
      {content}
    </h1>
  );
};

export default Top;
