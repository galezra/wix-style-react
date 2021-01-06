import inputWithOptionsDriverFactory from '../InputWithOptions/InputWithOptions.driver';

const multiSelectCheckboxDriverFactory = ({ element, component }) => {
  const {
    driver,
    inputDriver,
    dropdownLayoutDriver,
  } = inputWithOptionsDriverFactory({ element });
  const multiSelectCheckboxDriver = Object.assign(driver, {
    getNumOfLabels() {
      return this.getLabels().length;
    },
    getLabels: () => {
      return inputDriver.getValue().split(component.props.delimiter);
    },
    getLabelAt(index) {
      return this.getLabels()[index];
    },
  });

  return {
    driver: multiSelectCheckboxDriver,
    inputDriver,
    dropdownLayoutDriver,
  };
};

export default multiSelectCheckboxDriverFactory;
