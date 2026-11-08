import Greeting from '@/features/dashboard/components/Greeting';
import ReflectionsSection from '@/features/dashboard/components/ReflectionsSection';
import VerseOfTheDay from '@/features/dashboard/components/VerseOfTheDay';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <Greeting />
      <VerseOfTheDay />
      <ReflectionsSection />
    </div>
  );
}
