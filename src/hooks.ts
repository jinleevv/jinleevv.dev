import { useAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";

const currentTabAtom = atomWithImmer<string>("home");

export function useHook() {
  const [currentTab, setCurrentTab] = useAtom(currentTabAtom);

  return {
    currentTab,
    setCurrentTab,
  };
}
