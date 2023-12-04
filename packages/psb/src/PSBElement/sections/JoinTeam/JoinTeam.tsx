import styled from "styled-components";

const JoinTeamWrapper = styled.div`
  background-color: #ffffff;
  height: 1757px;
  left: 95px;
  overflow: hidden;
  position: absolute;
  top: 1145px;
  width: 1250px;
`;

const Frame11 = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 32px;
  left: 106px;
  position: absolute;
  top: 200px;
`;

const TextWrapper9 = styled.div`
  color: #000000;
  font-family: "Arial-Bold", Helvetica;
  font-size: 62px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 64px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const TextWrapper10 = styled.p`
  color: #000000;
  font-family: "Arial-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 32px;
  position: relative;
  width: 758px;
`;

// ... other styled components go here

export const JoinTeam = (): JSX.Element => {
  return (
    <JoinTeamWrapper>
      <Frame11>
        <TextWrapper9>Присоединяйся к команде ПСБ</TextWrapper9>
        <TextWrapper10>
          Если тоже хочешь выходить за рамки привычного и реализовывать амбициозные задачи, смело выбирай вакансию!
        </TextWrapper10>
      </Frame11>
      {/* Other components with styled components go here */}
    </JoinTeamWrapper>
  );
};