import { Navbar } from "@/components";

export const Core: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="core">
      <Navbar />
      {children}
    </div>
  );
};
