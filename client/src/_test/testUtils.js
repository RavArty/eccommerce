export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[className="${val}"]`);
};
