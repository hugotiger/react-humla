import styled from "@emotion/styled";

export const Button = styled.button`
  --v-padding: 2rem;

  height: 3rem;
  min-width: 3rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-left: var(--v-padding);
  padding-right: var(--v-padding);
  appearance: none;
  line-height: 1em;
  user-select: none;
  position: relative;
  white-space: nowrap;
  border-radius: 4px;
  background-color: rgb(2, 2, 2);
  color: white;
  border: none;
  vertical-align: middle;
  outline: none;
  cursor: pointer;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1rem;
  font-family: "Gilroy";
  font-weight: 400;

  transition: all 250ms ease-in-out;

  transform: scale(1);

  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }

  will-change: transform;
`;
