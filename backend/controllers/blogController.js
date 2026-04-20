import Blog from "../models/Blog.js";

// @desc Get all blogs (with pagination, filtering, search)
// @route GET /api/blogs
// @access Public
export const getBlogs = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status = "published",
      category,
      search,
    } = req.query;

    let filter = { isDeleted: false };

    if (status) {
      filter.status = status;
    }

    if (category) {
      filter.category = category;
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { intro: { $regex: search, $options: "i" } },
      ];
    }

    const blogs = await Blog.find(filter)
      .sort({ publishedDate: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select("-sections")
      .exec();

    const total = await Blog.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: blogs.length,
      total,
      pages: Math.ceil(total / limit),
      currentPage: page,
      blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Get single blog by ID or slug
// @route GET /api/blogs/:id
// @access Public
export const getBlog = async (req, res) => {
  try {
    const { id } = req.params;

    let blog;

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      blog = await Blog.findById(id);
    } else {
      blog = await Blog.findOne({ slug: id });
    }

    if (!blog || blog.isDeleted) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Create new blog
// @route POST /api/blogs
// @access Private (editor/admin)
export const createBlog = async (req, res) => {
  try {
    const {
      title,
      category,
      author,
      readTime,
      intro,
      contentHtml,
      image,
      sections,
      relatedIds,
      status,
    } = req.body;

    // Validation
    if (!title || !category || !image) {
      return res.status(400).json({
        success: false,
        message: "Please provide title, category, and image",
      });
    }

    const blog = await Blog.create({
      title,
      category,
      author,
      readTime,
      intro,
      contentHtml,
      image,
      sections,
      relatedIds,
      status,
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Update blog
// @route PUT /api/blogs/:id
// @access Private (editor/admin)
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      category,
      author,
      readTime,
      intro,
      contentHtml,
      image,
      sections,
      relatedIds,
      status,
    } = req.body;

    let blog = await Blog.findById(id);

    if (!blog || blog.isDeleted) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // Update fields
    if (title) blog.title = title;
    if (category) blog.category = category;
    if (author) blog.author = author;
    if (readTime) blog.readTime = readTime;
    if (intro) blog.intro = intro;
    if (image) blog.image = image;
    if (contentHtml !== undefined) blog.contentHtml = contentHtml;
    if (sections) blog.sections = sections;
    if (relatedIds !== undefined) blog.relatedIds = relatedIds;
    if (status) blog.status = status;

    blog = await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Delete blog (soft delete)
// @route DELETE /api/blogs/:id
// @access Private (editor/admin)
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    blog.isDeleted = true;
    await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Get all categories
// @route GET /api/blogs/categories
// @access Public
export const getCategories = async (req, res) => {
  try {
    const categories = await Blog.distinct("category");
    res.status(200).json({
      success: true,
      categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
