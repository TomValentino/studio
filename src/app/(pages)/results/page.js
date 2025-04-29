import Results from "@/global/components/Results";
import HowItWorks from "../package/[id]/_components/HowItWorks";
import CTA from "@/global/components/CTA";

export default function Page() {
  return (
    <>
      <Results topMargin={'6em'} />
      <HowItWorks />
      <CTA />
    </>
  );
}
