import create from "zustand";

interface Integer {
  count: number;
  increase: (val: number) => void;
  decrease: (val: number) => void;
}

export const useInteger = create<Integer>((set) => ({
  count: 0,
  increase: (number) => {
    console.log(number);
    set((state) => ({
      ...state,
      count: number,
    }));
  },
  decrease: (state) => {
    //
  },
}));
