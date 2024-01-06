import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <>
      <div className="w-full min-w-full mx-0 mt-16 select-none">
        <h1 className="text-4xl font-extrabold text-center text-headingColor font-roboto sm:text-6xl lg:text-7xl">
          Nomes{" "}
          <span className="underline  underline-offset-3	decoration-3 decoration-[#8B5CF6]">
            Brasileiros
          </span>
        </h1>
        <h3 className="mt-2 font-bold text-center text-secondaryHeadingColor text-md font-fira">
          A consulta é feita através de dados do{" "}
          <a
            className="text-customGreen"
            href="https://servicodados.ibge.gov.br/api/docs/nomes?versao=2#api-Nomes"
            target="_blank"
          >
            IBGE
          </a>
        </h3>
      </div>
      <SearchBar />
    </>
  );
};

export default Home;
