import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 80vh;
`

export const ContainerItems = styled.div`
  background-color: #373737;
  border-radius: 0 10px 10px 0;
  height: 80vh;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 200px;
    margin: 0 auto;
    display: block;
  }

  h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 25px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin: 25px 0 5px 0;
`

export const Input = styled.input`
  width: 391px;
  height: 38px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${(props) => (props.error ? '2px solid #cc1717' : 'none')};
  padding-left: 15px;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
