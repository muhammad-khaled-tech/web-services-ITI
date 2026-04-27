const { users, articles, comments } = require("./data");

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

module.exports = root;
