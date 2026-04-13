import apiClient from "./client";
import { WhitePaper } from "@/store/contentStore";

interface GetWhitePapersResponse {
  success: boolean;
  whitePapers: WhitePaper[];
  total: number;
  pages: number;
  currentPage: number;
  count: number;
}

interface GetWhitePaperResponse {
  success: boolean;
  whitePaper: WhitePaper;
}

interface CreateWhitePaperResponse {
  success: boolean;
  message: string;
  whitePaper: WhitePaper;
}

export const whitePaperAPI = {
  // Get all white papers with pagination and filtering
  getWhitePapers: async (
    page: number = 1,
    limit: number = 10,
    status: string = "all",
    category?: string,
    search?: string,
  ): Promise<GetWhitePapersResponse> => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(status !== "all" && { status }),
      ...(category && { category }),
      ...(search && { search }),
    });

    const response = await apiClient.get(`/whitepapers?${params}`);
    return response.data;
  },

  // Get single white paper
  getWhitePaper: async (id: string): Promise<GetWhitePaperResponse> => {
    const response = await apiClient.get(`/whitepapers/${id}`);
    return response.data;
  },

  // Create new white paper
  createWhitePaper: async (
    data: WhitePaper,
  ): Promise<CreateWhitePaperResponse> => {
    const response = await apiClient.post("/whitepapers", data);
    return response.data;
  },

  // Update white paper
  updateWhitePaper: async (
    id: string,
    data: WhitePaper,
  ): Promise<CreateWhitePaperResponse> => {
    const response = await apiClient.put(`/whitepapers/${id}`, data);
    return response.data;
  },

  // Delete white paper
  deleteWhitePaper: async (
    id: string,
  ): Promise<{ success: boolean; message: string }> => {
    const response = await apiClient.delete(`/whitepapers/${id}`);
    return response.data;
  },

  // Get categories
  getCategories: async (): Promise<{
    success: boolean;
    categories: string[];
  }> => {
    const response = await apiClient.get("/whitepapers/admin/categories");
    return response.data;
  },

  // Track download
  trackDownload: async (
    id: string,
  ): Promise<{ success: boolean; message: string }> => {
    const response = await apiClient.post(`/whitepapers/${id}/download`);
    return response.data;
  },
};
