import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
  id: string;
}

interface Response {
  count: number;
  results: Pokemon[];
}

const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Array<Pokemon>>([]);

  const fetchPokemon = async () => {
    const response: AxiosResponse<Response> = await axios(
      `${import.meta.env.VITE_API_URL}/pokemon?limit=10&offset=10`
    );

    setPokemon(response.data.results);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemon };
};

export { usePokemon };
