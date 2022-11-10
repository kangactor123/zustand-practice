import React from "react";
import styled from "styled-components";
import Counter from "../../component/Counter/Counter";
import Input from "../../component/Input/Input";
import ToDoList from "../../component/List/ToDoList";
import SearchBar from "../../component/Search/SearchBar";

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

const ListWrapper = styled.div`
  width: 800px;
  height: 100%;
  margin: 0 auto;
  background-color: aqua;
`;

const ToDo: React.FunctionComponent = () => {
  return (
    <Layout>
      <ListWrapper>
        <Input />
        <ToDoList />
        <SearchBar />
      </ListWrapper>
    </Layout>
  );
};

export default ToDo;
