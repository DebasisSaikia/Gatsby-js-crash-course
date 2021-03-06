import styled from "styled-components"

export const MobileIcon = styled.div`
  display: block;
  width: 30px;
  z-index: 1000;
  cursor: pointer;
  :after,
  :before,
  div {
    background-color: ${({ theme }) => theme.colors.darkText};
    border-radius: 2px;
    content: "";
    display: block;
    height: 4px;
    margin: 5px 0;
    transition: all 0.2s ease-in-out;
  }
  :before {
    transform: ${({ menuOpen }) =>
        menuOpen ? "translateY(9px) rotate(45deg)" : ""};
  }
  :after {
    transform: ${({ menuOpen }) =>
        menuOpen ? "translateY(-9px) rotate(-45deg)" : ""};
  }
  div {
    transform: ${({ menuOpen }) => (menuOpen ? "scale(0)" : "")};
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`