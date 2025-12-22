import Hero from "./Hero";
import PopularSkills from "./PopularSkills";
import TopRated from "./TopRated";
import HowItWorks from "./HowItWorks";
import UpcomingSessions from "./UpcomingSessions";

export default function Home(){
  return (
    <>
      <Hero />
      <PopularSkills />
      <TopRated />
      <HowItWorks />
      <UpcomingSessions />
    </>
  );
}
