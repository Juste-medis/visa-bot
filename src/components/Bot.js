import React from "react";
import { ThemeProvider } from "styled-components";
import { takeSome } from "../Helpers/Utils";
import ChatBot from "../modules/react-simple-chatbot";

import { _t } from "../Ressources/Globals";
import GlobalWorker from "../Ressources/GlobalWorker";
import AgreementComponent from "./boters/agreement";
import DateComponent from "./boters/date";
import LoginComponent from "./boters/login";
import RecapComponent from "./boters/recapitulatif";

const otherFontTheme = {
  background: "#fff",
  botBubbleColor: "rgb(240, 242, 247)",
  userBubbleColor: "#96000f",
  fontFamily: "Mulish",
  headerBgColor: "#96000f",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botFontColor: "rgb(6, 19, 43)",
  userFontColor: "#fff",
};

const steps = [
  {
    id: "welcome",
    message: _t("welcome_message"),
    trigger: "intro",
  },
  {
    id: "intro",
    message: _t("let_begin_identify"),
    trigger: "identify",
    delay: 5000,
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
      GlobalWorker.setCurrentData("user_mail", value);
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
    id: "verify-login",
    component: <LoginComponent />,
    trigger: "q-familial",
    waitAction: true,
    hideInput: true,
  },
  //-------------------------famille------------------
  {
    id: "q-familial",
    message: _t("is_it_familial"),
    trigger: "demand_type",
  },
  {
    id: "demand_type",
    onOptionClick: (value) => {
      GlobalWorker.setCurrentData("demand_type", value);
    },
    options: [
      {
        value: "single_demand",
        label: _t("single_demand"),
        trigger: "q-what_center",
      },
      {
        value: "family_demand",
        label: _t("family_demand"),
        trigger: "family_demand",
      },
    ],
  },
  {
    id: "family_demand",
    message: _t("how_many_person"),
    trigger: "numbers_of_person",
  },
  {
    id: "numbers_of_person",
    options: ["2", "4", "5", "7", "10", "15"].map((mes) => ({
      value: mes,
      label: mes,
      trigger: "q-what_center",
    })),
    user: true,
    trigger: "q-what_center",
    onOptionClick: (value) => {
      GlobalWorker.setCurrentData("numbers_of_person", value);
    },
    validator: (value) => {
      GlobalWorker.setCurrentData("numbers_of_person", value);
      if (isNaN(value)) {
        return _t("not_number");
      }
      return true;
    },
  },
  {
    id: "q-what_center",
    message: _t("q_what_center"),
    trigger: "what_center",
  },
  {
    id: "what_center",
    options: [
      "Ministry of Foreign Affairs and International Cooperation",
      "Consular of morocco",
      "Tanger-Tétouan-Al Hoceïma",
    ].map((mes) => ({
      value: mes,
      label: mes,
      trigger: "q-what_date",
    })),
    onOptionClick: (value) => {
      GlobalWorker.setCurrentData("what_center", value);
    },
  },
  {
    id: "q-what_date",
    message: _t("q_what_date"),
    trigger: "trip-date",
  },
  {
    id: "trip-date",
    component: <DateComponent meta="trip_date" />,
    trigger: "q-already_done",
    waitAction: true,
    // asMessage: true,
    hideInput: true,
  },

  {
    id: "q-already_done",
    message: _t("q_already_done"),
    trigger: "first_time",
  },
  {
    id: "first_time",
    options: [
      {
        l: _t("my_first_time"),
        t: "q-visa_category",
        v: "my_first_time",
      },
      { l: _t("not_my_first_time"), t: "second-time-demand", v: "second_time" },
    ].map((mes) => ({
      value: mes.v,
      label: mes.l,
      trigger: mes.t,
    })),
    onOptionClick: (value) => {
      GlobalWorker.setCurrentData("first_time", value);
    },
  },
  {
    id: "second-time-demand",
    message: _t("q_visa_number"),
    trigger: "visa_number",
  },
  {
    id: "visa_number",
    trigger: "q-visa_category",
    user: true,
    inputAttributes: { type: "number" },
    validator: (value) => {
      GlobalWorker.setCurrentData("visa_number", value);
      if (isNaN(value)) {
        return _t("not_number");
      }
      return true;
    },
  },
  {
    id: "q-visa_category",
    message: _t("q_visa_category"),
    trigger: "visa_category",
  },
  {
    id: "visa_category",
    options: [
      {
        l: "Normal",
        t: "q-a_last_step",
        v: "normal",
      },
      { l: "VIP", t: "q-a_last_step", v: "vip" },
    ].map((mes) => ({
      value: mes.v,
      label: mes.l,
      trigger: mes.t,
    })),
    onOptionClick: (value) => {
      GlobalWorker.setCurrentData("visa_category", value);
    },
  },
  {
    id: "q-a_last_step",
    message: _t("a_last_step"),
    trigger: "q-aggremen_to_condition",
    hideInput: true,
  },
  {
    id: "q-aggremen_to_condition",
    message: _t("aggremen_to_condition"),
    trigger: "agree_conditions",
    hideInput: true,
  },
  {
    id: "agree_conditions",
    component: <AgreementComponent />,
    trigger: "q-avalability_date",
    waitAction: true,
    hideInput: true,
  },
  {
    id: "q-avalability_date",
    message: _t("q_avalability_date"),
    trigger: "avalability_date",
    hideInput: true,
  },
  {
    id: "avalability_date",
    component: <DateComponent meta="avalability_date" />,
    trigger: "q_identity_firstname",
    waitAction: true,
    hideInput: true,
  },

  //-------------------------infos personnel------------------

  {
    id: "q_identity_firstname",
    message: _t("q_identity_firstname"),
    trigger: "identity_firstname",
  },
  {
    id: "identity_firstname",
    user: true,
    validator: (value) => {
      GlobalWorker.setCurrentData("identity_firstname", value);
      if (value.length > 2) {
        return true;
      } else {
        return _t("invalid_identity_firstname");
      }
    },
    trigger: "q_identity_lastname",
  },
  {
    id: "q_identity_lastname",
    message: _t("q_identity_lastname"),
    trigger: "identity_lastname",
  },
  {
    id: "identity_lastname",
    user: true,
    validator: (value) => {
      GlobalWorker.setCurrentData("identity_lastname", value);
      if (value.length > 2) {
        return true;
      } else {
        return _t("invalid_identity_lastname");
      }
    },
    trigger: "q_identity_age",
  },
  {
    id: "q_identity_age",
    message: _t("q_identity_age"),
    trigger: "identity_age",
  },
  {
    id: "identity_age",
    user: true,
    validator: (value) => {
      GlobalWorker.setCurrentData("identity_age", value);
      if (isNaN(value)) {
        return takeSome([_t("not_number"), _t("invalid_identity_age")]);
      }
      return true;
    },
    trigger: "q_identity_address",
  },
  {
    id: "q_identity_address",
    message: _t("q_identity_address"),
    trigger: "identity_address",
  },
  {
    id: "identity_address",
    user: true,
    validator: (value) => {
      GlobalWorker.setCurrentData("identity_address", value);
      if (value.length > 2) {
        return true;
      } else {
        return _t("invalid_identity_address");
      }
    },
    trigger: "q_identity_sexe",
  },
  {
    id: "q_identity_sexe",
    message: _t("identity_sexe"),
    trigger: "identity_sexe",
  },
  {
    id: "identity_sexe",
    options: [_t("sex_masculin"), _t("sex_feminin")].map((mes) => ({
      value: mes,
      label: mes,
      trigger: "q_identity_profession",
    })),
    onOptionClick: (value) => {
      GlobalWorker.setCurrentData("identity_sexe", value);
    },
  },
  {
    id: "q_identity_profession",
    message: _t("q_identity_profession"),
    trigger: "identity_profession",
  },
  {
    id: "identity_profession",
    user: true,
    validator: (value) => {
      GlobalWorker.setCurrentData("identity_profession", value);

      if (value.length > 2) {
        return true;
      } else {
        return _t("invalid_identity_profession");
      }
    },
    trigger: "all-infos-ok",
  },
  //----------------------------------------------------------

  {
    id: "all-infos-ok",
    message: _t("all_infos_are_ok"),
    trigger: "recapitulatif",
  },
  {
    id: "recapitulatif",
    message: _t("there_is_recap"),
    trigger: "recap-component",
  },
  {
    id: "recap-component",
    component: <RecapComponent meta="avalability_date" />,
    trigger: "q-familial",
    waitAction: true,
    hideInput: true,
  },
  {
    id: "anything",
    message: _t("cool"),
    end: true,
  },
];
const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>
      <ChatBot
        hideBotAvatar
        floating
        width="372px"
        height="620px"
        steps={steps}
        placeholder="Saisissez ici ..."
      />
    </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
