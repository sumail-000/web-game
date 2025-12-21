// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

// API Response types
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  errors?: any[];
}

// Auth types
interface SignupData {
  username: string;
  password: string;
  month: string;
  day: string;
  year: string;
  gender?: string;
}

interface LoginData {
  username: string;
  password: string;
}

interface AuthResponse {
  user: {
    id: string;
    username: string;
    isVerified: boolean;
    createdAt: string;
  };
  accessToken: string;
  refreshToken: string;
}

// Helper function to handle API calls
async function apiCall<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API call error:', error);
    return {
      success: false,
      error: 'Network error. Please try again.',
    };
  }
}

// Auth API
export const authApi = {
  signup: async (data: SignupData): Promise<ApiResponse<AuthResponse>> => {
    return apiCall<AuthResponse>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  login: async (data: LoginData): Promise<ApiResponse<AuthResponse>> => {
    return apiCall<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  logout: async (token: string): Promise<ApiResponse> => {
    return apiCall('/auth/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  refreshToken: async (refreshToken: string): Promise<ApiResponse<AuthResponse>> => {
    return apiCall<AuthResponse>('/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });
  },

  verifyEmail: async (token: string): Promise<ApiResponse> => {
    return apiCall(`/auth/verify-email/${token}`, {
      method: 'GET',
    });
  },
};

// Storage helpers for tokens
export const storage = {
  setTokens: (accessToken: string, refreshToken: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    }
  },

  getAccessToken: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('accessToken');
    }
    return null;
  },

  getRefreshToken: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('refreshToken');
    }
    return null;
  },

  clearTokens: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  },

  setUser: (user: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  },

  getUser: (): any | null => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  },

  clearUser: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
  },
};

