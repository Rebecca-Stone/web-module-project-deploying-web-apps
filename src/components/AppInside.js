import React from "react";

import Header from "./Header";
import Results from "./Results";
import Image from "./Image";
import Selections from "./Selections";

const AppInside = (props) => {
  const {
    userCount,
    compCount,
    gameResult,
    compImage,
    userImage,
    rockClick,
    paperClick,
    scissorsClick,
  } = props;
  return (
    <div>
      <Header userCount={userCount} compCount={compCount} />
      <Results gameResult={gameResult} />
      <Image compImage={compImage} userImage={userImage} />
      <Selections
        rockClick={rockClick}
        paperClick={paperClick}
        scissorsClick={scissorsClick}
      />
    </div>
  );
};

export default AppInside;
