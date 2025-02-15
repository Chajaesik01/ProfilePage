import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import type { ModalItem } from '@/types/types';
import { useState } from 'react';

type MainModalProps = {
  isOpen: boolean;
  onClose: () => void;
  modalItems: ModalItem[];
  initialIndex: number;
};

const MainModal = ({
  isOpen,
  onClose,
  modalItems,
  initialIndex,
}: MainModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentItem: ModalItem = modalItems[currentIndex];

  if (!isOpen) return null;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') onClose();
  };

  if (isOpen) {
    window.addEventListener('keydown', handleKeyDown);
  } else {
    window.removeEventListener('keydown', handleKeyDown);
  }

  const handleLeftClick = () => {
    setCurrentIndex(
      currentIndex > 0 ? currentIndex - 1 : modalItems.length - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex(
      currentIndex < modalItems.length - 1 ? currentIndex + 1 : 0
    );
  };

  return (
    <S.Overlay onClick={onClose}>
      <S.MainModalContainer onClick={(e) => e.stopPropagation()}>
        <S.CloseIcon onClick={onClose} />
        <S.ModalRow>
          <S.LeftIcon onClick={handleLeftClick} />
          <S.MainModalImg>
            {currentItem.img.map((image, index) => (
              <img key={index} src={image} alt={currentItem.title} />
            ))}
          </S.MainModalImg>
          <S.MainModalDesc>
            <h2>{currentItem.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: currentItem.desc }} />
          </S.MainModalDesc>
          <S.RightIcon onClick={handleRightClick} />
        </S.ModalRow>
      </S.MainModalContainer>
    </S.Overlay>
  );
};

const S = {
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  `,
  MainModalContainer: styled.div`
    width: 50%;
    height: 50vh;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 20px;
  `,
  ModalRow: styled.div`
    margin-top: 1vh;
    display: flex;
    width: 100%;
    height: 90%;
    position: relative;
  `,
  MainModalImg: styled.div`
    min-width: 50%;
    max-width: 50%;
    max-height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1vh;

    img {
      min-width: 60%;
      max-width: 60%;
      min-height: 50%;
      max-height: auto;
    }
  `,
  MainModalDesc: styled.div`
    width: 50%;
    margin-right: 4vw;
    h2 {
      font-size: 24px;
      font-weight: 700;
    }
    p {
      margin-top: 1vh;
    }
  `,
  CloseIcon: styled(IoCloseSharp)`
    font-size: 32px;
    cursor: pointer;
  `,
  LeftIcon: styled(FaArrowAltCircleLeft)`
    font-size: 36px;
    cursor: pointer;
    position: absolute;
    left: 0px;
    top: 15vh;
    z-index: 1;
  `,
  RightIcon: styled(FaArrowAltCircleRight)`
    font-size: 36px;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 15vh;
    z-index: 1;
  `,
};

export default MainModal;
