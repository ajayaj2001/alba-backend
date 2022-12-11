import Product from "./product.type";
import { plainToInstance } from "class-transformer";

export function createProductSamples() {
  return plainToInstance(Product, [
    {
      id: 70,
      title: "Wooden Brush",
      slug: "brush",
      unit: "1 pc(s)",
      price: 40,
      salePrice: 29,
      discountInPercent: 26,
      description: `🌿CHEMICAL-FREE & CHARCOAL INFUSED: BPA free.which leaving the mouth odor-free and helps in whitening teeth.
        🌿ECO-FRIENDLY: Made from 100% organic bamboo.
        🌿CONVENIENCE: Well-designed handle for a better grip and ease of use. It has a long life and is totally splinter-free.
        🌿CUSTOMIZABLE: You can get your brushes with any name on it, Surprise your loved one's with our wooden brushes..`,
      type: "grocery",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F1-coverImages.jpg?alt=media&token=fb6399c4-d420-416b-af37-182a9aa90603",
      gallery: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F1-brush.jpg?alt=media&token=0a7a598f-c688-45da-9747-1d702020cb53",
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F2-brush.jpg?alt=media&token=281dc5bd-eaf2-4875-8d2c-e867ec3b1b3e",
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F3-brush.jpg?alt=media&token=c12a00f4-8731-410c-ad17-29ae065f4d53",
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F4-brush.jpg?alt=media&token=ea4fddc4-d461-47b3-b6bd-ded40d496c87",
        },
        // {
        //   url: "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2Fbrush-custom.jpeg?alt=media&token=947cedfc-da51-480e-b249-2a99f10a0742",
        // },
      ],
      categories: [
        {
          id: 5,
          title: "Wooden & Eco Products",
          slug: "wooden-and-eco-products",
        },
        {
          id: 4,
          title: "Brush",
          slug: "brush",
        },
      ],
    },
    {
      id: 80,
      title: "Wooden Brush (with delivery)",
      slug: "brush",
      unit: "3 pc(s)",
      price: 180,
      salePrice: 129,
      discountInPercent: 29,
      description: `🌿CHEMICAL-FREE & CHARCOAL INFUSED: BPA free.which leaving the mouth odor-free and helps in whitening teeth.
        🌿ECO-FRIENDLY: Made from 100% organic bamboo.
        🌿CONVENIENCE: Well-designed handle for a better grip and ease of use. It has a long life and is totally splinter-free.
        🌿CUSTOMIZABLE: You can get your brushes with any name on it, Surprise your loved one's with our wooden brushes...`,
      type: "grocery",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F1-coverImages.jpg?alt=media&token=fb6399c4-d420-416b-af37-182a9aa90603",
      gallery: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F1-brush.jpg?alt=media&token=0a7a598f-c688-45da-9747-1d702020cb53",
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F2-brush.jpg?alt=media&token=281dc5bd-eaf2-4875-8d2c-e867ec3b1b3e",
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F3-brush.jpg?alt=media&token=c12a00f4-8731-410c-ad17-29ae065f4d53",
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F4-brush.jpg?alt=media&token=ea4fddc4-d461-47b3-b6bd-ded40d496c87",
        },
      ],
      categories: [
        {
          id: 5,
          title: "Wooden & Eco Products",
          slug: "wooden-and-eco-products",
        },
        {
          id: 4,
          title: "Brush",
          slug: "brush",
        },
      ],
    },
    {
      id: 90,
      title: "Wooden Brush (with delivery)",
      slug: "brush",
      unit: "5 pc(s)",
      price: 250,
      salePrice: 179,
      discountInPercent: 28,
      description: `🌿CHEMICAL-FREE & CHARCOAL INFUSED: BPA free.which leaving the mouth odor-free and helps in whitening teeth.
        🌿ECO-FRIENDLY: Made from 100% organic bamboo.
        🌿CONVENIENCE: Well-designed handle for a better grip and ease of use. It has a long life and is totally splinter-free.
        🌿CUSTOMIZABLE: You can get your brushes with any name on it, Surprise your loved one's with our wooden brushes...`,
      type: "grocery",
      image:
        "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F1-coverImages.jpg?alt=media&token=fb6399c4-d420-416b-af37-182a9aa90603",
      gallery: [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F1-brush.jpg?alt=media&token=0a7a598f-c688-45da-9747-1d702020cb53",
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F2-brush.jpg?alt=media&token=281dc5bd-eaf2-4875-8d2c-e867ec3b1b3e",
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F3-brush.jpg?alt=media&token=c12a00f4-8731-410c-ad17-29ae065f4d53",
        },

        {
          url: "https://firebasestorage.googleapis.com/v0/b/ui-contact.appspot.com/o/alba%2F70-woodenBrush%2F4-brush.jpg?alt=media&token=ea4fddc4-d461-47b3-b6bd-ded40d496c87",
        },
      ],
      categories: [
        {
          id: 5,
          title: "Wooden & Eco Products",
          slug: "wooden-and-eco-products",
        },
        {
          id: 4,
          title: "Brush",
          slug: "brush",
        },
      ],
    },
  ]);
}
