export const loadState = () => {
  try {
    const state = localStorage.getItem("todos");
    const todos = JSON.parse(state);
    if (todos === null) {
      return undefined;
    }
    return todos;
  } catch (error) {
    console.log(error);
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todos", serializedState);
  } catch (error) {
    console.log(error);
  }
};
