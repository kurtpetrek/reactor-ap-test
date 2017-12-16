import React from "react";

import styled from "styled-components";

const Container = styled.footer`
  background: ${p => p.theme.darkBlue};
  height: 200px;
  color: ${p => p.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export default () => <Container>Footer</Container>;
