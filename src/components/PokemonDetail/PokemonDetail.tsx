import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../routes";
import { IPokemon } from "../../types/pokemon";
import Chunk from "../Chunks/Chunk/Chunk";
import Chunks from "../Chunks/Chunks";

const PokemonDetail: React.FC<IPokemon> = ({
  experience,
  height,
  img,
  moves,
  name,
  stats,
  types,
  weight,
  abilities,
}) => {
  const ability = abilities.find((item) => !item.isHidden);
  const formatName = (name: string) => name.replace("-", " ");

  const pokemonStatsItems = stats.map((stat) => {
    return (
      <div className="pokemon-stats__item" key={stat.name}>
        <div className="pokemon-stats__item-name">{formatName(stat.name)}</div>
        <div className="pokemon-stats__item-value">{stat.value}</div>
        <div className={`pokemon-stats__item-progress ${stat.name}`}>
          <span style={{ maxWidth: stat.value + "%" }}></span>
        </div>
      </div>
    );
  });

  const pokemonMovesItems = moves.map((move) => {
    return (
      <tr className="pokemon-moves__table-item" key={move.id}>
        <td>
          <Chunk name={move.type.name} />
        </td>
        <td> {formatName(move.name)}</td>
        <td> {move.power || "-"} </td>
        <td> {move.pp || "-"}</td>
      </tr>
    );
  });

  return (
    <div className="pokemon">
      <div className="container">
        <div className="pokemon__top">
          <Link className="pokemon__back" to={AppRoutes.HOME}>
            <svg
              width="59"
              height="59"
              viewBox="0 0 59 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.8632 45.9882C22.9032 46.9483 21.3467 46.9483 20.3866 45.9882L5.63662 31.2382C4.67658 30.2782 4.67658 28.7217 5.63662 27.7616L20.3866 13.0116C21.3467 12.0516 22.9032 12.0516 23.8632 13.0116C24.8233 13.9716 24.8233 15.5282 23.8632 16.4882L10.8515 29.4999L23.8632 42.5116C24.8233 43.4717 24.8233 45.0282 23.8632 45.9882Z"
                fill="#FFFFFF"
              />
              <path
                d="M54.0833 29.4999C54.0833 30.8576 52.9826 31.9583 51.6249 31.9583H9.83325C8.47556 31.9583 7.37492 30.8576 7.37492 29.4999C7.37492 28.1422 8.47556 27.0416 9.83325 27.0416H51.6249C52.9826 27.0416 54.0833 28.1422 54.0833 29.4999Z"
                fill="#FFFFFF"
              />
              <path
                d="M12.2917 29.4999C12.2917 30.8576 11.1911 31.9583 9.83341 31.9583H7.37508C6.01738 31.9583 4.91675 30.8576 4.91675 29.4999C4.91675 28.1422 6.01738 27.0416 7.37508 27.0416H9.83341C11.1911 27.0416 12.2917 28.1422 12.2917 29.4999Z"
                fill="#FFFFFF"
              />
            </svg>
            Back
          </Link>
        </div>
        <div className="pokemon__wrapper">
          <div className="pokemon__img">
            <div className="pokemon__img-wrapper">
              <img src={img} alt={`Pokemon ${name} image`} />
            </div>
          </div>
          <div className="pokemon__content pokemon-content">
            <h1 className="pokemon-content__name">{name}</h1>
            <div className="pokemon__types">
              <Chunks types={types} />
            </div>
            <div className="pokemon__stats pokemon-stats">
              <h4 className="pokemon-stats__title">Stats</h4>
              <div className="pokemon-stats__items">{pokemonStatsItems}</div>
            </div>
          </div>
        </div>
        <div className="pokemon__wrapper">
          <div className="pokemon-info">
            <div className="pokemon-info__item">
              <h5 className="pokemon-info__title">Height</h5>
              <div className="pokemon-info__value">{height}&apos;</div>
            </div>
            <div className="pokemon-info__item">
              <h5 className="pokemon-info__title">Experience</h5>
              <div className="pokemon-info__value">{experience}</div>
            </div>
            <div className="pokemon-info__item">
              <h5 className="pokemon-info__title">Weight</h5>
              <div className="pokemon-info__value">{weight} lbs</div>
            </div>
            <div className="pokemon-info__item">
              <h5 className="pokemon-info__title">Ability</h5>
              <div className="pokemon-info__value">{ability.name}</div>
            </div>
          </div>
          <div className="pokemon__moves pokemon-moves">
            <h4 className="pokemon-moves__title">Moves</h4>
            <div className="pokemon-moves__table-container">
              <table className="pokemon-moves__table">
                <thead className="pokemon-moves__table-header">
                  <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Power</th>
                    <th>PP</th>
                  </tr>
                </thead>
                <tbody className="pokemon-moves__table-body">
                  {pokemonMovesItems}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
