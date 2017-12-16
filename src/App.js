import React from "react";
import Routes from "./routes";
import { injectGlobal } from "styled-components";

import Base from "./theme/baseCSS";

injectGlobal`
  ${Base}
`;

export default () => <Routes />;
