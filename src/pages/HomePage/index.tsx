import Description from '@/components/home/home-main/Description';
import Profile from '@/components/home/home-main/Profile';
import { colors } from '@/styles';
import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <>
      <S.MainWrapper>
        <S.MainContainer>
          <Profile />

          <Description />
        </S.MainContainer>
      </S.MainWrapper>
    </>
  );
};

const S = {
  MainWrapper: styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.semantic.background.gray};
  `,
  MainContainer: styled.div`
    width: 40%;
    height: 40vh;
    display: flex;
    flex-direction: row;
    gap: 1%;
  `,
};

export default HomePage;
