import React from "react";
import cn from "classnames";
import "../Chunks.scss";
import { PokemonTypeName } from "../../../types/pokemon";

interface ChunkProps {
  name: string;
  isActive?: boolean;
  className?: string;
  onChunkClick?: (name: string) => void;
}

const Chunk: React.FC<ChunkProps> = ({
  name,
  isActive,
  className,
  onChunkClick,
}) => {
  const buttonClassnames = cn(
    "chunk",
    {
      active: isActive,
      normal: name === PokemonTypeName.NORMAL,
      fighting: name === PokemonTypeName.FIGHTING,
      flying: name === PokemonTypeName.FLYING,
      poison: name === PokemonTypeName.POISON,
      ground: name === PokemonTypeName.GROUND,
      rock: name === PokemonTypeName.ROCK,
      bug: name === PokemonTypeName.BUG,
      ghost: name === PokemonTypeName.GHOST,
      steel: name === PokemonTypeName.STEEL,
      fire: name === PokemonTypeName.FIRE,
      water: name === PokemonTypeName.WATER,
      grass: name === PokemonTypeName.GRASS,
      electric: name === PokemonTypeName.ELECTRIC,
      psychic: name === PokemonTypeName.PSYCHIC,
      ice: name === PokemonTypeName.ICE,
      dragon: name === PokemonTypeName.DRAGON,
      fairy: name === PokemonTypeName.FAIRY,
    },
    className
  );

  const buttonHandler = onChunkClick ? () => onChunkClick(name) : null;

  return (
    <button className={buttonClassnames} onClick={buttonHandler}>
      {name}
    </button>
  );
};

export default Chunk;
