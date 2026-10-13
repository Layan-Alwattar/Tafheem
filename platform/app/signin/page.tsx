import AuthHeader from "@/components/auth/AuthHeader";
import SignInForm from "@/components/auth/SignInForm";

export const metadata = { title: "Sign In · Tafheem" };

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#fefcf7] flex flex-col items-center font-sans">
      <AuthHeader />
      <SignInForm />
    </div>
  );
}
