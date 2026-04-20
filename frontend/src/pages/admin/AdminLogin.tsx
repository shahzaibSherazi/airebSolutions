import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { authAPI } from "@/services/api/authAPI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { setUser, setToken, setLoading, setError, error, isLoading } =
    useAuthStore();

  const [formData, setFormData] = useState({ email: "", password: "" });
  console.log("formdata", formData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    console.log("+++");
    try {
      console.log("data", formData);
      const response = await authAPI.login(formData);
      console.log("response", response);
      if (response.success && response.token && response.user) {
        setToken(response.token);
        setUser(response.user);
        navigate("/admin/dashboard");
      } else {
        setError(response.message || "Login failed");
      }
    } catch (err: any) {
      console.log("ERROR FULL:", err); // 👈 ADD THIS
      console.log("ERROR RESPONSE:", err.response); // 👈 ADD THIS

      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#02070F] to-[#0a0f1f] flex items-center justify-center px-4">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 295.84% at 50% 50%, rgba(66, 133, 244, 0.15) 0%, rgba(2, 7, 15, 0) 70.6%)",
        }}
      />

      {/* Login card */}
      <div className="relative z-10 w-full max-w-md">
        <div
          className="border border-primary/30 rounded-2xl p-8 backdrop-blur-sm"
          style={{
            background:
              "linear-gradient(180deg, rgba(10, 15, 31, 0.8) 0%, rgba(2, 7, 15, 0.8) 100%)",
          }}>
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white font-stoke mb-2">
              Aireb Admin
            </h1>
            <p className="text-white/60 text-sm">Dashboard Login</p>
          </div>

          {/* Error alert */}
          {error && (
            <Alert className="mb-6 border-red-500/30 bg-red-500/10">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <AlertDescription className="text-red-400">
                {error}
              </AlertDescription>
            </Alert>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email
              </label>
              <Input
                type="email"
                placeholder="admin@aireb.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-white/5 border-primary/20 text-white placeholder-white/30"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <Input
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                className="bg-white/5 border-primary/20 text-white placeholder-white/30"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 mt-6">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>

          {/* Demo credentials */}
          {/* <div className="mt-6 pt-6 border-t border-primary/20 text-center">
            <p className="text-white/50 text-xs mb-2">Demo Credentials:</p>
            <p className="text-primary/70 text-xs font-mono">admin@aireb.com</p>
            <p className="text-primary/70 text-xs font-mono">password123</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
