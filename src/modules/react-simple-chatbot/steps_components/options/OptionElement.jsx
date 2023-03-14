import styled from "styled-components";
import defaultTheme from "../../theme";

const OptionElement = styled.button`
  text-align: start;
  background: #fff;
  border: 0;
  border-radius: 22px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.userFontColor};

  border: 1px solid #96000f;
  color: #96000f;

  display: inline-block;
  font-size: 14px;
  padding: 12px;

  &:hover {
    opacity: 0.7;
  }
  &:active,
  &:hover:focus {
    outline: none;
  }
`;

OptionElement.defaultProps = {
  theme: defaultTheme,
};

export default OptionElement;
