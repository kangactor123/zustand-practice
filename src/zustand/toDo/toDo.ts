import create from "zustand";

interface ToDo {
  toDo: string[];
  addToDo: (toDo: string) => void;
  searchToDo: (keyword: string) => string[];
}

export const useToDoStore = create<ToDo>((set, get) => ({
  toDo: ["sample"],
  addToDo: (newstate: string) => {
    set((state) => ({
      ...state,
      toDo: [...state.toDo, newstate],
    }));
  },
  searchToDo: (keyword: string) => {
    const toDo = get().toDo;
    const filteredToDo = toDo.filter((toDo) => toDo.includes(keyword));
    return filteredToDo;
  },
}));
