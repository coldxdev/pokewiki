import React from "react";
import { IPokemonCard, PokemonTypeName } from "../../types/pokemon";
import { Link } from "react-router-dom";
import cn from "classnames";
import cover from "../../assets/images/card-img-cover.svg";
import { formatName } from '../../utils/functions';

const Card: React.FC<IPokemonCard> = ({ name, id, types, img}) => {
  const typeName = types[0]?.name;

  return (
    <Link
      className={cn("card", {
        normal: typeName === PokemonTypeName.NORMAL,
        fighting: typeName === PokemonTypeName.FIGHTING,
        flying: typeName === PokemonTypeName.FLYING,
        poison: typeName === PokemonTypeName.POISON,
        ground: typeName === PokemonTypeName.GROUND,
        rock: typeName === PokemonTypeName.ROCK,
        bug: typeName === PokemonTypeName.BUG,
        ghost: typeName === PokemonTypeName.GHOST,
        steel: typeName === PokemonTypeName.STEEL,
        fire: typeName === PokemonTypeName.FIRE,
        water: typeName === PokemonTypeName.WATER,
        grass: typeName === PokemonTypeName.GRASS,
        electric: typeName === PokemonTypeName.ELECTRIC,
        psychic: typeName === PokemonTypeName.PSYCHIC,
        ice: typeName === PokemonTypeName.ICE,
        dragon: typeName === PokemonTypeName.DRAGON,
        fairy: typeName === PokemonTypeName.FAIRY,
      })}
      to={`/pokemon/${id}`}
    >
      <div className="card__index">№ {id}</div>

      <div className="card__img">
        <img
          src={img ? img : cover}
          alt={name}
        />
      </div>

      <div className="card__name">{formatName(name)}</div>
    </Link>
  );
};

export default Card;
