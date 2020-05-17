const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Cache = require("../services/cache/cache");

const Blog = mongoose.model("Blog");

module.exports = (app) => {
  app.get("/api/blogs/:id", requireLogin, async (req, res) => {
    const blog = await Blog.findOne({
      _user: req.user.id,
      _id: req.params.id,
    });

    res.send(blog);
  });

  app.get("/api/blogs", async (req, res) => {
    const cachedBlogs = await Blog.find({}).cache({ expiration: 10 });

    res.json(cachedBlogs);
  });

  app.post("/api/blogs", async (req, res) => {
    const { title, content } = req.body;

    const blog = new Blog({
      title,
      content,
    });

    Cache.forget(JSON.stringify({ collection: "blogs" }));

    try {
      await blog.save();

      res.send(blog);
    } catch (err) {
      res.send(400, err);
    }
  });
};
