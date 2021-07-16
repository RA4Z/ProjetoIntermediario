import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  color: #ff0800;
  max-width: 450px;
  line-height: 56px;
  font: 52px Pokemon;

  margin: 30px auto;
`;

export const Form = styled.form<FormProps>`
  margin-top: 30px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    border: 2px solid #fff;
    border-right: 0;
    ${props => props.hasError && css`
      border-color: #c53030;
    ` }

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #ff0800;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;

    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
  font: 20px Pokemon;
`;

export const Repositories = styled.div`
margin-top: 50px;
max-width: 700px;

a {
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 7px;
  display block;
  text-decoration: none;

  display: flex;
  align-items: center;

  transition: transform 0.3s;

  &:hover {
    transform: translate(10px);
    background: ${shade(0.08, '#fff')};
  }

  & + a {
    margin-top: 16px;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 35%;
  }

  div {
    margin: 0 16px;
    margin-top: 7.5px;

    strong {
      font: 20px Pokemon;
      text-transform: uppercase;
      color: #3d3d4d;
    }
    p {
      font-size: 15px;
      color: #a8a8b3;
      margin-top: 4px;

      span{
        margin-left: 1px;
      }
    }
  }
  b {
    width: 50px;
    height: 97px;
    margin-left: 305px;
  }
}
`;
