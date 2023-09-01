import tw from "tailwind-styled-components";
import Category from "./Category";

const CategoriesWrapper = tw.ul`
  w-full
`;

const Categories = () => {
  return (
    <CategoriesWrapper>
      {[1, 2, 3, 4, 5, 6].map((a, i) => {
        return <Category key={i}>{a}</Category>;
      })}
    </CategoriesWrapper>
  );
};

export default Categories;
