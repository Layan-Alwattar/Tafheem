"use client";
import { useEffect, useState, FormEvent } from "react";
import { inter, playfair } from "@/app/fonts";
import EmailInput from "./EmailInput";
import FormError from "./FormError";
import { apiPost, READER_URL } from "@/lib/api";

interface Session {
  access_token: string;
  refresh_token: string;
  expires_at: number;
}

export default function SignInForm() {
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  // Arriving from the "verify your email" link: Supabase appends either a
  // fresh session or an error to the URL fragment.
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice(1));
    window.history.replaceState(null, "", window.location.pathname);

    const errorDescription = params.get("error_description");
    if (errorDescription) {
      setSubmitError(
        `${errorDescription.replace(/\+/g, " ")}. Please sign in, or register again if the link expired.`,
      );
      return;
    }

    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token");
    if (access_token && refresh_token) {
      setNotice("Your email is verified. Taking you in…");
      const hash = new URLSearchParams({
        access_token,
        refresh_token,
        expires_at: params.get("expires_at") ?? "",
      });
      window.location.replace(`${READER_URL}/#${hash}`);
    }
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);

    if (!validEmail) {
      setSubmitError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setSubmitError("Please enter your password.");
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    setSubmitting(true);
    const result = await apiPost<Session>("/auth/login", {
      email: String(formData.get("email") ?? "").trim(),
      password,
    });

    if (!result.ok) {
      setSubmitting(false);
      setSubmitError(result.error);
      return;
    }

    // Hand the session to the verse reader via the URL fragment.
    const { access_token, refresh_token, expires_at } = result.data;
    const hash = new URLSearchParams({
      access_token,
      refresh_token,
      expires_at: String(expires_at),
    });
    window.location.href = `${READER_URL}/#${hash}`;
  }

  return (
    <div className="w-full max-w-md px-6 py-8 flex flex-col grow">
      <div className="text-center mb-6">
        <h2
          className={`text-[#70334cFF] text-2xl ${playfair.className} font-bold`}
        >
          Welcome Back
        </h2>
        <p
          className={`text-[#3a303099] ${inter.className} text-sm mt-1 font-normal tracking-[0.3px]`}
        >
          Continue your journey of reflection
        </p>
        <hr className="border-none h-px bg-[linear-gradient(to_right,#EAE1E1_0%,#DBBC47_95%,#DBBC47_100%)] mt-4 w-full opacity-50" />
      </div>

      {notice && (
        <p
          className={`${inter.className} w-full border-[2px] border-[#3d7033] bg-[#3d7033]/5 px-2.5 py-1.5 text-[12px] text-[#3d7033] mb-6 mt-2`}
        >
          {notice}
        </p>
      )}
      {submitError && <FormError message={submitError} />}

      <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <EmailInput setValidEmail={setValidEmail} />

        <div className={inter.className}>
          <label className="block text-[#70334cFF] text-xs font-bold tracking-[2px] uppercase mb-1 ml-0.75">
            PASSWORD
          </label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-4 pr-12 py-3 border-[1.33px] border-[#70334c2E] rounded-[5px] bg-[#fefcf7FF] text-sm text-black
                focus:outline-none placeholder-[#3a303066] placeholder:tracking-[1px]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3a3030aa] hover:text-black focus:outline-none"
              aria-label={showPassword ? "HIDE PASSWORD" : "SHOW PASSWORD"}
            >
              <img
                className="w-5 h-5"
                src={showPassword ? "/viewEyeOff.svg" : "/viewEye.svg"}
                alt=""
              />
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={`w-full bg-[#70334c]/50 hover:bg-[#70334c] disabled:opacity-60 disabled:cursor-wait text-[#fefcf7] ${playfair.className} font-semibold py-3 px-4 rounded-[5px] transition-colors duration-200 text-lg shadow-sm mt-2`}
        >
          {submitting ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <footer className="mt-8 text-center text-sm text-gray-500">
        New to Tafheem?{" "}
        <a href="/" className="text-[#70334cFF] font-bold hover:underline">
          Create an account
        </a>
      </footer>
    </div>
  );
}
