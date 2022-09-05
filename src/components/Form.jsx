import styled from "@emotion/styled";
import { useState } from "react";
import { useQuery } from "react-query";
import axiosClient from "../api/axios";
import { coins } from "../constants/coins";
import useSelectedCoin from "../hooks/useSelectedCoin";
import Error from "./Error";


const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover{ 
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;

const Form = ({setCoins}) => {

    const [crypto, setCrypto] = useState([]);
    const [errors, setErrors] = useState(false);
    const [ coin, SelectCoins ] = useSelectedCoin("Choose your coin", coins);
    const [ cryptocoin, SelectCrypto ] = useSelectedCoin("Choose your crypto", crypto);

    const { error } = useQuery('fetchCoins', async() => {
        const result = await axiosClient.get(`top/totalvolfull?limit=10&tsym=USD`)
        const { Data } = result.data
        setCrypto(Data.map(coin => {
            return {
                "id": coin.CoinInfo.Name, "name": coin.CoinInfo.FullName
            }
        }));
    }, { enabled: !!crypto})

    if (error) return 'An error has occurred: ' + error.message

    const handleSubmit = e => {
        e.preventDefault();

        if([coin, cryptocoin].includes('')) {
            setErrors(true);
            return;
        }

        setErrors(false);
        setCoins({
            coin,
            cryptocoin
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            {errors && <Error>All fields are required</Error>}
            <SelectCoins/>
            <SelectCrypto/>
            <InputSubmit type="submit" value="Quote" />
        </form>
    );
}
 
export default Form;