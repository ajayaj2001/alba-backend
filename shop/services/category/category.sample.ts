import Category from "./category.type";
import { plainToInstance } from "class-transformer";

const loadCategories = (): Category[] => {
  return plainToInstance(Category, [
    // {
    //   id: 1,
    //   title: "Fruits & Vegetables",
    //   slug: "fruits-and-vegetables",
    //   products: [],
    //   type: "grocery",
    //   icon: "FruitsVegetable",
    //   children: [
    //     {
    //       id: 2,
    //       title: "Fruits",
    //       slug: "fruits",
    //       products: [],
    //       type: "grocery",
    //     },
    //     {
    //       id: 3,
    //       title: "vegetables",
    //       slug: "vegetables",
    //       products: [],
    //       type: "grocery",
    //     },
    //   ],
    // },
    {
      id: 5,
      title: "Eco Products",
      slug: "wooden-and-eco-products",
      products: [],
      type: "grocery",
      icon: "Eco",
      children: [
        {
          id: 4,
          title: "Brush",
          slug: "brush",
          products: [],
          type: "grocery",
        },
      ],
    },
  ]);
};

export default loadCategories;
