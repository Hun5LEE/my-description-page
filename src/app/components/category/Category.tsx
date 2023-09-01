import { Icon, NormalText } from "@/styles/style";
import tw from "tailwind-styled-components";

const CategoriesContent = tw.li`
  flex
  items-center
  pl-2
  h-10
  hover:bg-[#00017F]
  hover:text-white 
  cursor-pointer
  space-x-2
`;

const Category = ({ data }: any) => {
  return (
    <CategoriesContent>
      <Icon src="images/window_icon.png" />
      <NormalText>{data} 안녕하세요</NormalText>
    </CategoriesContent>
  );
};

export default Category;
