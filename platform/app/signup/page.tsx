import AuthHeader from "@/components/auth/AuthHeader";
import SignUpForm from "@/components/auth/SignUpForm";

export const metadata = { title: "Create Your Account · Tafheem" };

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#fefcf7] flex flex-col items-center font-sans">
      <AuthHeader />
      <SignUpForm />
    </div>
  );
}
