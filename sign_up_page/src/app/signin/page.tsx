import SignInForm from "@/components/SignInForm";
import { playfair } from "@/app/layout";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#fefcf7] flex flex-col items-center font-sans">
      {/* Header Banner */}
      <header className="w-full bg-[#70334c] py-4 px-6 flex items-center shadow-md">
        <span className="text-[#dbbc47] font-[Amiri] text-xl mr-2 font-light">
          تفهيم
        </span>
        <h1
          className={`${playfair.className} text-white  text-xl font-light tracking-wide`}
        >
          Tafheem
        </h1>
      </header>
      <SignInForm />
    </div>
  );
}
