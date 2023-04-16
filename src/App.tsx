import { useState } from "react";

import Container from "./utils/Container";
import Main from "./utils/Main";

import Top from "./components/Top";
import Input from "./components/Input";
import Button from "./components/Button";
import List from "./components/List";

const App = () => {
  const [todotext, settodotext] = useState<string>("");
  const [todos, settodos] = useState<Array<string>>([]);

  const handleChange = (event: any) => {
    settodotext(event.target.value);
  };

  const handleAdd = () => {
    if (todotext !== "") {
      if (todos.length === 5) {
        alert("Todo list is full");
      } else {
        settodos([...todos, todotext]);
        settodotext("");
      }
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key == "Enter") {
      handleAdd();
    }
  };

  const handleDel = (event: any) => {
    settodos(
      todos.filter((item) => {
        return item !== event.target.parentNode.firstChild.innerText;
      })
    );
  };

  return (
    <Container>
      <Top content="Todo App" />
      <Main>
        <Input
          value={todotext}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Button content="add" onClick={handleAdd} />
      </Main>
      <List todos={todos} onDel={handleDel} />
    </Container>
  );
};

export default App;
