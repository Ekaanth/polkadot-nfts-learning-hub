/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'nfts/polkadot-nfts-101',
    'nfts/about-nfts-pallet/design-and-core-features',
    'nfts/about-nfts-pallet/settings-and-roles',
    'nfts/about-nfts-pallet/distribution-and-marketplaces',
    'nfts/about-nfts-pallet/use-cases',
    'nfts/for-developers',
    {
      type: 'category',
      label: 'Creating Collections',
      items: ['nfts/creating-collections/minting-items', ],
    },
  ],
  videoSidebar: [
    'nfts/videos-for-users',
    'nfts/videos-for-devs',
  ]

};



