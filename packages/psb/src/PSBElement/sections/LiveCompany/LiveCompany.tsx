import styled from "styled-components";

const LiveCompanyWrapper = styled.div`
  background-color: #2b2c84;
  height: 1370px;
  left: 95px;
  position: absolute;
  top: 5107px;
  width: 1250px;
`;

const Overlap = styled.div`
  background-size: 100% 100%;
  height: 958px;
  left: 0;
  position: absolute;
  top: 412px;
  width: 1250px;
`;

const Group5 = styled.div`
  height: 742px;
  left: 31px;
  position: absolute;
  top: 88px;
  width: 1189px;
`;

const GroupWrapper = styled.div`
  background-size: 100% 100%;
  height: 623px;
  left: 0;
  position: absolute;
  top: 119px;
  width: 1189px;
`;

const Group6 = styled.div`
  height: 15px;
  left: 503px;
  position: relative;
  top: 577px;
  width: 190px;
`;

const Ellipse = styled.div`
  background-color: #fffbfb;
  border-radius: 7.5px;
  height: 15px;
  left: 50px;
  position: absolute;
  top: 0;
  width: 15px;
`;

const EllipseOpacity = styled(Ellipse)`
  background-color: #ffffff;
  opacity: 0.5;
`;

const Frame7 = styled.div`
  align-items: flex-start;
  display: inline-flex;
  gap: 12px;
  left: 27px;
  position: absolute;
  top: 0;
`;

const Frame8 = styled.div`
  align-items: center;
  border: 1px solid;
  border-color: #ffffff;
  border-radius: 50px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 15px;
  justify-content: center;
  padding: 10px 20px;
  position: relative;
`;

const TextWrapper5 = styled.div`
  color: #ffffff;
  font-family: "Arial-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 32px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const Frame9 = styled(Frame8)`
  border-color: #ea5614;
`;

const TextWrapper6 = styled(TextWrapper5)`
  color: #ea5614;
`;

const Frame10 = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 32px;
  left: 106px;
  position: absolute;
  top: 125px;
`;

const TextWrapper7 = styled.div`
  color: #ffffff;
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

const TextWrapper8 = styled.p`
  color: #ffffff;
  font-family: "Arial-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 32px;
  position: relative;
  width: 827px;
`;

export const LiveCompany = (): JSX.Element => {
  return (
    <LiveCompanyWrapper>
      <Overlap>
        <Group5>
          <GroupWrapper>
            <Group6>
              <Ellipse />
              <EllipseOpacity style={{ left: '25px' }} />
              <EllipseOpacity style={{ left: '0' }} />
              <EllipseOpacity style={{ left: '75px' }} />
              <EllipseOpacity style={{ left: '100px' }} />
              <EllipseOpacity style={{ left: '125px' }} />
              <EllipseOpacity style={{ left: '150px' }} />
              <EllipseOpacity style={{ left: '175px' }} />
            </Group6>
          </GroupWrapper>
          <Frame7>
            <Frame8>
              <TextWrapper5>ПСБ спорт</TextWrapper5>
            </Frame8>
            <Frame8>
              <TextWrapper5>Развитие и обучение</TextWrapper5>
            </Frame8>
            <Frame9>
              <TextWrapper6>Мероприятия</TextWrapper6>
            </Frame9>
            <Frame8>
              <TextWrapper5>ПСБ добро</TextWrapper5>
            </Frame8>
          </Frame7>
        </Group5>
      </Overlap>
      <Frame10>
        <TextWrapper7>Жизнь в компании</TextWrapper7>
        <TextWrapper8>
          Мы учимся в клубе спикеров, участвуем в крутых мероприятиях, 
          <br />и получаем баллы на корпоративный мерч за активность, тренируемся
          <br />у мастеров спорта и волонтерим. В сообществах по интересам всегда найдутся коллеги на твоей волне, а в
          клубе родителей — нужный совет
        </TextWrapper8>
      </Frame10>
    </LiveCompanyWrapper>
  );
};