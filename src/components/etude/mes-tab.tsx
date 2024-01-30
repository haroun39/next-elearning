import CategorySection from "../layout/home/category-section";
import CardMes from "./card-mes";

export default function MesTab() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-3">
        <CardMes />
        <CardMes />
        <CardMes />
        <CardMes />
        <CardMes />
      </div>
    </div>
  );
}
