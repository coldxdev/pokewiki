import React, { useEffect, useState } from "react";
import CardsList from "../components/CardsList/CardsList";
import Chunks from "../components/Chunks/Chunks";
import MainLayout from "../layouts/MainLayout";
import cn from "classnames";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useInput } from "../hooks/useInput";
import Loader from "../components/Loader/Loader";
import { capitalizeFirstLetter } from "../utils/functions";
import { ITEMS_PER_PAGE } from "../utils/consts";
import { useAppDispatch } from "../hooks/useAppDispatch";
import {
  getPokemonByNameOrId,
  getPokemons,
  getPokemonsByTypeName,
  getPokemonsTypes,
  setActiveType,
  setCountOfAllPokemons,
  setCurrentPage,
  setError,
  setItemsLimit,
  setPokemons,
  setTypes,
} from "../store/actions-creators/app";

const Home = () => {
  const {
    pokemons,
    error,
    isLoading,
    itemsLimit,
    activeType,
    countOfAllPokemons,
    currentPage,
    types,
  } = useTypedSelector((state) => state.app);

  const dispatch = useAppDispatch();

  const searchInput = useInput("");
  const totalOfPages = Math.ceil(countOfAllPokemons / ITEMS_PER_PAGE);
  const [inputFocus, setInputFocus] = useState(false);

  const fetchPokemons = async () => {
    const { count, pokemons } = await dispatch(getPokemons(itemsLimit));

    dispatch(setPokemons(pokemons));
    dispatch(setCountOfAllPokemons(count));
  };

  const fetchPokemonsByType = async () => {
    const pokemons = await dispatch(getPokemonsByTypeName(activeType));

    const itemsCount = currentPage * ITEMS_PER_PAGE;
    const slicedPokemons = pokemons.slice(0, itemsCount);

    dispatch(setPokemons(slicedPokemons));
    dispatch(setCountOfAllPokemons(pokemons.length));
  };

  const fetchPokemonsTypes = async () => {
    const pokemonsTypes = await dispatch(getPokemonsTypes());

    dispatch(setTypes(pokemonsTypes));
  };

  useEffect(() => {
    if (types.length) return;

    fetchPokemonsTypes();
  }, []);

  useEffect(() => {
    if (activeType) return;

    fetchPokemons();
  }, [itemsLimit]);

  useEffect(() => {
    if (activeType) {
      fetchPokemonsByType();
    }
  }, [activeType, itemsLimit]);

  const onChunkClick = (typeName: string) => {
    setDefaultPage();
    dispatch(setActiveType(typeName));
  };

  const handleSearch = async () => {
    const trimmedValue = searchInput.value.trim();
    const formattedName = trimmedValue.toLowerCase();

    if (formattedName) {
      const pokemon = await dispatch(getPokemonByNameOrId(formattedName));
      if (!pokemon) return;

      dispatch(setCountOfAllPokemons(1));
      dispatch(setPokemons(pokemon));
    } else {
      reset();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const setDefaultPage = () => {
    dispatch(setCurrentPage(1));
    dispatch(setItemsLimit(ITEMS_PER_PAGE));
  };

  const reset = () => {
    setDefaultPage();
    dispatch(setError(""));
    dispatch(setActiveType(null));
    fetchPokemons();
  };

  const onLoadMore = () => {
    dispatch(setItemsLimit(itemsLimit + ITEMS_PER_PAGE));
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <MainLayout>
      <div className="home">
        <div className="container">
          <div className="home__top">
            <input
              className={cn("home__top-input", {
                focused: inputFocus,
              })}
              placeholder="Enter pokemon name"
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
              onChange={searchInput.onChange}
              onKeyDown={onKeyDown}
              type="text"
              defaultValue={searchInput.value}
            />

            <div className="home__top-wrapper">
              <button className="home__top-btn" onClick={handleSearch}>
                Search
              </button>
              <button
                className="home__top-btn home__top-btn--reset"
                onClick={reset}
              >
                Reset
              </button>
            </div>
            {error && <p className="error">{error}</p>}
          </div>

          <div className="home__types">
            <h2 className="home__types-title">
              Sort by type
              {activeType && ` "${capitalizeFirstLetter(activeType)}"`}
            </h2>
            <Chunks
              types={types}
              activeType={activeType}
              onChunkClick={onChunkClick}
            />
          </div>

          <div className="home__items">
            {pokemons.length > 0 && <CardsList items={pokemons} />}
            <Loader isLoading={isLoading} />
          </div>
          <div>
            {currentPage < totalOfPages && (
              <button
                className="load-more"
                onClick={onLoadMore}
                disabled={isLoading}
              >
                Load more
              </button>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
