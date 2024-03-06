import M3Hero from "./components/M3Hero";
import Ingredients from "./components/Ingredients";
import DidYouKnow from "./components/DidYouKnow";
import ReadyToGet from "./components/ReadyToGet";

export default function Home() {
  const abVersion: number = 1; // This would be set by an AB testing framework (e.g. LaunchDarkly, PostHog)

  return (
    <div className="page">
      <M3Hero />
      <Ingredients/>
      <DidYouKnow />
      {abVersion === 1 && (
        <ReadyToGet />
      )}
    </div>
  );
}
