// import { coffeData, teaData, chickenData } from "@/utils/filteredData";
import getData from "@/utils/data";
import DetailDialog from "./DetailDialog";

export function Product() {
  const data = getData();
  return (
    <div className="p-10 mt-10 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {data.map((menu) => (
        <div className="flex justify-center">
          <DetailDialog data={menu} />
        </div>
      ))}
    </div>
  );
}

export default Product;
