import ReactSelect from "react-select";
import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { OptionType } from "../../types";
import { makes } from "../../constants";

type ButtonProps = {
  styling: string;
};
const SearchButton = ({ styling }: ButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="/magnifying-glass.svg" />
    </button>
  );
};

const SearchBar = () => {
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [params, setParams] = useSearchParams();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParams({
      make: make.toLowerCase(),
      model: model.toLowerCase(),
    });
  };
  const options: OptionType[] = useMemo(
    () =>
      makes.map((item) => ({
        label: item,
        value: item,
      })),
    [make]
  );
  // console.log(make);
  // console.log(model);
  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item text-black">
        <ReactSelect
          options={options}
          onChange={(e) => e && setMake(e.value)}
          className="w-full "
          placeholder="Select car brand"
        />
        <SearchButton styling={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <img src="/model-icon.png" width={25} className="absolute ml-4" />
        <input
          type="text"
          placeholder="Type car name"
          className="searchbar__input rounded text-black"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton styling={"sm:hidden"} />
      </div>
      <SearchButton styling={"max-sm:hidden"} />
    </form>
  );
};

export default SearchBar;
