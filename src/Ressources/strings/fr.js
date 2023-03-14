/* eslint-disable no-undef */

import { takeSome } from "../../Helpers/Utils";

const strin_fr = {
  SearchesDevis: "Avis de recherche",
  welcome_message:
    "Bonjour et Bienvenu . je suis Bobless le chatbot de votre plateforme, organisez vos prise de rendez-vous depuis le site blss jusqu’à l’obtention de votre lettre de rendez-vous",
  let_begin_identify: "Commençons par vous identifier",
  what_your_mail:
    "Jaurai besoins de votre addresse e-mail. Pouvez-vous me fournir s'il vous plaît ?",
  invalid_mail: "Addresse e-mail non accepable",
  what_your_pass: "J'aurai besoins aussi de votre mot de passe:",
  invalid_pass: "Mot de passe non acceptable",
  let_me_verify: "Super. je vérifie rapidement ...",
  loginned_as: "Connecté en tant que ",
  wrong_pass_or_mail: "Addresse email ou mot de passe incorrect !",
  enter_email: "Addresse email !",
  enter_pass: "Entrez votre mot de passe ",
  field_missed: "Un ou plusieurs champs sont manquants !",
  field_invalid: "Un ou plusieurs ne sont pas acceptable !",
  is_it_familial:
    "comptez-vous effectuer ce séjour avec des membres de votre famille ?",
  provide_families:
    "Si vous comptez effectuer ce séjour avec des membres de votre famille, veuillez indiquer :",
  single_demand: "Pour moi seul",
  family_demand: "Non, je suis en famille",
  how_many_person:
    "D'accord . Si vous êtes en famille, Sans vous compter, combien de personne envisagez-vous la demande ?",
  q_what_center:
    "Dans quel centre pouvez-vous rendre pour votre prise de rendez-vous ?",
  q_what_date: "Veillez m'indiquer à quelle date vous prévoyeze voyager .",
  q_already_done: "Avez-vous déjà eu à faire votre visa dans le passé ?",
  my_first_time: "Non, ç'est ma première fois",
  not_my_first_time: "Oui, J'ai un visa",
  q_visa_number: "Quel est votre numéro de visa ?",
  q_avalability_date: "Veuillez choisir le jour de votre rendez-vous",
  not_number: "Veillez entrer un numéro valide ",
  q_visa_category: "Pour quelle catégorie de visa optez-vous ?",
  a_last_step: "Une dernnière étape",
  aggremen_to_condition: "Agréement des conditions ",
  i_accept_conditions: "J'accepte les conditions ",
  continue: "Continuer",
  read: "lire",
  all_infos_are_ok:
    "Enfin ! j'ai toutes les informations nécessaires et votre demande est prête à être envoyée .",
  there_is_recap: "Je vous fait un réccapitulatif de votre demande: ",
  q_identity_firstname: "Comment vous-appelle t-on ? (votre prénom) ",
  q_identity_lastname: "Quel est votre nom ?",
  q_identity_age: "OK, puis-je avoir votre âge s'il vous plaît ?",
  q_identity_address: "Quelle est votre addresse actuelle ?",
  q_identity_sexe:
    "Ne vous sentez pas gêné mais j'ai aussi besoin de connaître votre sexe :",
  q_identity_profession: takeSome(["Quelle profession excercez-vous ?"]),
  non_applicable: takeSome(["Non applicable pour cette étape"]),

  invalid_identity_firstname: takeSome([
    "Prénom non acceptable",
    "Veillez me fournir une bonne valeur svp",
    "Valeur mal renseignée",
  ]),
  invalid_identity_lastname: takeSome([
    "Nom non acceptable",
    "Veillez me fournir une bonne valeur svp",
    "Valeur mal renseignée",
  ]),
  invalid_identity_age: takeSome([
    "age non acceptable",
    "Veillez me fournir une bonne valeur svp",
    "Valeur mal renseignée",
  ]),
  invalid_identity_address: takeSome([
    "Adresse non acceptable",
    "Veillez me fournir une bonne valeur svp",
    "Valeur mal renseignée",
    "Avez-vous renseigné une bonne addresse ?",
  ]),
  invalid_identity_sexe: takeSome([
    "Sexe non acceptable",
    "Veillez me fournir une bonne valeur svp",
    "Valeur mal renseignée",
    "Veillez choisir un sexe",
  ]),
  invalid_identity_profession: takeSome([
    "Profession non acceptable",
    "Veillez me fournir une bonne valeur svp",
    "Valeur mal renseignée",
    "Avez-vous renseigné une bonne profession ?",
  ]),
};
// q_identity_profession:takeSome([]) ,

export default strin_fr;
