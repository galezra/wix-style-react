export const WithDeprecationWarning = driver => {
  if (console && !process.env.MUTE_WSR_LEGACY_DRIVERS_WARNING) {
    // eslint-disable-next-line no-console
    console.warn(`
    Warning! ${driver.name} is deprecated and will be removed.
    For more information please refer to https://github.com/wix/wix-style-react/blob/master/docs/usage/testing.md
    `);
  }

  return driver;
};
