import React from "react";
import styled from "styled-components";
import { useToDoStore } from "../../zustand/toDo/toDo";

const List = styled.div`
  width: 100%;
  height: 400px;

  & ul {
    width: 100%;
    height: 200px;
  }
`;

const ToDoList: React.FunctionComponent = () => {
  const { toDo } = useToDoStore();
  //   const { } = useToDoStore((state) => Object.keys(state));

  return (
    <List>
      <h3>origin toDo</h3>
      <ul>
        {toDo.map((li, idx) => (
          <li key={idx}>{li}</li>
        ))}
      </ul>
    </List>
  );
};

export default React.memo(ToDoList);
