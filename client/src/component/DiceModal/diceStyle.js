import styled from "styled-components";

export const Dice = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  transform-style: preserve-3d;
  transition: transform 1s;

  position: absolute;
  top: 31%;
  left: 31%;
  z-index: 100;

  > .side {
    position: absolute;
    background-color: ${(props) => props.theme.color.TEXT_WHITE};
    border-radius: 5px;
    width: 100px;
    height: 100px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    text-align: center;
    line-height: 2em;

    z-index: 101;
  }

  > .side > .dot {
    position: absolute;
    width: 20px;
    height: 20px;
    margin: -10px 5px 5px -10px;
    border-radius: 20px;
    background-color: #f25f5c;
    box-shadow: inset 2px 2px #d90429;

    z-index: 102;
  }

  > .side:nth-child(1) {
    transform: translateZ(3.1em);
  }
  > .side:nth-child(2) {
    transform: rotateY(-180deg) translateZ(3.1em);
  }
  > .side:nth-child(3) {
    transform: rotateY(-90deg) translateZ(3.1em);
  }
  > .side:nth-child(4) {
    transform: rotateX(90deg) translateZ(3.1em);
  }
  > .side:nth-child(5) {
    transform: rotateX(-90deg) translateZ(3.1em);
  }
  > .side:nth-child(6) {
    transform: rotateY(90deg) translateZ(3.1em);
  }

  > .side > .two-1,
  .three-1,
  .four-1,
  .five-1,
  .six-1 {
    top: 20%;
    left: 20%;
  }

  > .side > .four-3,
  .five-3,
  .six-4 {
    top: 20%;
    left: 80%;
  }

  > .side > .one-1,
  .three-2,
  .five-5 {
    top: 50%;
    left: 50%;
  }

  > .side > .four-2,
  .five-2,
  .six-3 {
    top: 80%;
    left: 20%;
  }

  > .side > .two-2,
  .three-3,
  .four-4,
  .five-4,
  .six-6 {
    top: 80%;
    left: 80%;
  }

  > .side > .six-2 {
    top: 50%;
    left: 20%;
  }

  > .side > .six-5 {
    top: 50%;
    left: 80%;
  }
`;
