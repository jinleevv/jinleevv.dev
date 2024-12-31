import { useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";

const currentTabAtom = atomWithImmer<string>(
  localStorage.getItem("currentTab") || "home"
);

export function useHook() {
  const [currentTab, setCurrentTab] = useAtom(currentTabAtom);

  const setCurrentTabWithStorage = (tab: string) => {
    setCurrentTab(tab); // Update the state
    localStorage.setItem("currentTab", tab); // Save to localStorage
  };

  return {
    currentTab,
    setCurrentTab: setCurrentTabWithStorage,
  };
}

