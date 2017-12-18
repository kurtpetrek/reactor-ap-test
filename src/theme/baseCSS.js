import colors from "./colors";

export default `
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

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
  font-weight: 700;
  color: ${colors.white};
}

h2 {
  text-align: center;
  font-size: 2rem;
  letter-spacing: 0.4px;
  font-weight: 700;
  color: ${colors.red};
}

h3 {
  font-size: 1.5rem;
  letter-spacing: 0.3px;
  font-weight: 700;
  color: ${colors.nero};
}

h4 {
  font-size: 1.25rem;
  letter-spacing: 0.2px;
  font-weight: 500;
  color: ${colors.nero};
}

h5 {
  font-size: 1.125rem;
  letter-spacing: 0.2px;
  font-weight: 700;
  color: ${colors.coal};
}

p {
  font-size: 1rem;
  letter-spacing: 0.2px;
  color: ${colors.darkBlue};
}

figcaption {
  text-align: center;
  font-size: .875rem;
  color: ${colors.gray};
  letter-spacing: 0.2px;
}

`;
