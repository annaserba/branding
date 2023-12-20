import React from "react";
import styled from "styled-components";

const StyledWhy = styled.div`
  background-color: #edf0fb;
  height: 2205px;
  left: 95px;
  overflow: hidden;
  position: absolute;
  top: 2902px;
  width: 1250px;

  .overlap {
    height: 2123px;
    position: relative;
    top: 184px;
    width: 1289px;
  }

  .rectangle {
    background-color: #2b2c84;
    height: 1464px;
    left: 0;
    position: absolute;
    top: 659px;
    width: 1253px;
  }

  .frame {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 32px;
    left: 106px;
    position: absolute;
    top: 0;
  }

  .text-wrapper {
    color: #000000;
    font-family: "Arial-Bold", Helvetica;
    font-size: 62px;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 46px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  .div {
    color: #000000;
    font-family: "Inter", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 32px;
    position: relative;
    width: 826px;
  }

  .frame-2 {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 32px;
    left: 106px;
    position: absolute;
    top: 1079px;
  }

  .text-wrapper-2 {
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
  }

  .p {
    color: #ffffff;
    font-family: "Arial-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 32px;
    position: relative;
    width: 827px;
  }

  .group {
    height: 531px;
    left: 72px;
    position: absolute;
    top: 1355px;
    width: 1217px;
  }

  .frame-wrapper {
    height: 60px;
    left: 458px;
    position: absolute;
    top: 471px;
    width: 212px;
  }

  .div-wrapper {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    width: 212px;
  }

  .frame-3 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 12px;
    margin-right: -143px;
    position: relative;
  }

  .text-wrapper-3 {
    color: #ffffff;
    font-family: "Arial-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 30px;
    margin-top: -1px;
    position: relative;
    width: 355px;
  }

  .frame-4 {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 12px;
    left: 862px;
    position: absolute;
    top: 471px;
  }

  .group-2 {
    height: 60px;
    left: 13px;
    position: absolute;
    top: 471px;
    width: 305px;
  }

  .frame-5 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    width: 305px;
  }

  .frame-6 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 12px;
    margin-right: -77px;
    position: relative;
  }

  .text-wrapper-4 {
    color: #ffffff;
    font-family: "Arial-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 30px;
    margin-top: -1px;
    position: relative;
    width: 382px;
  }

  .element-x {
    height: 320px;
    left: 443px;
    object-fit: cover;
    position: absolute;
    top: 122px;
    width: 277px;
  }

  .img {
    height: 325px;
    left: 806px;
    object-fit: cover;
    position: absolute;
    top: 117px;
    width: 327px;
  }

  .overlap-wrapper {
    height: 442px;
    left: 0;
    position: absolute;
    top: 0;
    width: 319px;
  }

  .overlap-group {
    height: 442px;
    position: relative;
  }

  .group-3 {
    height: 117px;
    left: 205px;
    position: absolute;
    top: 0;
    width: 63px;
  }

  .overlap-group-wrapper {
    height: 357px;
    left: 0;
    position: absolute;
    top: 85px;
    width: 319px;
  }

  .overlap-group-2 {
    height: 357px;
    position: relative;
  }

  .img-2 {
    height: 213px;
    left: 4px;
    position: absolute;
    top: 144px;
    width: 267px;
  }

  .mask-group {
    height: 207px;
    left: 4px;
    position: absolute;
    top: 151px;
    width: 265px;
  }

  .element-2 {
    height: 286px;
    left: 0;
    position: absolute;
    top: 0;
    width: 319px;
  }

  .group-4 {
    height: 70px;
    left: 136px;
    position: absolute;
    top: 351px;
    width: 67px;
  }

  .element-3 {
    height: 509px;
    left: 0;
    position: absolute;
    top: 436px;
    width: 1250px;
  }

  .element-4 {
    height: 646px;
    left: 182px;
    position: absolute;
    top: 288px;
    width: 856px;
  }
`;

export const Why = (): JSX.Element => {
  return (
    <StyledWhy>
      <div className="overlap">
        <div className="rectangle" />
        <div className="frame">
          <div className="text-wrapper">Почему ПСБ</div>
          <p className="div">
            Наши сотрудники — эксперты в своей области, которые предлагают осознанные и прорывные решения. Поэтому мы
            первыми открыли офисы в новых регионах, начали выдавать онлайн-кредиты
            <br />и производить расчеты в цифровых рублях. А еще мы — в тройке лучших интернет-банков. И это далеко не
            предел наших возможностей.
          </p>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-2">Наша внутренняя культура</div>
          <p className="p">
            Быть смелым и слаженно работать нам помогают корпоративные правила. Опираясь на них мы принимаем решения и
            общаемся
            <br />с коллегами.
          </p>
        </div>
        <div className="group">
          <div className="frame-wrapper">
            <div className="div-wrapper">
              <div className="frame-3">
                <p className="text-wrapper-3">
                  Мы отвечаем за свои
                  <br />
                  действия и решения
                </p>
              </div>
            </div>
          </div>
          <div className="frame-4">
            <p className="text-wrapper-3">
              Мы сотрудничаем для
              <br />
              решения общих задач
            </p>
          </div>
          <div className="group-2">
            <div className="frame-5">
              <div className="frame-6">
                <p className="text-wrapper-4">
                  Мы смотрим шире на свои задачи
                  <br />и помогаем банку меняться
                </p>
              </div>
            </div>
          </div>
          <img className="element-x" alt="Element" src="https://psb-eta.vercel.app/psb/img/1-4x.png" />
          <img className="img" alt="Element" src="https://psb-eta.vercel.app/psb/img/2-4x.png" />
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <img className="group-3" alt="Group" src="https://psb-eta.vercel.app/psb/img/group-1129.png" />
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <img className="img-2" alt="Vector" src="https://psb-eta.vercel.app/psb/img/vector-8.svg" />
                  <img className="img-2" alt="Clip path group" src="https://psb-eta.vercel.app/psb/img/clip-path-group.png" />
                  <img className="mask-group" alt="Mask group" src="https://psb-eta.vercel.app/psb/img/mask-group-2.png" />
                  <img className="element-2" alt="Element" src="https://psb-eta.vercel.app/psb/img/2.png" />
                </div>
              </div>
              <img className="group-4" alt="Group" src="https://psb-eta.vercel.app/psb/img/group-3.png" />
            </div>
          </div>
        </div>
        <img className="element-3" alt="Element" src="https://psb-eta.vercel.app/psb/img/14.png" />
        <img className="element-4" alt="Element" src="https://psb-eta.vercel.app/psb/img/3.png" />
      </div>
    </StyledWhy>
  );
};