import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #ff0800;
  font-size: 45px;
  max-width: 450px;
  line-height: 56px;

  margin: 30px auto;
`;

export const Form = styled.form`
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

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #04d361;
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

export const Repositories = styled.div`
margin-top: 50px;
max-width: 700px;

a {
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
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
      font-size: 20px;
      color: #3d3d4d;
    }
    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;

      span{
        margin-left: 1px;
      }
    }
  }
}
`;
