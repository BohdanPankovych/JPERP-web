import { TypeButton } from '../constants/ButtonTypeColor';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';


const mock = {
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
   destination: {
     name: "共有先",
     items: [{
      text: "内部で共有する",
      type: TypeButton.SHARE,
    },
    {
        text: "保護者と共有する",
        type: TypeButton.SHARE,
    },
    {
        text: "緊急連絡先（内部）",
        type: TypeButton.EMERGENCY,
    },
    {
        text: "緊急連絡先（保護者）",
        type: TypeButton.EMERGENCY,
    },]
   },
  sharedPageChildren: {
    title: "子供",
    classes: [
      {
        class: "ひよこ (0)",
        kids: ["佐藤","鈴木","高橋","田中	",]
      },
      {
        class: "あひる (1)",
        kids: ["伊藤","山本","中村","小林",]
      },
      {
        class: "ひばり (2)",
        kids: ["加藤","吉田","山田","佐々木",]
      },
    ],
  },
  sharedPageClass: {
    title: "クラス",
    tags: ["ひよこ (0)", "あひる (1)", "ひばり (2)"],
  },
  sharedPage: [
    {
      title: "場所",
      tags: ["保育室", "遊戯室", "給食室", "事務室", "トイレ", "廊下", "階段", "園庭", "園外"],
    },
    {
      title: "3 つの視点",
      tags: ["健康", "人間・言葉", "環境・表現"],
    },
    {
      title: "5 領域",
      tags: ["養護", "健康", "人間", "環境", "言葉", "表現"],
    },
    {
      title: "10 の姿",
      tags: ["健康", "自立心", "協同性", "規範", "社会", "思考力", "自然", "数・文字", "言葉", "表現"],
    },
  ],
  eventsList: [
    {
      id: 1,
      img: img1,
      title: '橋本凛',
      tagList: ['2018','いくつかのテキスト','文章'],
      description: 'ますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
      date: '2018',
      month: 'January',
      day: '4',
      group: '2C',
    },
    {
      id: 2,
      img: img2,
      title: '',
      tagList: ['2017','一月','文章'],
      description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
      date: '2018',
      month: 'January',
      day: '6',
      group: '2C',
    },
    {
      id: 3,
      img: img3,
      title: '',
      tagList: ['2020','四月','文章'],
      description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
      date: '2020',
      month: 'April',
      day: '3',
      group: '4C',
    },
    {
      id: 4,
      img: img4,
      title: '',
      tagList: ['三月','2019','文章', '文章'],
      description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
      date: '2020',
      month: 'April',
      day: '2',
      group: '4C',
    },
    {
      id: 5,
      img: img5,
      title: '',
      tagList: ['一月','2019','文章'],
      description: 'テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります',
      date: '2019',
      month: 'January',
      day: '10',
      group: '4C',
    }
  ]
};

export default mock;
