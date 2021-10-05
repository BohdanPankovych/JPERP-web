import mockImg from "./mockImg.jpg";
import eventImg from "./eventImg.jpg"
import mockImg2 from './mockImg2.jpg'
import vert from './vert.jpg'
import casinoBL from './casinoBL.jpg'

const mock = {
  reportPage: [
    {
      img: mockImg,
      text: "すテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    },
    {
      img: mockImg2,
      text: "ますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    },
    {
      img: casinoBL,
      text: "ますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    },
    {
      img: vert,
      text: "ますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    },
  ],
  creators: [
    {
      label: "橋本凛",
      value: "橋本凛",
    },
    {
      label: "春野サクラ",
      value: "春野サクラ",
    },
    {
      label: "カヌー優子",
      value: "カヌー優子",
    },
  ],
  sharedPageChildren: {
    title: "Child",
    classes: [
      {
        class: "Class1",
        kids: ["佐藤","鈴木","高橋","田中",]
      },
      {
        class: "Class2",
        kids: ["伊藤","山本","中村","小林",]
      },
      {
        class: "Class3",
        kids: ["加藤","吉田","山田","佐々木",]
      },
    ],
  },
  sharedPageClass: {
    title: "クラス",
    tags: ["Class1", "Class2", "Class3"],
  },
  sharedPage: [
    {
      title: "場所",
      tags: ["tag", "tag", "tag", "tag", "tag", "tag"],
    },
    {
      title: "3 Views",
      tags: ["tag", "tag", "tag", "tag", "tag", "tag"],
    },
    {
      title: "5 領域",
      tags: ["tag", "tag", "tag", "tag", "tag", "tag"],
    },
    {
      title: "10 Appearance",
      tags: ["tag", "tag", "tag", "tag", "tag", "tag"],
    },
  ],
  eventsList: [
    {
      id: 1,
      img: vert,
      title: '橋本凛',
      tagList: ['text','texttexttexttext','text'],
      description: 'ますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
      date: '2018',
      month: ''
    },
    {
      id: 2,
      img: casinoBL,
      title: '',
      tagList: ['text','text','text'],
      description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
      date: '2017',
      month: 'January'
    },
    {
      id: 3,
      img: eventImg,
      title: '',
      tagList: ['2020','April','text'],
      description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
      date: '2020',
      month: 'April'
    },
    {
      id: 4,
      img: mockImg2,
      title: '',
      tagList: ['text','text','text'],
      description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
      date: '2019',
      month: 'March'
    },
    {
      id: 5,
      img: eventImg,
      title: '',
      tagList: ['text','text','text'],
      description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
      date: '2019',
      month: 'January'
    }
  ]
};

export default mock;
