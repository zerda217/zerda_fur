import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrap>
      <Link to="/">
        <div>MAIN</div>
      </Link>
      
      <Menu>
        <StyledLink to='/login'> 로그인 </StyledLink>
        <StyledLink to='/signUp'> 가입 </StyledLink>
      </Menu>

    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  font-size: 1.5rem;
  width: 25%;
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
`;

const Cart = styled.div`
  text-align: center;
  font-size: 1rem;
  background: red;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 20px;
`;

export default Header;
