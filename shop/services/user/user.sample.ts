import { plainToInstance } from "class-transformer";
import User from "./user.type";

const loadUsers = (): User[] => {
  return plainToInstance(User, [
    {
      id: 1,
      name: "",
      email: "",
      address: [],
      transactionId: "",
      contact: [],
      card: [
        {
          id: "179012",
          type: "primary",
          name: "Pay On Delivery",
        },
        {
          id: "987234",
          type: "secondary",
          name: "UPI Payment",
        },
      ],
    },
  ]);
};

export default loadUsers;
