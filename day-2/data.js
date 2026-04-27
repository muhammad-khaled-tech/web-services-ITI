const users = [
  { id: "1", fullname: "Mohamed Khaled", email: "mohamed@test.com", dob: "1999-05-10" },
  { id: "2", fullname: "Ahmed Ali", email: "ahmed@test.com", dob: "2000-01-15" },
];

const articles = [
  { id: "1", title: "Intro to GraphQL", content: "GraphQL is a query language for APIs.", authorId: "1" },
  { id: "2", title: "Node.js Basics", content: "Node.js is a JavaScript runtime.", authorId: "2" },
];

const comments = [
  { id: "1", title: "Nice!", content: "Great article!", articleId: "1" },
  { id: "2", title: "Thanks", content: "Very helpful.", articleId: "1" },
  { id: "3", title: "Cool", content: "Learned a lot.", articleId: "2" },
];

module.exports = { users, articles, comments };
