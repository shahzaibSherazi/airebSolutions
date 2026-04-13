import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  LogOut,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
    { icon: BookOpen, label: "Blogs", href: "/admin/blogs" },
    { icon: FileText, label: "White Papers", href: "/admin/whitepapers" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden text-white bg-primary p-2 rounded-lg">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-[#02070F] to-[#0a0f1f] border-r border-primary/20 transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}>
        {/* Logo */}
        <div className="p-6 border-b border-primary/20">
          <h1 className="text-2xl font-bold text-white font-stoke">Aireb</h1>
          <p className="text-xs text-primary/60 mt-1">Admin Dashboard</p>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {user?.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">
                {user?.name}
              </p>
              <p className="text-primary/60 text-xs capitalize">{user?.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                navigate(item.href);
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-primary/10 rounded-lg transition-all duration-200">
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-4 left-4 right-4">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full border-primary/30 text-primary hover:bg-primary/10 flex items-center gap-2">
            <LogOut size={16} />
            Logout
          </Button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </>
  );
}
