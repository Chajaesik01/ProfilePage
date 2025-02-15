import { projectItem } from '@/mock';
import { colors } from '@/styles';
import { handleMove } from '@/utils/utils';
import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import styled from 'styled-components';

const ProjectItem = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex(
      currentIndex > 0
        ? currentIndex - 4
        : projectItem.length - (projectItem.length % 4 || 4)
    );
  };

  const handleRightClick = () => {
    setCurrentIndex(
      currentIndex < projectItem.length - 4 ? currentIndex + 4 : 0
    );
  };

  return (
    <S.ItemList>
      <S.LeftIcon onClick={handleLeftClick} />
      {projectItem.slice(currentIndex, currentIndex + 4).map((item) => (
        <S.ItemContainer key={item.id} onClick={() => handleMove(item.url)}>
          <img src={item.img} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.stack}</p>
        </S.ItemContainer>
      ))}
      <S.RightIcon onClick={handleRightClick} />
    </S.ItemList>
  );
};

const S = {
  ItemList: styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2%;
    margin-top: 2.5vh;
    padding: 16px;
  `,

  ItemContainer: styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid ${colors.semantic.border.focus};
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: ${colors.semantic.hover.secondary};
    }

    img {
      width: 80%;
      height: 60%;
    }
    h2 {
      margin-top: 1vh;
      font-size: 24px;
      font-weight: 700;
    }
    p {
      width: 80%;
      text-align: center;
      margin-top: 1vh;
      min-height: 14%;
      max-height: 14%;
    }
  `,

  LeftIcon: styled(FaArrowAltCircleLeft)`
    margin-left: 5vw;
    font-size: 48px;
    cursor: pointer;
    position: absolute;
    left: 0px;
    top: 50vh;
    z-index: 1;
  `,
  RightIcon: styled(FaArrowAltCircleRight)`
    font-size: 48px;
    margin-right: 5vw;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 50vh;
    z-index: 1;
  `,
};

export default ProjectItem;
