import {useGameStore, gameStates} from '../store'

export const Menu = () => {
    const  {startGame, gameState} = useGameStore((state) => ({
        startGame: state.startGame,
        gameState: state.gameState,
    }))
    return (
        <>
            <div className={`menu ${gameState !== gameStates.MENU ? "menu--hidden" : ""}`}>
                <h1>Kana Game</h1>
                <button disabled={gameState !== gameStates.MENU} onClick={() => {startGame({mode: "hiragana"})}}>Start hiragana game</button>
                <button disabled={gameState !== gameStates.MENU} onClick={() => {startGame({mode: "katakana"})}}>Start katakana game</button>
            </div>
        </>
    )
}