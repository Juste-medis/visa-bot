const instancePath = {
  avalability_date: "",

  identity_firstname: "",
  identity_lastname: "",
  identity_age: "",
  identity_address: "",
  identity_sexe: "",
  identity_profession: "",

  trip_date: "",
  user_mail: "",
  demand_type: "",
  numbers_of_person: 1,
  what_center: "",
  first_time: "",
  visa_category: "",
  visa_number: 2,
  agree_conditions: false,
};

const GlobalWorker = {
  userLanguage: "fr",
  instances: [instancePath],
  stage: 0,
  currentStage: 0,
  incrementStage: () => {
    GlobalWorker.instances.push(instancePath);
  },
  setInstanceStage: (i) => {
    GlobalWorker.currentStage = i;
  },
  setCurrentData: (key, value) => {
    GlobalWorker.instances[GlobalWorker.currentStage][key] = value;
    console.log(GlobalWorker.instances);
  },
};

export default GlobalWorker;
