import { colors } from '@/styles';
import styled from 'styled-components';
import profile from '@/assets/profile.png';

const Profile = () => {
  return (
    <S.ProfileContainer>
      <img src={profile} alt="프로필" />
    </S.ProfileContainer>
  );
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
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  `,
};
export default Profile;
