import { ChangeEvent, useState } from "react";
import { usePokemon } from "./hooks/usePokemon";

function App() {
  const [query, setQuery] = useState("");
  const { pokemon } = usePokemon();

  const onChangeQuery = (event: ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="mt-4 text-center text-2xl">Poke Search</h1>

        <div className="m-4 flex flex-row items-center gap-2">
          <input
            value={query}
            onChange={onChangeQuery}
            className="w-80 border-none bg-white px-2 text-black"
          />
          <button className="rounded-sm bg-green-700 px-4 font-semibold text-white">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
