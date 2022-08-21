export const setStepIndex = ({ state }, value) => {
  state.stepIndex = value;
};

export const setName = ({ state }, value) => {
  state.name = value;
};

export const setEmail = ({ state }, value) => {
  state.email = value;
};

export const phoneNumber = ({ state }, value) => {
  state.phoneNumber = value;
};

export const note = ({ state }, value) => {
  state.note = value;
};

export const setCarManufacturer = ({ state }, value) => {
  state.carManufacturer = value;
};

export const setServices = ({ state }, value) => {
  state.services = value;
};

export const setPrice = ({ state }, value) => {
  state.price = value;
  state.discountValue = value * 0.3;
  state.discountPrice = value * 0.7;
};

export const setCouponInput = ({ state }, value) => {
  state.couponInput = value;
};

export const setDiscount = ({ state }, value) => {
  state.discount = value;
};

export const setNextDisabled = ({ state }, value) => {
  state.nextDisabled = value;
};
