import { Fragment, useState } from "react";

const useCryptoCoin = (label, initialState, options) => {
  // * Custom hook state

  const [state, updateState] = useState(initialState);
  // console.log(options);

  const SelectCrypto = () => (
    <Fragment>
      <label className="block mb-4">
        <span>{label}</span>
        <select 
          onChange={ e => updateState(e.target.value) }
          value={ state }
          className="form-select w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-800">
          <option value=''>-- Select --</option>
          {options.map( opt => (
            <option key={opt.CoinInfo.Id} value={opt.CoinInfo.Name}>{opt.CoinInfo.FullName}</option>
          ))}
        </select>
      </label>
    </Fragment>
  );

  // * Return state, interface and function that modifies state
  return [state, SelectCrypto, updateState];
};

export default useCryptoCoin;
