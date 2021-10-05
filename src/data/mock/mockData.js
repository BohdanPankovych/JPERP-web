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
    title: "Kids",
    classes: [
      {
        class: "Class1",
        kids: ["kid1","kid2","kid3","kid4",]
      },
      {
        class: "Class2",
        kids: ["kid11","kid12","kid13","kid14",]
      },
      {
        class: "Class3",
        kids: ["kid12","kid22","kid32","kid42",]
      },
    ],
  },
  sharedPageClass: {
    title: "Class",
    tags: ["Class1", "Class2", "Class3", "Class4"],
  },
  sharedPage: [
    {
      title: "Place",
      tags: ["tag", "tag", "tag", "tag", "tag", "tag"],
    },
    {
      title: "3 Views",
      tags: ["tag", "tag", "tag", "tag", "tag", "tag"],
    },
    {
      title: "5 segments",
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
      img: eventImg,
      title: '橋本凛',
      tagList: ['text','texttexttexttext','text'],
      description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
      date: '2018',
      month: ''
    },
    {
      id: 2,
      img: eventImg,
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
      img: eventImg,
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
