import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { RegisterPage } from "../pages/RegisterPage";

export const Route = createFileRoute("/register")({
  component: () => {
    const navigate = useNavigate();
    
    return (
      <RegisterPage 
        onSuccess={() => navigate({ to: "/" })} 
      />
    );
  },
});