import { _t } from "../Globals";

export const datasteps = [
  {
    id: "welcome",
    message: _t("welcome_message"),
    trigger: "intro",
  },
  {
    id: "intro",
    message: _t("let_begin_identify"),
    trigger: "identify",
    // delay: 5000,
  },
  {
    id: "identify",
    message: _t("what_your_mail"),
    trigger: "user_mail",
  },
  {
    id: "user_mail",
    user: true,
    validator: (value) => {
      if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
      } else {
        return _t("invalid_mail");
      }
    },
    trigger: "passwordq",
  },
  {
    id: "passwordq",
    message: _t("what_your_pass"),
    trigger: "password",
    hideInput: true,
  },
  {
    id: "password",
    user: true,
    validator: (value) => {
      if (`${value}`.length > 6) {
        return true;
      } else {
        return _t("invalid_pass");
      }
    },
    trigger: "logining",
    inputAttributes: { type: "password" },
  },
  {
    id: "logining",
    message: _t("let_me_verify"),
    trigger: "verify-login",
  },
  {
    id: "anything",
    message: _t("cool"),
    end: true,
  },
];
