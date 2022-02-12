export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Muito bem!', 'Arrasou!', 'Ótimo!']
export const GAME_COPIED_MESSAGE = 'Status do jogo copaido!'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Letras insuficientes!'
export const WORD_NOT_FOUND_MESSAGE = 'Palavra não encontrada!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `A palavra era ${solution}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Estatísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuição dos palpites'
export const NEW_WORD_TEXT = 'Nova palavra em:'
export const SHARE_TEXT = 'Compatilhar'
export const TOTAL_TRIES_TEXT = 'Total de tentativas'
export const SUCCESS_RATE_TEXT = 'Taxa de vitórias'
export const CURRENT_STREAK_TEXT = 'Sequência atual'
export const BEST_STREAK_TEXT = 'Melhor Sequência'
