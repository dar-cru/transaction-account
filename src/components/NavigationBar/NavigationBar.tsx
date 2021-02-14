import { FC } from "react";
import { Link } from "react-router-dom";
import { StyledNav, StyledUl, Title } from "./StyledNavigationBar";

type NavigationBarProps = {
  isAuthenticated?: boolean;
};

const NavigationBar: FC<NavigationBarProps> = ({ isAuthenticated }) => {
  return (
    <StyledNav>
      <Title>Coding Test</Title>
      {isAuthenticated && (
        <StyledUl>
          <li>
            <Link to={"/"}> Accounts</Link>
          </li>
          <li>
            <Link to={"/create"}> Create New Account </Link>
          </li>
        </StyledUl>
      )}
    </StyledNav>
  );
};

export default NavigationBar;
