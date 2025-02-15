import ProjectItem from '@/components/Project/ProjectItem';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import styled from 'styled-components';

const Project = () => {
  return (
    <S.ProjectContainer>
      <S.ProjectWrapper>
        <S.Title>클릭시 해당 깃허브로 이동합니다</S.Title>
        <ProjectItem />
      </S.ProjectWrapper>
    </S.ProjectContainer>
  );
};

const S = {
  ProjectContainer: styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ProjectWrapper: styled.div`
    width: 70%;
    height: 50vh;
  `,

  Title: styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-left: 1vw;
  `,

  LeftIcon: styled(FaArrowAltCircleLeft)`
    font-size: 36px;
    cursor: pointer;
    position: absolute;
    left: 7vw;
    top: 50vh;
    z-index: 1;
  `,
  RightIcon: styled(FaArrowAltCircleRight)`
    font-size: 36px;
    cursor: pointer;
    position: absolute;
    right: 7vw;
    top: 50vh;
    z-index: 1;
  `,
};

export default Project;
