import styled from 'styled-components';
import BackgroundHome from '../../assets/background home.svg'

export const Container = styled.div `
    background: url("${BackgroundHome}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img `
    margin-top: 30px;
`;

export const ContainerItems = styled.div `
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 170px);
`;

export const H1 = styled.h1 `
    font-style: normal;
    font-size: 34px;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 80px;
`

export const InputLabel = styled.p `
    font-style: normal;
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    letter-spacing: -0.41px;
    color: #EEEEEE;
    margin-left: 25px;
`;

export const Input = styled.input `
    background: #FFFFFF40;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 14px;
    width: 342px;
    height: 58px;
    padding-left: 26px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
    margin-bottom: 34px;
`;

export const Button = styled.button `
    width: 342px;
    height: 74px;
    background: #000000CC;
    border-radius: 14px;
    border: none;
    font-style: normal;
    font-size: 17px;
    font-weight: bold;
    line-height: 28px;
    color:#ffffff;
    cursor: pointer;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 70px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;


