import HeaderSection from "./HeaderSection";
import BentoGrid from "./BentoGrid";
import MapComponent from "./MapComponent";
import PricingSection from "./PricingSection";
import CTASection from "./CTASection";
import { ScrollTop } from "primereact/scrolltop";
import Example from "./Example";
export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 ">
      <HeaderSection />
      <CTASection />
      <BentoGrid />
      <PricingSection />
      <MapComponent />
      <ScrollTop />
    </div>
  );
}
