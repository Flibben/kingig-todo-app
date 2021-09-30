const todoList = [
    {
      id: 1,
      title: "Fett skön titel",
      body: "Work on the sköna in the life",
      lastModified: "2021-09-24",
    },
    {
      id: 2,
      title: "Gymövningar",
      body: "biceps, triceps, chest",
      lastModified: "2021-09-23",
    },
    {
      id: 3,
      title: "Gainfeed",
      body: "only aminoacids for my body",
      lastModified: "2021-09-21",
    },
  ];

  const getAllTodos = (req, res) => {
      res.json(todoList)
  }

  module.exports = getAllTodos;
