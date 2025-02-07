import { colors } from '@/styles';
import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return <S.ProfileContainer></S.ProfileContainer>;
};

const S = {
  ProfileContainer: styled.div`
    width: 25%;
    height: 50%;
    border-radius: 50%;
    background-color: ${colors.semantic.background.light};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    img {
    }
  `,
};
export default Profile;
