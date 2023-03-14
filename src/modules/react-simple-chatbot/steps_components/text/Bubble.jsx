import styled from "styled-components";
import { scale } from "../../common/animations";
import defaultTheme from "../../theme";

const Bubble = styled.div`
  animation: ${scale} 0.3s ease forwards;
  background: ${(props) =>
    !props.user ? props.theme.botBubbleColor : props.theme.userBubbleColor};
  color: ${(props) =>
    props.user ? props.theme.userFontColor : props.theme.botFontColor};

  border-radius: ${(props) => {
    const { isFirst, isLast, user } = props;

    if (!isFirst && !isLast) {
      return user ? "18px 0 0 18px" : "0 18px 18px 0px";
    }

    if (!isFirst && isLast) {
      return user ? "18px 0 18px 18px" : "0 18px 18px 18px";
    }

    return props.user ? "18px 18px 0 18px" : "18px 18px 18px 0";
  }};

  display: inline-block;

  font-size: 14px;
  font-size: 15px;
  line-height: 20px;
  overflow-wrap: break-word;

  max-width: ${(props) => {
    const { user } = props;

    return user ? "50%" : " 87%";
  }};

  margin: ${(props) => {
    const { isFirst, showAvatar, user } = props;

    if (!isFirst && showAvatar) {
      return user ? "-8px 46px 13px 0" : "-8px 0 13px 46px";
    }

    if (!isFirst && !showAvatar) {
      return user ? "-8px 0px 13px 0" : "-8px 0 13px 0px";
    }

    return "0 0 16px 0";
  }};
  overflow: hidden;
  position: relative;
  padding: 12px;
  transform: scale(0);
  text-align: ${({ user }) => {
    return user ? "" : "start";
  }};
  text-transform-origin: ${(props) => {
    const { isFirst, user } = props;

    if (isFirst) {
      return user ? "bottom right" : "bottom left";
    }

    return user ? "top right" : "top left";
  }};
`;

Bubble.defaultProps = {
  theme: defaultTheme,
};

export default Bubble;
