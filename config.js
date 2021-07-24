// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: '',
  imageBackground: false,
  openInNewTab: true,

  // Greetings
  greetingMorning: 'おはよう',
  greetingAfternoon: 'こんにちは',
  greetingEvening: 'こんばんは',
  greetingNight: 'おやすみ',

//   Weather
//   weatherKey: 'InsertYourAPIKeyHere123456',
//   weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
//   weatherUnit: 'F',
//   weatherLatitude: '37.774929',
//   weatherLongitude: '-122.419418',
  

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/mxwlr',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'at-sign',
      link: 'https://mail.protonmail.com/',
    },
    {
      id: '3',
      name: 'Wallpapers',
      icon: 'image',
      link: 'https://wallhaven.cc/',
    },
    {
      id: '4',
      name: 'Arch Wiki',
      icon: 'terminal',
      link: 'https://wiki.archlinux.org/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'bookmark',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'youtube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'rss',
//   secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'Feedly',
        link: 'https://feedly.com/',
      },
      {
        name: 'Twitter',
        link: 'https://tweetdeck.twitter.com/',
      },
      {
        name: '',
        link: '',
      },
      {
        name: '',
        link: '',
      },
    ],
    secondList: [
      {
        name: 'Linkedin',
        link: 'https://linkedin.com/',
      },
      {
        name: 'Figma',
        link: 'https://figma.com/',
      },
      {
        name: 'Dribbble',
        link: 'https://dribbble.com',
      },
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
    ],
  },
};
