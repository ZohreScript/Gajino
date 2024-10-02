import Breadcrumb from "@/components/BreadCrumbs/Breadcrumb";
import Search from "@/components/SearchBox/Search";
import SearchBox from "@/components/SearchBox/SearchBox";
import SearchPage from "@/components/SearchBox/SearchPage";
import SearchResults from "@/components/SearchBox/SearchResults";

export default function page() {
  return (
    <div className="container mx-auto">
    <Breadcrumb/>
 <SearchPage/>
    </div>
  );
}
