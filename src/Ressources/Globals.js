/* eslint-disable no-undef */

import GlobalWorker from "./GlobalWorker";
import string_en from "./strings/en";
import strin_fr from "./strings/fr";

let kkiapay1 = "c72be4b05aaf11e993f57984be4e7f54",
  kkiapay2 = "03be48a0e36b11eb96cbffe4cc632e8e";
var location = document.location;

const Bstrings = { fr: strin_fr, en: string_en };

const Globals = {
  kkiapay: location?.href.includes("sedami") ? kkiapay1 : kkiapay2,
  USER_TYPE: 1,
  load_init: () => {},
  PROCESS_STATE: {},
  CONSTANT: { CoursePageSize: 20, UsersPageSize: 60 },
  Matchers: {
    skills: ["tous les niveaux", "facile", "intermediaire", "dificile"],
    durar: ["jour (s)", "heure (s)"],
    visibility: [
      { value: "publish", label: "Publier", show: "Disponible" },
      { value: "hide", label: "Cacher", show: "Caché" },
      { value: "tocome", label: "A venir", show: "A Venir" },
      { value: "approuving", label: "A Analyser", show: "En Attente" },
      { value: "rejected", label: "rejeté", show: "A revoir" },
    ],
    Uservisibility: [
      { value: "enable", label: "Activer", show: "En ligne" },
      { value: "disable", label: "Desactiver", show: "Désactivé" },
    ],
    UserStatus: ["Etudiant", "Etudiant", "Formateur", "Administrateur"],
  },
  PROFIL_INFO: {},
  worker: {
    selectedcourseID: 0,
    selectedLessonID: 0,
    selectedcourse: "",
    setcitadel: () => {},
    reponarr: [],
    sale: {},
  },
  FONTS: {},
  COLORS: {
    primary: "#96000f",
    secondary: "#bf8f2c",
    accent: "#50c878",
    background: "#f7f9fb",
    co_gris: "#dbe3de",
    pur_green: "#445500",
    light_green: "#d7f4e3",
    light_blue: "#29B2FE",
    black: "#000000",
    white: "#ffffff",
    red: "#F44336",
    pink: "#E91E63",
    purple: "#9C27B0",
    deep_purple: "#673AB7",
    indigo: "#3F51B5",
    blue: "#2196F3",
    cyan: "#00BCD4",
    teal: "#009688",
    green: "#4CAF50",
    lime: "#CDDC39",
    yellow: "#FFEB3B",
    yellow_pure: "#F4C150",
    yellow_pure2: "#be5a0e",
    yellow_pure3: "#eb8a2f",
    amber: "#FFC107",
    orange: "#FF9800",
    deep_orange: "#FF5722",
    brown: "#795548",
    grey: "#9E9E9E",
    blue_grey: "#607D8B",
    light_grey: "#eceff5",
    blue_dark: "#23233cff",
    cerulean: "#007791",
    arsenic: "#393f4a",
    arsenic2: "#535e72ff",
  },
  COOKIE_DURATIONN: {
    TOKEN_AUTHENTICATE: 5184000000,
  },
  STRINGS: {
    SearchesDevis: "Avis de recherche",
    Mylessons: "Mes Leçons",
    Ocurred_error: "An error occured",
    small_pass: "Mot de passe trop court (6 lettres minimum)",
    small_username: "nom d'utilisateur trop court (6 lettres minimum) ",
    long_username: "nom d'utilisateur trop long (50 lettres maximun)",
    recquired_username: "nom d'utilisateur recquis",
    small_firstname: "Nom trop court (6 lettres minimum) ",
    small_lastname: "Prénom trop court (6 lettres minimum) ",
    long_firstname: "Nom trop long (50 lettres maximun)",
    long_lastname: "Prénom trop long (50 lettres maximun)",
    not_url: "addresse url invalide",

    recquired_pass: "Mot de passe recquis",
    already_taken_username:
      "nom d'utilisateur indisponible. choisissez un autre ",
    unexisted_user: "utilisateur introuvable .",
    already_taken_mail: "addresse e-mail indisponible. choisissez un autre ",
    succesfully_signup: "Inscription reuissi . redirection à la page d'accueil",
    succesfully_signin: "Connexion reuissi . redirection à la page d'accueil",
    succesfully_signout:
      "Déconnexion reuissie . redirection à la page d'accueil",
    constrain_title: `titre du cour 200 caractères maximum `,
    short_description: `une courte description du cour, soyez bref `,
    course_description: `description du cour `,
    constrain_video: `type mp4 ( < 6Mo) `,
    constrain_video_section: `type mp4 ( < 100Mo) `,
    constrain_cover_course: `fichier type png,jpg de format 400x500 px ( <= 5Mo)`,
    constrain_cover_profil: `fichier type png,jpg de format 604x604 px ( <= 5Mo)`,
    sucess_Update: `Mise à jour réuissi`,
    sucess_suppress: `Suppression éfectuée`,
    sucess_AddOffer: `Votre nouvelle offre a bien été ajoutée`,
    sucess_ModifyOffer: `Votre offre a bien été modifiée`,
    sucess_Notification_sended: `Notification Partagée`,
    sucess_Message_sended: `Message Envoyé`,
    constrain_url: `lien http`,
    constrain_string_size: (li, si) =>
      `Doit respecter la contrainte de taille des caractères : [${li} ${si}]`,
  },
};
export default Globals;

export function _t(key) {
  if (!Bstrings[GlobalWorker.userLanguage][key]) return key;
  return Bstrings[GlobalWorker.userLanguage][key];
}
