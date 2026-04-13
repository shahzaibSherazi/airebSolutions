import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Blog {
  _id?: string;
  title: string;
  slug?: string;
  category: string;
  author?: string;
  readTime?: string;
  intro?: string;
  contentHtml?: string;
  image: string;
  imagealt?: string;
  sections?: any[];
  relatedIds?: number[];
  status: "draft" | "published";
  publishedDate?: string;
  views?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface WhitePaper {
  _id?: string;
  title: string;
  slug?: string;
  description?: string;
  image: string;
  imageAlt?: string;
  pdfUrl: string;
  pdfFileName?: string;
  author?: string;
  category: string;
  status: "draft" | "published";
  publishedDate?: string;
  downloads?: number;
  views?: number;
  keyPoints?: string[];
  readMoreUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface ContentStore {
  // Blogs
  blogs: Blog[];
  blogloading: boolean;
  blogError: string | null;

  // White Papers
  whitePapers: WhitePaper[];
  wpLoading: boolean;
  wpError: string | null;

  // Actions
  setBlogs: (blogs: Blog[]) => void;
  setBlogLoading: (loading: boolean) => void;
  setBlogError: (error: string | null) => void;
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  removeBlog: (id: string) => void;

  setWhitePapers: (papers: WhitePaper[]) => void;
  setWpLoading: (loading: boolean) => void;
  setWpError: (error: string | null) => void;
  addWhitePaper: (paper: WhitePaper) => void;
  updateWhitePaper: (paper: WhitePaper) => void;
  removeWhitePaper: (id: string) => void;
}

export const useContentStore = create<ContentStore>()(
  devtools(
    (set) => ({
      // Initial state
      blogs: [],
      blogloading: false,
      blogError: null,
      whitePapers: [],
      wpLoading: false,
      wpError: null,

      // Blog actions
      setBlogs: (blogs) => set({ blogs }),
      setBlogLoading: (loading) => set({ blogloading: loading }),
      setBlogError: (error) => set({ blogError: error }),

      addBlog: (blog) =>
        set((state) => ({
          blogs: [blog, ...state.blogs],
        })),

      updateBlog: (updatedBlog) =>
        set((state) => ({
          blogs: state.blogs.map((blog) =>
            blog._id === updatedBlog._id ? updatedBlog : blog,
          ),
        })),

      removeBlog: (id) =>
        set((state) => ({
          blogs: state.blogs.filter((blog) => blog._id !== id),
        })),

      // White Paper actions
      setWhitePapers: (papers) => set({ whitePapers: papers }),
      setWpLoading: (loading) => set({ wpLoading: loading }),
      setWpError: (error) => set({ wpError: error }),

      addWhitePaper: (paper) =>
        set((state) => ({
          whitePapers: [paper, ...state.whitePapers],
        })),

      updateWhitePaper: (updatedPaper) =>
        set((state) => ({
          whitePapers: state.whitePapers.map((paper) =>
            paper._id === updatedPaper._id ? updatedPaper : paper,
          ),
        })),

      removeWhitePaper: (id) =>
        set((state) => ({
          whitePapers: state.whitePapers.filter((paper) => paper._id !== id),
        })),
    }),
    { name: "ContentStore" },
  ),
);
