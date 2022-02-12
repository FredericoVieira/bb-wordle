import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jogar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Você tem 6 tentativas par adivinhar a palavra. A cada palpite a cor das
        letras muda, indicando o quão perto você está da solução.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" status="correct" />
        <Cell value="A" />
        <Cell value="L" />
        <Cell value="A" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-2.5">
        A letra S está na posição correta.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="O" />
        <Cell value="M" />
        <Cell value="B" status="present" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-2.5">
        A letra X está na palavra mas na posição errada.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="R" />
        <Cell value="A" />
        <Cell value="T" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-2.5">
        A letra X não pertence a palavra.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-2.5">
        As palavras a serem descobertas são relativas ao nosso banco.
        Uma nova palavra é gerada a cada dia.
      </p>
    </BaseModal>
  )
}
