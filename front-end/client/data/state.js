state = {
  grades: {
    sublist:[
      {
        contextList:[
          {context: "", url: ""},
          {},
          ...{}
        ]
      }
    ],
    update: [
      [{sub: "", url: "", date: ""},{},...{}],
      [{},{},...{}],
      [{},{},...{}]
    ],
    img: ["", "", ""]
  },
  select: {
    Types: [{name: "", url: "", select: false},{},...{}],
    Points: [{level: 0, name: "", url: "", pointList: [], select: false},{},...{}],
    Charaction: [{name: "", url: "", select: false},{},...{}],
    Difficulty: [{name: "", url: "", select: false},{},...{}]
  },
  question: {
    context: [{id: 1, qurl: "", aurl: "", expanded: false},{},...{}],
    pageNum: 1,
    pages: 1,
    userChosen: [{id: 1, type: ""},{},...{}],
    userCollection: [...id]
  },
  paper: {
    course: '',
    type: '',
    context:[{id: 1, qurl: "", aurl: "", expanded: false, type: ""},{},...{}]
  }
}