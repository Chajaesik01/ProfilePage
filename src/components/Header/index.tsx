import { colors } from '@/styles';
import styled from 'styled-components';
import { ROUTER_PATH } from '@/constants/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';

export const Header = () => {
  const { HOME, PROJECT, STUDY } = ROUTER_PATH;
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <S.HeaderBar>
      <S.CategoryContainer>
        <Button
          active={location.pathname === HOME ? 'true' : 'false'} // 문자열로 설정
          onClick={() => navigate(HOME)}
        >
          Home
        </Button>
        <Button
          active={location.pathname === PROJECT ? 'true' : 'false'} // 문자열로 설정
          onClick={() => navigate(PROJECT)}
        >
          Project
        </Button>
        <Button
          active={location.pathname === STUDY ? 'true' : 'false'} // 문자열로 설정
          onClick={() => navigate(STUDY)}
        >
          Study
        </Button>
      </S.CategoryContainer>
    </S.HeaderBar>
  );
};

const S = {
  HeaderBar: styled.div`
    width: 100%;
    height: 10vh;
    background-color: ${colors.semantic.background.dark};
    display: flex;
    align-items: center;
    justify-content: right;
  `,

  CategoryContainer: styled.div`
    display: flex;
    width: 30%;
    gap: 10%;
  `,
};

export default Header;
