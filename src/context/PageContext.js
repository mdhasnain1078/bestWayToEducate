import { createContext, useContext } from "react";

export const IsPageContext = createContext({
  isPage: false,
  updateIsPageTrue: () => {},
  updateIsPageFalse: () => {},
});

export const IsPageProvider = IsPageContext.Provider;
export const useIsPage = () => {
  return useContext(IsPageContext);
};
