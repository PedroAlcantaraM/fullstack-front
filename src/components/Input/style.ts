import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  position: relative;

  div {
    position: relative;
    height: 50px;
  }
  label {
    font-weight: 500;
    font-size: var(--rem-11);
    margin-bottom: 6px;

    position: absolute;
    top: -15px;
    left: 20px;

    padding-left: 5px;
    padding-right: 5px;

    background-color: var(--gray-1);

    font-size: 16px;
    line-height: 29px;
    color: var(--gray-4);
  }

  span {
    color: red;
    position: absolute;
    font-size: 14px;
    right: 0;
    top: 55px;

    max-width: 100%;
    white-space: nowrap; // Removendo quebra de linha
    overflow: hidden; // Removendo a barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final do texto
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 12px;

  background-color: var(--gray-1);

  border: 1px solid var(--gray-4);
  border-radius: var(--radius-8);

  font-weight: 500;
  font-size: var(--rem-09);
  margin-bottom: 6px;

  :focus {
    border: 1px solid var(--color-primary);
  }
`;
