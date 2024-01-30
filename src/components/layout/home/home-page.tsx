import CategorySection from "./category-section";
import ExplorerSection from "./explorer-section";
import FeaturedSection from "./featured-section";
import SuggestionSection from "./suggestion-section";

export default function HomePage() {
  return (
    <div className="">
      <CategorySection />
      <FeaturedSection />
      <ExplorerSection />
      <SuggestionSection />
      <ExplorerSection />
    </div>
  );
}
