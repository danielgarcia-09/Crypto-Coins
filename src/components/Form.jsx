import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import useCoin from "../hooks/useCoin";
import useCryptoCoin from "../hooks/useCryptoCoin";
import Error from "./Error";
import Header from "./Header";

const Form = ({ saveCoin, saveCryptoCoin, updateResult }) => {
  //* CryptoAPI state
  const [cryptoList, saveCryptoList] = useState([]);
  const [error, saveError] = useState(false);

  const coins = [
    { code: "USD", name: "United States Dollar" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Pound Sterling" },
  ];

  // * Using useCoin
  const [coin, SelectCoins] = useCoin("Choose your coin", "", coins);

  //* Using useCryptoCoin
  const [cryptoCoin, SelectCrypto] = useCryptoCoin(
    "Choose your Cryptocoin",
    "",
    cryptoList
  );

  //* Calling API
  useEffect(() => {
    const consultAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const result = await axios.get(url);

      saveCryptoList(result.data.Data);
    };
    consultAPI();
  }, []);

  //* When user makes submit
  const changeCoin = (e) => {
    e.preventDefault();

    //* Check for empty values
    if (coin === "" || cryptoCoin === "") {
      saveError(true);
      updateResult({});
      return;
    }

    //* Send data to main component
    saveError(false);
    saveCoin(coin);
    saveCryptoCoin(cryptoCoin);
  };

  return (
    <Fragment>
      <div className=" w-full lg:w-2/5 lg:ml-8">
        <Header title="INSTANT CRYPTOCURRENCY" />
        <form onSubmit={changeCoin}>
          {error ? <Error title="All fields necessary" /> : null}
          <SelectCoins />
          <SelectCrypto />
          <button className="bg-gray-200 w-full rounded-full py-3 px-6 text-xl hover:text-white hover:bg-gray-800">
            Calculate
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
