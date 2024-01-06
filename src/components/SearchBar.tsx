import { FormEvent, useState } from "react";
import { glassBackGroundClass } from "../styles/customStyles";
import { apiData } from "../types/SearchTypes";
import { SearchIcon } from "../assets/svg/search";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ showTitle = true }) => {
  const [search, setSearch] = useState<string>("");
  const [name, setName] = useState<apiData[]>([]);

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${search}`
    );
    const data = await response.json();
    console.table(data);
    setName(data[0]);
    console.table(name);
    setSearch("");
    navigate(`/result/${search}`);
  };

  return (
    <div
      className={`min-w-[288px]  w-[288px] mt-32 mx-auto px-3  sm:w-[400px] sm:min-w-[400px] lg:min-w-[600] lg:w-[600px]
 `}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-full min-w-full min-h-full select-none "
      >
        {showTitle && (
          <label htmlFor="search">
            {" "}
            <h2 className="font-mono text-xl font-bold text-secondaryHeadingColor hover:cursor-pointer">
              Pesquise aqui qualquer nome!
            </h2>
          </label>
        )}

        <div className="flex max-w-full min-w-full">
          <input
            className={`max-w-full min-w-full  w-full h-10 font-extrabold text-xl text-customGreen  mx-auto mt-4 bg-[#8B5CF6] focus:ring-2 focus:ring-slate-700 outline-none  placeholder-customGreen/50  font-mosk text-center rounded-md  select-none  border-b-[1px] border-black/30  ${glassBackGroundClass} `}
            type="text"
            id="search"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            placeholder="Pesquise um nome"
          />
          <button
            type="submit"
            className="relative translate-y-[10px] right-8 opacity-80 hover:opacity-100 focus:outline-none"
          >
            <SearchIcon height={27} width={27} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
