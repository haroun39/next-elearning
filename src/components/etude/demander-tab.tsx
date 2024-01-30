import CategorySection from "../layout/home/category-section";
import CardStudent from "./card-student";

export default function DemanderTab() {
  return (
    <div>
      <div className="my-3">
        <CategorySection />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-3">
        <CardStudent />
        <CardStudent />
        <CardStudent />
        <CardStudent />
        <CardStudent />
      </div>
    </div>
  );
}
