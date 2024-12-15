import dotenv from "dotenv";

dotenv.config();

export const PORT = +(process.env.PORT || 4004);
export const NODE_ENV = process.env.NODE_ENV || "development";
