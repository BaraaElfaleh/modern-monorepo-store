import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { LoginPage } from "../pages/LoginPage";

export const Route = createFileRoute("/login")({
  validateSearch: (search: Record<string, unknown>) => ({
    redirect: (search.redirect as string) || "/",
  }),
  component: () => {
    const navigate = useNavigate();
    const { redirect } = Route.useSearch();

    return (
      <LoginPage 
        redirect={redirect} 
        onSuccess={(target) => navigate({ to: target })} 
      />
    );
  },
});