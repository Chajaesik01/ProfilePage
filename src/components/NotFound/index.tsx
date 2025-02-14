import Button from '@/components/common/Button';
import { colors } from '@/styles';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <S.NotFoundContainer>
      <S.NotFoundMessage>
        <h1>404 - 페이지를 찾을 수 없습니다</h1>
        <p> 죄송합니다 요청하신 페이지를 찾을 수 없습니다</p>
        <Button size="large" active="true" onClick={handleBack}>
          돌아가기
        </Button>
      </S.NotFoundMessage>
    </S.NotFoundContainer>
  );
};

const S = {
  NotFoundContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  `,

  NotFoundMessage: styled.h1`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    font-size: 32px;
    font-weight: bold;
    color: ${colors.semantic.neutral};

    p {
      font-size: 24px;
    }
  `,
};

export default NotFound;
