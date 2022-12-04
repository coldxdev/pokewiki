import React from "react";
import { IPokemonType } from "../../types/pokemon";
import Chunk from "./Chunk/Chunk";

interface ChunksProps {
  types: IPokemonType[];
  onChunkClick?: (name: string) => void;
  activeType?: string;
}

const Chunks: React.FC<ChunksProps> = ({
  types = [],
  onChunkClick,
  activeType,
}) => {
  const chunkElems = types.map((type) => (
    <Chunk
      onChunkClick={onChunkClick}
      isActive={activeType === type.name}
      name={type.name}
      key={type.name}
    />
  ));

  return <div className="chunks">{chunkElems}</div>;
};

export default Chunks;
