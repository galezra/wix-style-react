import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';

export const skeletonGroupDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /** return array of all children's skin */
    hasChildernSkin: async skin => {
      const allSkins = await base
        .$$(`[data-skin]`)
        .map(async chunkElement => await chunkElement.attr('data-skin'));

      return allSkins.every(s => s === skin);
    },
  };
};
