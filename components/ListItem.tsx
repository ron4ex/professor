import * as React from "react";
import Link from "next/link";
import styled from "../styles/style-component";
import { User } from "../interfaces";

type Props = {
  data: User;
};
const StyledA = styled.a`
  color: ${props => props.theme.colors.DANGER};
`;
const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <StyledA>
      {data.id}: {data.name}
    </StyledA>
  </Link>
);

export default ListItem;
