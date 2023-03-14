/* eslint-disable no-unused-vars */
import { generateRandom, randomDate } from "../Helpers/Utils";

let FakeApi = {
  GetMessages: async function (setdada) {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success:
            "Si vous avez saisit la bonne adresse mail, des instructions vous sont envoyées dans votre boîte Mail.",
        });
      }, 3000);
    });
    return await result;
  },
  AuthSignin: async function (setdada) {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user_mail: setdada.user_mail,
          password: setdada.password,
          mail: setdada.mail,
          error: Math.random() > 0.5 ? true : false,
          roles: [],
          id: 2,

          // notifications: Array.apply(null, Array(15)).map(function(x, i) {
          //   return {
          //     id: i + 1,
          //     description: descriptions[generateRandom(descriptions.length)],
          //     date_envoi: randomDate(new Date(2021, 0, 1), new Date()),
          //     date_lecture: randomDate(new Date(2021, 0, 1), new Date()),
          //     expediteur: collecteurs[generateRandom(collecteurs.length)],
          //   };
          // }),
        });
      }, 5000);
    });
    return await result;
  },
  UpdateData: async function (setdada) {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          sucess_Update: "Modification réussi !",
          prenom: "Mathildda",
          nom: "Martica",
          address: "Abomey Calavi",
          contact: "94632954",
          adminId: 50,

          ficheRemplies: 68,
          ficheRejetes: 80,
          nbrBeneficiaire: 8,
          ficheAttente: 15,
          new_messages: 20,
          new_notifications: 15,
        });
      }, 3000);
    });
    return await result;
  },
  Signout: async function (setdada) {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: 1,
        });
      }, 3000);
    });
    return await result;
  },
  CheckAuth: async function (setdada, tk) {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          saved: 5,
          checked: 15,
          rejected: 20,
          earned: 30,
        });
      }, 3000);
    });
    return await result;
  },
  GetUserData: async function (setdada) {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          saved: 5,
          checked: 15,
          rejected: 20,
          earned: 30,
          name: "Mathildda Martica",
        });
      }, 3000);
    });
    return await result;
  },
};
export default FakeApi;
