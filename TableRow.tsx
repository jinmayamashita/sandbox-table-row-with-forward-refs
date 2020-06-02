import * as React from "react";
import styled from "styled-components";

export type Props = {
  className?: string;
  name: "string";
  onMouseEnter: (e: React.SyntheticEvent<EventTarget>) => void;
  onMouseLeave: (e: React.SyntheticEvent<EventTarget>) => void;
};

const Component = React.forwardRef<HTMLTableRowElement, Props>(
  ({ className, name, onMouseEnter, onMouseLeave }, ref) => (
    <tr
      ref={ref}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <td>{name}</td>
    </tr>
  )
);

export const TableRow = styled(Component)<Props>`
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;
