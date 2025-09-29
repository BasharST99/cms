import Link from "next/link";

import { AuthShell } from "@/features/auth/components/AuthShell";
import { SignupForm } from "./SignupForm";

export default function Page() {
  return (
    <AuthShell
      title="Create your Haven account"
      subtitle="Unlock personalized recommendations and stay ahead of the market"
      backLink={{ href: "/", label: "Back to home" }}
      footer={
        <span>
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-white underline-offset-4 hover:underline">
            Sign in
          </Link>
        </span>
      }
    >
      <SignupForm />
    </AuthShell>
  );
}
