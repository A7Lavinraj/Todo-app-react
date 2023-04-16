import ListItem from "./ListItem";

interface listProps {
  todos: Array<string>;
  onDel: any;
}

const List: React.FC<listProps> = ({ todos, onDel }) => {
  const converter = () => {
    return todos.map((todo, index) => (
      <ListItem key={index} content={`${todo}`} onClick={onDel} />
    ));
  };

  return (
    <div className="flex flex-col items-center justify-start min-w-[25rem] min-h-[10rem] rounded gap-2 mb-2">
      {converter()}
    </div>
  );
};

export default List;
