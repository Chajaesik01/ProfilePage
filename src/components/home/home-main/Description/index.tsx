import Button from '@/components/common/Button';
import { colors } from '@/styles';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Description: React.FC = () => {
  const text1 = '안녕하세요';
  const text2 = '프론트엔드 개발자 차재식입니다';

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
      <Button size="large" active="true">
        More
      </Button>
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
};

export default Description;
