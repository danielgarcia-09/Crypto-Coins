import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import CryptoImage from "../assets/img/crypto.png";
import axiosClient from "../api/axios";
import Form from "./Form";
import Result from "./Result";
import { MoonLoader } from "react-spinners";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 1rem;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const cssProps = {
    display: "block",
    margin: "2rem auto",
}

const Index = () => {
  const [coins, setCoins] = useState({});
  const [result, setResult] = useState({});

  const { coin, cryptocoin } = coins;
    
  const { isLoading, error } = useQuery(
    "getCoinComparison",
    async () => {
      const { data } = await axiosClient.get(
        `pricemultifull?fsyms=${cryptocoin}&tsyms=${coin}`
      );
      setResult(data.DISPLAY[cryptocoin][coin]);
      setCoins({})
    },
    {
      // The query will not execute until the coin and cryptocoin exists
      enabled: !!coin && !!cryptocoin,
    }
  );
  return (
    <Container>
      <Image src={CryptoImage} alt="crypto coin" />

      <div>
        <Heading>Quote CryptoCoins Inmediately</Heading>
        <Form setCoins={setCoins} />

        <MoonLoader color="white" size={60} cssOverride={cssProps} loading={isLoading} />
        {result.PRICE && <Result result={result} />}
      </div>
    </Container>
  );
};

export default Index;
