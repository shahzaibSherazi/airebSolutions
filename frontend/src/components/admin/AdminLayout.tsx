import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface AdminLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export default function AdminLayout({
  children,
  title,
  subtitle,
}: AdminLayoutProps) {
  return (
    <div className="flex h-screen bg-[#02070F]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-64 mt-16 md:mt-0 min-h-screen">
        {/* Header */}
        {(title || subtitle) && (
          <div className="bg-gradient-to-r from-[#02070F] to-[#0a0f1f] border-b border-primary/20 p-6">
            {title && (
              <h1 className="text-3xl font-bold text-white font-stoke">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-white/60 mt-1 text-sm">{subtitle}</p>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6 max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
