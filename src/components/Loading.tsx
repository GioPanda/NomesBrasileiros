const Loading = () => {
  return (
    <>
      <div className="grid w-full h-full mx-auto">
        <div className="w-full max-w-md p-4 mx-auto rounded-lg bg-gray-800/10">
          <div className="flex gap-2">
            <div className="w-full space-y-2">
              <div className="w-9/12 bg-gray-600 h-7 rounded-2xl animate-pulse"></div>
              <div className="w-3/5 bg-gray-600 h-7 rounded-2xl animate-pulse"></div>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-6">
            <div className="w-4/5 delay-200 bg-gray-600 h-7 rounded-2xl animate-pulse"></div>
            <div className="w-3/5 bg-gray-600 h-7 rounded-2xl animate-pulse delay-250"></div>
            <div className="w-3/4 delay-300 bg-gray-600 h-7 rounded-2xl animate-pulse"></div>
            <div className="w-3/5 bg-gray-600 h-7 rounded-2xl animate-pulse delay-350"></div>
            <div className="w-4/5 bg-gray-600 h-7 rounded-2xl animate-pulse delay-400"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
