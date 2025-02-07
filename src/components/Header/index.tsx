import { colors } from '@/styles';
import styled from 'styled-components';
import { ROUTER_PATH } from '@/constants/constants';
import { useLocation, useNavigate } from 'react-router-dom';

type CategoryItemProps = {
  active: string;
};

export const Header = () => {
  const { HOME, PROJECT, STUDY } = ROUTER_PATH;
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <S.HeaderBar>
      <S.CategoryContainer>
        <S.CategoryItem
          active={location.pathname === HOME ? 'true' : 'false'}
          onClick={() => navigate(HOME)}
        >
          <p>Home</p>
        </S.CategoryItem>
        <S.CategoryItem
          active={location.pathname === PROJECT ? 'true' : 'false'}
          onClick={() => navigate(PROJECT)}
        >
          <p>Project</p>
        </S.CategoryItem>
        <S.CategoryItem
          active={location.pathname === STUDY ? 'true' : 'false'}
          onClick={() => navigate(STUDY)}
        >
          <p>Study</p>
        </S.CategoryItem>
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

  CategoryItem: styled.div<CategoryItemProps>`
    width: 15%;
    height: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.2rem;
    border-radius: 4px;
    background-color: ${(props) =>
      props.active === 'true' ? colors.semantic.secondary : ''};
    color: ${(props) =>
      props.active === 'true'
        ? colors.semantic.text.light
        : colors.semantic.text.dark};
    &:hover {
      color: ${colors.semantic.text.light};
    }

    p {
      cursor: pointer;
    }
  `,
};
