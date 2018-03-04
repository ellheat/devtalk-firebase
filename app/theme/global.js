import { injectGlobal } from 'styled-components';

// eslint-disable-next-line
injectGlobal`
  html.unsupported {
    .unsupported-page {
      display: block !important;
    }
  
    #app {
      display: none;
    }
  }
  
  img {
    max-width: 100%;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
`;
