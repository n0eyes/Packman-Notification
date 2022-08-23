import Character1 from "/public/assets/png/character1.png";
import Character2 from "/public/assets/png/character2.png";
import Character3 from "/public/assets/png/character3.png";
import Character4 from "/public/assets/png/character4.png";
import Character5 from "/public/assets/png/character5.png";
import Character6 from "/public/assets/png/character6.png";

export const CharacterList = [
  Character1,
  Character2,
  Character3,
  Character4,
  Character5,
  Character6,
] as const;

export const getRandomCharacter = () => {
  console.log(Math.floor(Math.random() * CharacterList.length));

  return CharacterList[Math.floor(Math.random() * CharacterList.length)];
};
