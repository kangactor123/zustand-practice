import React, { memo, useCallback, useState } from "react";
import styled from "styled-components";
import { useInteger } from "../../zustand/Num/number";
import { Button } from "../Input/Input";

const Wrapper = styled.div`
  & span {
    font-size: 18px;
  }
`;

const Counter: React.FunctionComponent = () => {
  const [value, setValue] = useState(0);
  const { count, increase } = useInteger();
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(+event.currentTarget.value);
    },
    []
  );

  const handleAdd = useCallback(() => {
    increase(value);
  }, [increase, value]);

  return (
    <Wrapper>
      <input type="number" value={value} onChange={handleChange} />
      <Button onChange={handleAdd}>increase</Button>
      <span>My Count: {count}</span>
    </Wrapper>
  );
};

export default memo(Counter);
