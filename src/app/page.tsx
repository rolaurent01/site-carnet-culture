import Hero from "@/components/home/Hero";
import ProblemBlock from "@/components/home/ProblemBlock";
import PromiseBlock from "@/components/home/PromiseBlock";
import HowItWorks from "@/components/home/HowItWorks";
import AppDemo from "@/components/home/AppDemo";
import ModulesBlock from "@/components/home/ModulesBlock";
import DeviceBlock from "@/components/home/DeviceBlock";
import AudienceBlock from "@/components/home/AudienceBlock";
import ReassuranceBlock from "@/components/home/ReassuranceBlock";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemBlock />
      <PromiseBlock />
      <HowItWorks />
      <AppDemo />
      <ModulesBlock />
      <DeviceBlock />
      <AudienceBlock />
      <ReassuranceBlock />
      <FinalCTA />
    </main>
  );
}
