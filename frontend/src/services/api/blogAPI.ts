import apiClient from "./client";
import { Blog } from "@/store/contentStore";

interface GetBlogsResponse {
  success: boolean;
  blogs: Blog[];
  total: number;
  pages: number;
  currentPage: number;
  count: number;
}

interface GetBlogResponse {
  success: boolean;
  blog: Blog;
}

interface CreateBlogResponse {
  success: boolean;
  message: string;
  blog: Blog;
}

export const blogAPI = {
  // Get all blogs with pagination and filtering
  getBlogs: async (
    page: number = 1,
    limit: number = 10,
    status: string = "all",
    category?: string,
    search?: string,
  ): Promise<GetBlogsResponse> => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(status !== "all" && { status }),
      ...(category && { category }),
      ...(search && { search }),
    });

    const response = await apiClient.get(`/blogs?${params}`);
    return response.data;
  },

  // Get single blog by ID or slug
  getBlog: async (id: string): Promise<GetBlogResponse> => {
    const response = await apiClient.get(`/blogs/${id}`);
    return response.data;
  },

  // Create new blog
  createBlog: async (data: Blog): Promise<CreateBlogResponse> => {
    const response = await apiClient.post("/blogs", data);
    return response.data;
  },

  // Update blog
  updateBlog: async (id: string, data: Blog): Promise<CreateBlogResponse> => {
    const response = await apiClient.put(`/blogs/${id}`, data);
    return response.data;
  },

  // Delete blog
  deleteBlog: async (
    id: string,
  ): Promise<{ success: boolean; message: string }> => {
    const response = await apiClient.delete(`/blogs/${id}`);
    return response.data;
  },

  // Get categories
  getCategories: async (): Promise<{
    success: boolean;
    categories: string[];
  }> => {
    const response = await apiClient.get("/blogs/categories");
    return response.data;
  },
};
