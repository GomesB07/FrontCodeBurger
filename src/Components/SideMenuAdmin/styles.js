import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3c3c3c;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 100px 15px;
  }
`

export const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isActive ? '#565656' : '')};
  border-radius: 2px;
  margin: 8px;
  padding-left: 15px;
  gap: 10px;
  cursor: pointer;

  .icon {
    color: #ffffff;
  }
`

export const ListLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`
