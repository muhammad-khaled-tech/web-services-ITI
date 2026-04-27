const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const { buildSchema } = require("graphql");

const app = express();

// ─── In-memory data ───────────────────────────────────────────
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

// ─── Schema ───────────────────────────────────────────────────
const schema = buildSchema(`
  type User {
    id: ID!
    fullname: String!
    email: String!
    dob: String
  }

  type Comment {
    id: ID!
    title: String!
    content: String!
  }

  type Article {
    id: ID!
    title: String!
    content: String!
    author: User
    comments: [Comment]
  }

  type Query {
    articles: [Article]
    article(id: ID!): Article
  }

  type Mutation {
    createArticle(title: String!, content: String!, authorId: ID!): Article
  }
`);

// ─── Resolvers ────────────────────────────────────────────────
const root = {
  articles: () => {
    return articles.map((a) => ({
      ...a,
      author: users.find((u) => u.id === a.authorId),
      comments: comments.filter((c) => c.articleId === a.id),
    }));
  },

  article: ({ id }) => {
    const a = articles.find((a) => a.id === id);
    if (!a) return null;
    return {
      ...a,
      author: users.find((u) => u.id === a.authorId),
      comments: comments.filter((c) => c.articleId === a.id),
    };
  },

  createArticle: ({ title, content, authorId }) => {
    const newArticle = {
      id: String(articles.length + 1),
      title,
      content,
      authorId,
    };
    articles.push(newArticle);
    return {
      ...newArticle,
      author: users.find((u) => u.id === authorId),
      comments: [],
    };
  },
};

// ─── Mount GraphQL on Express ─────────────────────────────────
app.all("/graphql", createHandler({ schema, rootValue: root }));

app.listen(4000, () => {
  console.log("🚀 Express GraphQL server ready at http://localhost:4000/graphql");
});
