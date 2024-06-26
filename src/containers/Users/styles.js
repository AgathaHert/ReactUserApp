import styled from 'styled-components';
import BackgroundHome from '../../assets/background users.svg'

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
    backdrop-filter: blur(45px);
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

export const Button = styled.button `
    width: 342px;
    height: 74px;
    background: transparent;
    border-radius: 14px;
    border: 1px solid #FFFFFF;
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
    margin-top: 90px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    img{
        transform: rotateY(180deg);
    }
`;

export const User = styled.li `
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #FFFFFF40;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    margin-top: 20px;
    
    p{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        color: #FFFFFF;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`