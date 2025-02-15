import Button from '@/components/common/Button';
import { colors } from '@/styles';
import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MainModal from '@/components/modal/MainModal';
import { modalItems } from '@/mock';
const Description = () => {
  const text1 = '안녕하세요';
  const text2 = '프론트엔드 개발자 차재식입니다';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClick = () => {
    openModal();
  };

  const renderText = (text: string) => {
    return (
      <S.TextContainer>
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </S.TextContainer>
    );
  };

  return (
    <S.DescContainer>
      {renderText(text1)}
      {renderText(text2)}
      <S.SubContainer>
        <p>2016 03 ~ 2019 02 서울금융고등학교 금융정보과 졸업</p>
        <p>2019 02 ~ 2026 02 동국대학교 컴퓨터공학과 졸업</p>
        <p>2024 09 ~ 2025 04 김민태의 데브캠프 2기 수료</p>
      </S.SubContainer>
      <Button size="large" active="true" onClick={handleClick}>
        About Me
      </Button>
      <MainModal
        isOpen={isModalOpen}
        onClose={closeModal}
        modalItems={modalItems}
        initialIndex={0}
      />
    </S.DescContainer>
  );
};

const S = {
  DescContainer: styled.div`
    width: 75%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    padding: 5%;
    gap: 10%;
  `,

  TextContainer: styled.div`
    display: flex;
    span {
      font-size: 2rem;
      color: ${colors.semantic.text.nav};
      font-weight: 700;
    }
  `,
  SubContainer: styled.p`
    gap: 0%;
  `,
};

export default Description;
