import styled, {css} from "styled-components";

const buttonStyles = css`
  border-radius: 4px;
  padding: 0.5em 1em;
  cursor: pointer;
  font-size: 1rem;
  border: none;
  margin: 0.5em;
  

  ${({ variant }) => variant === 'primary' && css`
    background-color: #007bff;
    color: white;
    &:hover {
      background-color: #0056b3;
    }
  `}

  ${({ variant }) => variant === 'secondary' && css`
    border: 1px #007bff solid;
    background-color: white;
    color: #007bff;
    &:hover {
      background-color: #007bff;
      color:#fff;   
    }
  `}

  ${({ variant }) => variant === 'cancel' && css`
    background-color: #dc3545;
    color: white;
    &:hover {
      background-color: #c82333;
    }
  `}

  ${({ variant }) => variant === 'normal' && css`
    background-color: lightgrey;
    color: white;
    &:hover {
      background-color: #e2e6ea;
    }
  `}
`;

const StyledButton = styled.button`
${buttonStyles}
`

export default StyledButton;