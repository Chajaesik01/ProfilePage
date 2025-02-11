import { projectItem } from '@/mock';
import { colors } from '@/styles';
import styled from 'styled-components';

const ProjectItem = () => {
  const handleMove = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <S.ItemList>
      {projectItem.map((item) => (
        <S.ItemContainer key={item.id} onClick={() => handleMove(item.url)}>
          <img src={item.img} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.stack}</p>
        </S.ItemContainer>
      ))}
    </S.ItemList>
  );
};

const S = {
  ItemList: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2%;
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
};

export default ProjectItem;
