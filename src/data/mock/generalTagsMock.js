export const generalTagsMock = [
  {
    parent: { id: 10001, name: "共有先", kind: 101 },
    children: [
      { id: 10001, name: "内部で共有する", tagKindValue: 201 },
      { id: 10002, name: "保護者と共有する", tagKindValue: 202 },
      { id: 10003, name: "緊急連絡先（内部）", tagKindValue: 203 },
      { id: 10004, name: "緊急連絡先（保護者）", tagKindValue: 204 },
    ],
  },
  {
    parent: { id: 10002, name: "場所", kind: 202 },
    children: [
      { id: 10008, name: "保育室", tagKindValue: 0 },
      { id: 10009, name: "遊戯室", tagKindValue: 0 },
      { id: 10010, name: "給食室", tagKindValue: 0 },
      { id: 10011, name: "事務室", tagKindValue: 0 },
      { id: 10012, name: "トイレ", tagKindValue: 0 },
      { id: 10013, name: "廊下", tagKindValue: 0 },
      { id: 10014, name: "階段", tagKindValue: 0 },
      { id: 10015, name: "園庭", tagKindValue: 0 },
      { id: 10016, name: "園外", tagKindValue: 0 },
    ],
  },
  {
    parent: { id: 10003, name: "3つの視点", kind: 301 },
    children: [
      { id: 10017, name: "健康", tagKindValue: 0 },
      { id: 10018, name: "人間・言葉", tagKindValue: 0 },
      { id: 10019, name: "環境・表現", tagKindValue: 0 },
    ],
  },
  {
    parent: { id: 10004, name: "5領域", kind: 302 },
    children: [
      { id: 10025, name: "養護", tagKindValue: 0 },
      { id: 10020, name: "健康", tagKindValue: 0 },
      { id: 10021, name: "人間", tagKindValue: 0 },
      { id: 10022, name: "環境", tagKindValue: 0 },
      { id: 10023, name: "言葉", tagKindValue: 0 },
      { id: 10024, name: "表現", tagKindValue: 0 },
    ],
  },
  {
    parent: { id: 10005, name: "10の姿", kind: 303 },
    children: [
      { id: 10026, name: "健康", tagKindValue: 0 },
      { id: 10027, name: "自立心", tagKindValue: 0 },
      { id: 10028, name: "協同性", tagKindValue: 0 },
      { id: 10029, name: "規範", tagKindValue: 0 },
      { id: 10030, name: "社会", tagKindValue: 0 },
      { id: 10031, name: "思考力", tagKindValue: 0 },
      { id: 10032, name: "自然", tagKindValue: 0 },
      { id: 10033, name: "数・文字", tagKindValue: 0 },
      { id: 10034, name: "言葉", tagKindValue: 0 },
      { id: 10035, name: "表現", tagKindValue: 0 },
    ],
  },
  { parent: { id: 10006, name: "独自設定", kind: 104 }, children: [] },
];
