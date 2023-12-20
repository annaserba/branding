import React from "react";
import styled from "styled-components";

const StyledSlider = styled.div`
  background-color: #ffffff;
  height: 903px;
  left: 95px;
  overflow: hidden;
  position: absolute;
  top: 7759px;
  width: 1250px;
`;

const TextWrapper16 = styled.div`
  color: #000000;
  font-family: "Arial-Bold", Helvetica;
  font-size: 62px;
  font-weight: 700;
  left: -1px;
  letter-spacing: -1px;
  line-height: 64px;
  position: absolute;
  top: 199px;
  white-space: nowrap;
`;

const Group21 = styled.div`
  background-color: #edf0fb;
  height: 65px;
  left: 1083px;
  position: absolute;
  top: 547px;
  transform: rotate(180deg);
  width: 71px;
`;

const Vector11 = styled.img`
  height: 22px;
  left: 24px;
  position: absolute;
  top: 22px;
  transform: rotate(-180deg);
  width: 24px;
`;

const Group22 = styled.div`
  background-color: #edf0fb;
  height: 65px;
  left: 97px;
  position: absolute;
  top: 547px;
  width: 71px;
`;

const Vector12 = styled.img`
  height: 22px;
  left: 24px;
  position: absolute;
  top: 21px;
  width: 24px;
`;

const Group23 = styled.div`
  height: 350px;
  left: 202px;
  position: absolute;
  top: 404px;
  width: 847px;
`;

const Group24 = styled.div`
  height: 350px;
`;

const Group25 = styled.div`
  background-color: #edf0fb;
  height: 350px;
  position: relative;
  width: 847px;
`;

const Frame17 = styled.div`
  background-image: url('https://psb-eta.vercel.app/psb/img/group.png');
  background-size: 100% 100%;
  border-radius: 500px;
  height: 256px;
  left: 36px;
  position: absolute;
  top: 44px;
  width: 256px;
`;

const Frame18 = styled.div`
  align-items: center;
  background-color: #ea5614;
  border-radius: 50px;
  display: inline-flex;
  gap: 2px;
  justify-content: center;
  left: 317px;
  padding: 0px 8px;
  position: absolute;
  top: 45px;
`;

const TextWrapper17 = styled.p`
  color: #ffffff;
  font-family: "Arial-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  height: 21px;
  letter-spacing: 0;
  line-height: 32px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: 177px;
`;

const Frame19 = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 11px;
  left: 317px;
  position: absolute;
  top: 91px;
`;

const Frame20 = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 2px;
  position: relative;
`;

const TextWrapper18 = styled.div`
  color: #000000;
  font-family: "Arial-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 22px;
  margin-top: -1px;
  position: relative;
  width: 453px;
`;

const TextWrapper19 = styled.p`
  color: #999999;
  font-family: "Arial-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 22px;
  position: relative;
  width: 290px;
`;

const TextWrapper20 = styled.p`
  color: #000000;
  font-family: "Arial-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 22px;
  position: relative;
  width: 502px;
`;

export const Slider = (): JSX.Element => {
  return (
    <StyledSlider>
      <TextWrapper16>Словами сотрудников</TextWrapper16>
      <Group21>
        <Vector11 alt="Vector" src="https://psb-eta.vercel.app/psb/img/vector-56-1.svg" />
      </Group21>
      <Group22>
        <Vector12 alt="Vector" src="https://psb-eta.vercel.app/psb/img/vector-56.svg" />
      </Group22>
      <Group23>
        <Group24>
          <Group25>
            <Frame17 />
            <Frame18>
              <TextWrapper17>Перспективы и развитие в ПСБ</TextWrapper17>
            </Frame18>
            <Frame19>
              <Frame20>
                <TextWrapper18>Антон</TextWrapper18>
                <TextWrapper19>Начальник отдела анализа и отчетности</TextWrapper19>
              </Frame20>
              <TextWrapper20>
                «До ПСБ я поработал в других топовых банках в разных сегментах. Каждый раз переходил, когда достигал
                потолка
                <br />и хотел развиваться в новом для себя. Сейчас в ПСБ я могу реализоваться внутри одного банка. Я
                вижу здесь перспективы
                <br />и большие возможности»
              </TextWrapper20>
            </Frame19>
          </Group25>
        </Group24>
      </Group23>
    </StyledSlider>
  );
};