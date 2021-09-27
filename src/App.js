import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Form from "./components/Form";
import Image from "./components/Image";
import Result from "./components/Result";
import Spinner from "./components/Spinner";
import logo from "./cryptomonedas.png";
function App() {
  const [coin, saveCoin] = useState("");
  const [cryptoCoin, saveCryptoCoin] = useState("");
  const [result, saveResult] = useState({});
  const [spin, saveSpinner] = useState(false);
  useEffect(() => {
    const calculateCrypto = async () => {
      //* Avoiding first execution
      if (coin === "") return;

      //* Consulting API to calculate
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`;

      const result = await axios.get(url);

      //* Starting Spinner
      saveSpinner(true);

      //* Making a timeout to stop spinner and show result
      setTimeout(() => {
        //* Stopping spinner
        saveSpinner(false);

        //* Saving and showing result
        saveResult(result.data.DISPLAY[cryptoCoin][coin]);
      }, 3000);
    };
    calculateCrypto();
  }, [coin, cryptoCoin]);

  const component = (spin) ? <Spinner /> : <Result res={result} />;

  return (
    <Fragment>
      <div className="mx-8 bg-white pt-10 pb-8 px-4 rounded-lg shadow-lg sm:px-28 md:mx-auto md:w-3/4 md:px-30 ">
        <div className="flex justify-start flex-wrap sm:justify-center">
          
          <Image logo={logo} alt="crypto" />

          <Form
            saveCoin={saveCoin}
            saveCryptoCoin={saveCryptoCoin}
            updateResult={saveResult}
          />
          
          {component}

        </div>
      </div>
    </Fragment>
  );
}

export default App;
