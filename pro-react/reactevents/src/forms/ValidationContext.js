import { createContext } from "react";

export const ValidationContext = createContext({
  getMessagesForField: (field) => [],
});
