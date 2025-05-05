import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #0366d6;
    --secondary-color: #24292e;
    --background-color: #f9f9f9;
    --card-background: #ffffff;
    --text-color: #333333;
    --text-secondary: #666666;
    --border-color: #e1e4e8;
    --border-radius: 8px;
    --box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  section {
    padding: 80px 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
  }

  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 60px;
    position: relative;
  }

  .section-title:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: var(--primary-color);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 0;
    }

    .section-title {
      font-size: 2rem;
      margin-bottom: 40px;
    }
  }
`;

export default GlobalStyle;