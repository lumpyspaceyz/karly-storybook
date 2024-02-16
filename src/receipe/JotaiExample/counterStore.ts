import { atom, useAtom } from 'jotai';

export const counterAtom = atom(0);

export const usePlusCount = () => {
  const [value, setCount] = useAtom(counterAtom);
  return () => setCount(value + 1);
};

export const useMinusCount = () => {
  const [value, setCount] = useAtom(counterAtom);
  return () => setCount(value - 1);
};
