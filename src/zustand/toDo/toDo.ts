import create from "zustand";

interface ToDo {
  toDo: string[];
  addToDo: (toDo: string) => void;
}

export const useToDoStore = create<ToDo>((set) => ({
  toDo: ["sample"],
  addToDo: (newstate: string) => {
    console.log(newstate);
    set((state) => ({
      ...state,
      toDo: [...state.toDo, newstate],
    }));
  },
}));
