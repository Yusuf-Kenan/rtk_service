import CategoryCard from "./component/category-card";
import { useSelector } from "react-redux";

export default function MainPage() {
  const categoryState = useSelector((state) => state.categoryState);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {categoryState.categories.map((item) => {
          return (
            <div key={item.id} className="col">
              <CategoryCard category={item}/>
            </div>
          );
        })}
      </div>
    </>
  );
}
