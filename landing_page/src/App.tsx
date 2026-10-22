import AnnouncementBar from "./components/AnnouncementBar";
import CommunityReflections from "./components/CommunityReflections";
import EarlyAccess from "./components/EarlyAccess";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MarqueeRibbon from "./components/MarqueeRibbon";
import Pillars from "./components/Pillars";
import VerseExperience from "./components/VerseExperience";
import type { WaitlistPayload } from "./types";

async function joinWaitlist(payload: WaitlistPayload): Promise<void> {
  // TODO: replace with your API call
  console.log("Waitlist signup", payload);
}

export default function App() {
  return (
    <div className="bg-background text-on-surface font-serif antialiased selection:bg-secondary-container selection:text-primary min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <MarqueeRibbon />
        <VerseExperience />
        <Pillars />
        <CommunityReflections />
        <EarlyAccess onJoinWaitlist={joinWaitlist} />
      </main>
      <Footer />
    </div>
  );
}
