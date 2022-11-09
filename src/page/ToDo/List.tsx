import React from "react";
import styled from "styled-components";
import Counter from "../../component/Counter/Counter";
import Input from "../../component/Input/Input";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
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
        {/* <Input /> */}
        <Counter />
      </ListWrapper>
    </Layout>
  );
};

export default ToDo;
