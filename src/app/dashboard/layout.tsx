import { CategoryProvider } from "@/context/categoryContext/categoryProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import NavbarComponent from "@/components/NavbarComponent";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <CategoryProvider>
        <div className="grid grid-cols-[200px_minmax(400px,_1fr)_100px] text-white min-h-screen">
          <div>
            <NavbarComponent />
          </div>
          <div>{children}</div>
        </div>
      </CategoryProvider>
    </ProtectedRoute>
  );
}
