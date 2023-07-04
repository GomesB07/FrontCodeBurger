import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 72px;
  background-color: #ffffff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 50px;
  position: fixed;
  z-index: 999;
`
export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`
export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.isActive ? '#9758A6' : '#555555')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  position: relative;
`

export const QuantityIndicator = styled.p`
  width: 20px;
  height: 20px;
  background-color: red;
  display: ${(props) => (props.product ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 50%;
  position: absolute;
  margin: -10px 15px;
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Line = styled.div`
  height: 50px;
  border-right: 0.5px solid #bababa;
`

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
`

export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #9758a6;
  cursor: pointer;
`
