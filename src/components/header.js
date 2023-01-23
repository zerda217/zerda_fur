import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/feature/userSlice";
import { BiHomeHeart, BiLogInCircle, BiLogOutCircle, BiIdCard } from "react-icons/bi";

const Header = () => {
  const { name } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <StyledLink to="/">
        <BiHomeHeart size='3vh' />
      </StyledLink>
      
      <Menu>
        { name !== ""
          ? <div onClick={() => dispatch(logout())}>
              <BiLogOutCircle size='3vh' /> {name}님
            </div>
          : <>
            <StyledLink to='/login'> 
              <BiLogInCircle size='3vh' /> 로그인
            </StyledLink>
            <StyledLink to='/signUp'> 
              <BiIdCard size='3vh' /> 가입 
            </StyledLink>
            </>
        }
      </Menu>

    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vh;
`;

const Menu = styled.div`
  display: flex;
  justify-content: end;
  font-size: 1.2rem;
  width: 50%;
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  margin: 1.2vh;
`;

export default Header;
