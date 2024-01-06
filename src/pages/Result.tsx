import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { apiData } from "../types/SearchTypes";
import Loading from "../components/Loading";
import { glassBackGroundClass } from "../styles/customStyles";

const Result = () => {
  const { search } = useParams<{ search: string }>();
  const [results, setResults] = useState<apiData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/censos/nomes/basica?nome=${search}`
        );
        const data: apiData[] = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(true);
      } finally {
        setIsLoading(true);
      }
    };

    fetchData();
  }, [search]);

  const dados = () => {
    return (
      <>
        <div className="w-full h-full o verflow-y-auto bg-green-500/40">
          <div></div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="min-w-[288px]  w-[288px] mt-32 mx-auto px-3 flex flex-col items-center    sm:w-[400px] sm:min-w-[400px] lg:min-w-[600] lg:w-[600px] ">
        <h1 className="mx-auto text-5xl font-extrabold text-center w-ful text-headingColor font-roboto sm:text-6xl lg:text-7xl">
          Nomes{" "}
          <span className="underline  underline-offset-3 	decoration-3 decoration-[#8B5CF6]">
            Brasileiros
          </span>
        </h1>

        <SearchBar showTitle={false} />

        <div className="min-w-full w-full mt-16 mx-auto px-3  flex flex-col items-center sm:w-[400px] sm:min-w-[400px] lg:min-w-[600] lg:w-[600px] bg-black/30">
          <select className="border  text-sm rounded-lg outline-none  focus:border-blue-500 block w-full text-center py-2.5 bg-gray-700 border-gray-600 :placeholder-gray-400 text-white focus:ring-blue-500 ">
            <option value="">Brasil</option>
            <option value="12">Acre</option>
            <option value="27">Alagoas</option>
            <option value="16">Amapá</option>
            <option value="">Brasil</option>
            <option value="13">Amazonas</option>
            <option value="29">Bahia</option>
            <option value="23">Ceará</option>
            <option value="53">Distrito Federal</option>
            <option value="32">Espírito Santo</option>
            <option value="52">Goiás</option>
            <option value="21">Maranhão</option>
            <option value="51">Mato Grosso</option>
            <option value="50">Mato Grosso do Sul</option>
            <option value="31">Minas Gerais</option>
            <option value="15">Pará</option>
            <option value="25">Paraíba</option>
            <option value="41">Paraná</option>
            <option value="26">Pernambuco</option>
            <option value="22">Piauí</option>
            <option value="33">Rio de Janeiro</option>
            <option value="24">Rio Grande do Norte</option>
            <option value="43">Rio Grande do Sul</option>
            <option value="11">Rondônia</option>
            <option value="14">Roraima</option>
            <option value="42">Santa Catarina</option>
            <option value="35">São Paulo</option>
            <option value="28">Sergipe</option>
            <option value="17">Tocantins</option>
          </select>

          {isLoading ? (
            <div className="w-[288px] mx-auto translate-y-16">
              <Loading />
            </div>
          ) : (
            <div className="w-full mt-8 h-[240px] border-2 border-red-800">
              {" "}
              {dados()}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Result;
