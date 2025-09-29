import Link from "next/link";

import LoginForm from "./LoginForm";
import { AuthShell } from "@/features/auth/components/AuthShell";

export default function Page() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Access your personalized property dashboard"
      footer={
        <span>
          New to Haven?{" "}
          <Link href="/signup" className="font-semibold text-white underline-offset-4 hover:underline">
            Create an account
          </Link>
        </span>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}
