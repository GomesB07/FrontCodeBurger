import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #ffffff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #ffffff;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #ffffff;
  }
`

export const CategoryImg = styled.img``

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    color: #424242;
    &:nth-last-child() {
      color: #212121;
    }
  }
`

export const Image = styled.img`
  width: 250px;
  border-radius: 10px;
  margin-bottom: 10px;
`

export const Button = styled.button`
  width: 250px;
  height: 50px;
  background: #9758a6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  margin-top: 11px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
