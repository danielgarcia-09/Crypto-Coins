import { Fragment, useState } from "react";

const useCoin = (label, initialState, options) => {
  // * Custom hook state

  const [state, updateState] = useState(initialState);

  const Select = () => (
    <Fragment>
      <label className="block mb-4">
        <span>{label}</span>
        <select 
          onChange={ e => updateState(e.target.value) }
          value={ state }
          className="form-select w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-800">
          <option value=''>-- Select --</option>
          {options.map( opt => (
            <option key={opt.code} value={opt.code}>{opt.name}</option>
          ))}
        </select>
      </label>
    </Fragment>
  );

  // * Return state, interface and function that modifies state
  return [state, Select, updateState];
};

export default useCoin;
