import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";
import { useStore } from "zustand";
import { useToDoStore } from "../../zustand/toDo/toDo";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 15px;
  background-color: tomato;
  color: white;
`;

const Input: React.FunctionComponent = () => {
  const [value, setValue] = useState("");
  const { toDo, addToDo } = useToDoStore();
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value);
    },
    []
  );

  console.log(toDo);

  const handleAdd = useCallback(() => {
    addToDo(value);
  }, [addToDo, value]);

  return (
    <Container>
      <input type="text" value={value} onChange={handleChange} />
      <Button onChange={handleAdd}>Add</Button>
    </Container>
  );
};

export default memo(Input);
