import Coupon from "./coupon.type";
import { plainToInstance } from "class-transformer";
const loadCoupons = (): Coupon[] => {
  return plainToInstance(Coupon, [
    // {
    //   id: 1,
    //   title: "diwali2022",
    //   image: "http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-1.png",
    //   code: "DIWALI2022",
    //   discountInPercent: 10,
    //   number_of_coupon: 20,
    //   number_of_used_coupon: 10,
    //   products: [
    //     {
    //       id: "1",
    //       url: "",
    //     },
    //   ],
    //   status: "active",
    //   expiration_date: new Date(),
    //   creation_date: new Date(),
    // },
    // {
    //   id: 2,
    //   title: "Free Delivery",
    //   image: "http://s3.amazonaws.com/redqteam.com/pickbazar/gift-card-2.png",
    //   code: "RAMADAN20",
    //   discountInPercent: 20,
    //   number_of_coupon: 20,
    //   number_of_used_coupon: 10,
    //   products: [
    //     {
    //       id: "1",
    //       url: "",
    //     },
    //   ],
    //   status: "revoked",
    //   expiration_date: new Date(),
    //   creation_date: new Date(),
    // },
  ]);
};

export default loadCoupons;
