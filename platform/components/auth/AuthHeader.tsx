import { playfair } from "@/app/fonts";

/** Burgundy banner shared by the sign-up and sign-in pages. */
export default function AuthHeader() {
  return (
    <header className="w-full bg-[#70334c] py-4 px-6 flex items-center shadow-md">
      <a href="/" className="flex items-center">
        <span className="text-[#dbbc47] font-[Amiri] text-xl mr-2 font-light">
          تفهيم
        </span>
        <h1
          className={`${playfair.className} text-white  text-xl font-light tracking-wide`}
        >
          Tafheem
        </h1>
      </a>
    </header>
  );
}
