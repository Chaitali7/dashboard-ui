import React, { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  showLoading: () => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = useCallback((loading: boolean) => {
    setIsLoading(loading);
  }, []);

  const showLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const hideLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const value = {
    isLoading,
    setLoading,
    showLoading,
    hideLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
      {isLoading && <LoadingOverlay />}
    </LoadingContext.Provider>
  );
}

// Components for different types of loading states
export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

export function TableRowSkeleton({ isMobile, rows = 5 }: { isMobile: boolean; rows?: number }) {
  return (
    <>
      {Array(rows).fill(0).map((_, index) => (
        <tr key={index}>
          <td>
            <Skeleton className="h-4 w-4" />
          </td>
          <td>
            <div>
              <Skeleton className="h-5 w-[250px] mb-1" />
              {isMobile && <Skeleton className="h-4 w-[150px]" />}
            </div>
          </td>
          {!isMobile && (
            <>
              <td><Skeleton className="h-5 w-[180px]" /></td>
              <td className="text-right"><Skeleton className="h-5 w-12 ml-auto" /></td>
              <td><Skeleton className="h-5 w-24" /></td>
            </>
          )}
          <td>
            <Skeleton className="h-8 w-16" />
          </td>
          {!isMobile && (
            <td>
              <Skeleton className="h-6 w-20" />
            </td>
          )}
        </tr>
      ))}
    </>
  );
}

export function SkeletonText({ width = "w-20", height = "h-5" }: { width?: string; height?: string }) {
  return <Skeleton className={`${height} ${width}`} />;
} 