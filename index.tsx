import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { Wrapper } from "./Wrapper";
import { TableRow } from "./TableRow";
import { ButtonGroup } from "./ButtonGroup";

type Props = {
  className?: string;
  items: { id: string; name: string }[];
};

const Component: React.ComponentType<Props> = ({ className, items }: Props) => (
  <div className={className}>
    {items.map(({ id, name }) => (
      <Wrapper
        key={id}
        popup={
          <ButtonGroup>
            <button>{name}</button>
            <button>{name}</button>
          </ButtonGroup>
        }
      >
        {(ref, onMouseEnter, onMouseLeave) => (
          <TableRow
            ref={ref}
            name={name}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        )}
      </Wrapper>
    ))}
  </div>
);

const App = styled(Component)<Props>``;

const items = [
  { id: "1", name: "foo1" },
  { id: "2", name: "foo2" },
  { id: "3", name: "foo3" },
  { id: "4", name: "foo4" }
];
ReactDOM.render(<App items={items} />, document.getElementById("root"));
