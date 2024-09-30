import Breadcrumb from "@/components/BreadCrumbs/Breadcrumb";
import Search from "@/components/SearchBox/Search";

export default function page() {
  return (
    <div className="container mx-auto">
    <Breadcrumb/>
      <Search />
    </div>
  );
}
