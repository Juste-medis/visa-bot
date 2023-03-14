/* eslint-disable no-undef */

const Globals = {
    uri1:
      document.location.hostname === "localhost"
        ? "https://localhost:2857"
        : " https://192.168.1.119:2857",
    uri3: "https://141.94.16.251",
  },
  expGloal = {
    uri1: document.location.href.includes("141.94")
      ? Globals.uri3
      : Globals.uri1,
  };
export default expGloal;
