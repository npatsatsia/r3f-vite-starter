import { create } from "zustand";
import { kanas } from "./constant";

export const gameStates = {
    MENU: "MENU",
    GAME: "GAME",
    GAME_OVER: "GAME_OVER"
}

export const generateGameLevel = ({ nbStages }) => {
  const level = [];

  for (let i = 0; i < nbStages; i++) {
    const stage = [];
    const nbOptions = 3 + 1;
    for (let j = 0; j < nbOptions; j++) {
      let kana = null;
      while (!kana || stage.includes(kana)) {
        kana = kanas[Math.floor(Math.random() * kanas.length)];
      }
      stage.push(kana);
    }
    stage[Math.floor(Math.random() * stage.length)].correct = true;
    level.push(stage);
  }
  return level;
};

export const useGameStore = create((set) => ({
  level: null,
  currentStage: 0,
  currentKana: null,
  gameState: gameStates.MENU,
  mode: "hiragana",
  startGame: ({mode}) => {
    const level = generateGameLevel({ nbStages: 5 });
    const currentKana = level[0].find((kana) => kana.correct);
    set({ level, currentStage: 0, currentKana, gameState: gameStates.GAME, mode });
  },
  nextStage: () => {
    set((state) => {
      const currentStage = state.currentStage + 1;
      const currentKana = state.level[currentStage].find(
        (kana) => kana.correct
      );
      return { currentStage, currentKana };
    });
  },
}));