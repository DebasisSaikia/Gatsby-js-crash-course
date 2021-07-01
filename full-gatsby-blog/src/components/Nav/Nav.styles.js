import styled from "styled-components"

export const Menu = styled.ul`
  display: none;
  list-style-type: none;
  padding: 0;
  font-family: "Muli Regular", Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkText};
  }
  li {
    display: inline-block;
    margin-right: 20px;
    transition: opacity 0.5s ease;
    cursor: pointer;
    .active_link {
      font-weight: 800;
    }
    :last-child {
      margin-right: 0;
    }
    :hover {
      opacity: 0.7;
    }
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`