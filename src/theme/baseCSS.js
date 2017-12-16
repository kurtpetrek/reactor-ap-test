import colors from "./colors";

export default `
@import url("https://fonts.googleapis.com/css?family=Roboto");

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  background: ${colors.darkBlue};
}

body {
  background: ${colors.white};
}

h1 {
  text-align: center;
  font-size: 3.125rem;
  letter-spacing: 0.6px;
  color: ${colors.white};
}

h2 {
  text-align: center;
  font-size: 2rem;
  color: ${colors.red};
  letter-spacing: 0.4px;
}

h3 {
  font-size: 1.5rem;
  color: ${colors.nero};
  letter-spacing: 0.3px;
}

h4 {
  font-size: 1.25rem;
  letter-spacing: 0.2px;
  color: ${colors.nero};
}

h5 {
  font-size: 1.125rem;
  letter-spacing: 0.2px;
  color: ${colors.coal};
}

p {
  color: ${colors.darkBlue};
  letter-spacing: 0.2px;
}

figcaption {
  text-align: center;
  font-size: .875rem;
  color: ${colors.gray};
  letter-spacing: 0.2px;
}

`;
