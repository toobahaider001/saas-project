import Discord from "@/components/Discord";
import Essential from "@/components/Essential";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import Source from "@/components/Source";

export default function Home() {
  return (
   <div>
    <Hero />
    <Features />
    <Essential />
    <Source />
    <Review />
    <Discord />
   </div>
  );
}
