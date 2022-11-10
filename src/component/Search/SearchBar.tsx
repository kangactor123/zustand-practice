import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useToDoStore } from "../../zustand/toDo/toDo";
import { Button } from "../Input/Input";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
`;

const SearchBar: React.FunctionComponent = () => {
  const { searchToDo } = useToDoStore();
  const [value, setValue] = useState("");
  const [searchList, setSearchList] = useState<string[]>([]);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.currentTarget.value);
    },
    []
  );
  const handleSearch = useCallback(() => {
    const filtered = searchToDo(value);
    setSearchList(filtered);
  }, [searchToDo, value]);

  return (
    <Wrapper>
      <input type="text" value={value} onChange={handleChange} />
      <Button onClick={handleSearch}>Search</Button>
      <div>
        <h3>Search ToDo</h3>
        <ul>
          {searchList.map((li, idx) => (
            <li key={idx}>{li}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default React.memo(SearchBar);
