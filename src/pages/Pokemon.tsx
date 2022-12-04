import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Loader from "../components/Loader/Loader";
import PokemonDetail from "../components/PokemonDetail/PokemonDetail";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getPokemon, setPokemon } from "../store/actions-creators/pokemon";

const Pokemon: React.FC = () => {
  const { id } = useParams();
  const { isLoading } = useTypedSelector((state) => state.app);
  const { pokemon } = useTypedSelector((state) => state.pokemon);
  const dispatch = useAppDispatch();

  const fetchPokemon = async () => {
    const fetchedPokemon = await dispatch(getPokemon(id));

    dispatch(setPokemon(fetchedPokemon));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <MainLayout>
      {pokemon && <PokemonDetail {...pokemon} />}
      <Loader isLoading={isLoading} />
    </MainLayout>
  );
};

export default Pokemon;
