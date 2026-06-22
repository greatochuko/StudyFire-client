import React, { createContext, useContext, useState, useEffect } from "react";

// Define the shape of your User object including billing allocations
interface User {
  id: string;
  email: string;
  fullName?: string;
  createdAt: string;
  // Dynamic billing attributes bound to user runtime state
  planTier: PlanTier;
  autoRenew: boolean;
  expiresAt?: string; // ISO string or specific calendar termination bounds
  stripeCustomerId?: string;
}

export type PlanTier = "free" | "pro";

// Define the interface for the Auth Context state and actions
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<void>;
  signup: (name: string, email: string, pass: string) => Promise<void>;
  updateSubscriptionState: (
    newTier: User["planTier"],
    autoRenew: boolean,
    expiresAt?: string,
  ) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check local session state or token availability on initial load
  useEffect(() => {
    const initializeAuth = async (): Promise<void> => {
      try {
        const storedUser = localStorage.getItem("sf_user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error(
          "Failed to restore authenticating baseline session:",
          error,
        );
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Handle traditional Login operations
  const login = async (email: string, _: string): Promise<void> => {
    setIsLoading(true);
    try {
      // Mocking API delay execution pipeline
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockUser: User = {
        id: "usr_" + Math.random().toString(36).substring(2, 11),
        email,
        fullName: "Alex Morgan",
        createdAt: new Date().toISOString(),
        planTier: "free", // Defaults to standard allocation framework
        autoRenew: false,
        stripeCustomerId:
          "cus_mock_" + Math.random().toString(36).substring(2, 8),
      };

      localStorage.setItem("sf_user", JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error("Login verification node failure:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Account Signup creation operations
  const signup = async (
    fullName: string,
    email: string,
    _: string,
  ): Promise<void> => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const mockUser: User = {
        id: "usr_" + Math.random().toString(36).substring(2, 11),
        email,
        fullName,
        createdAt: new Date().toISOString(),
        planTier: "free",
        autoRenew: false,
        stripeCustomerId:
          "cus_mock_" + Math.random().toString(36).substring(2, 8),
      };

      localStorage.setItem("sf_user", JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error("Account provision routine failure:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Replaces updatePlanTier to handle complex subscription lifecycle updates explicitly
  const updateSubscriptionState = (
    newTier: User["planTier"],
    autoRenew: boolean,
    expiresAt?: string,
  ) => {
    if (!user) return;
    const updatedUser: User = {
      ...user,
      planTier: newTier,
      autoRenew,
      expiresAt,
    };
    localStorage.setItem("sf_user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  // Handle system logouts and storage flushes
  const logout = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      localStorage.removeItem("sf_user");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        updateSubscriptionState,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access your custom-wrapped isolation context securely
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useAuth must be wrapped tightly within an <AuthProvider /> boundary.",
    );
  }
  return context;
}
