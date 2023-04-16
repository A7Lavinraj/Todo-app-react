interface listitemProps {
  content: string;
  onClick: any;
}

const ListItem: React.FC<listitemProps> = ({ content, onClick }) => {
  return (
    <div
      draggable={true}
      className="flex flex-row items-center justify-between bg-secondary gap-2 m-1 px-2 py-1 min-w-[23rem] rounded"
    >
      <p className="text-highlight">{content}</p>
      <button className="bg-main rounded px-1 text-highlight" onClick={onClick}>
        del
      </button>
    </div>
  );
};

export default ListItem;
