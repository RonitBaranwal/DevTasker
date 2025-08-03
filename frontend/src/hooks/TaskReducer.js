export const reducer = (state, action) => {
    switch (action.type) {
        case "INIT_TASKS":
            return {
                ...state,
                tasks: action.payload,
            };
        case "ADD":
            if (action.payload.title.trim().length === 0) {
                return {
                    ...state,
                };
            }
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        title: action.payload.title,
                        completed: false,
                        taskId: Date.now(),
                    },
                ],
            };
        case "COMPLETED":
            return {
                ...state,
                tasks: state.tasks.map((t) =>
                    t.taskId === action.payload.id
                        ? { ...t, completed: !t.completed }
                        : t
                ),
            };
        case "DELETE":
            return {
                ...state,
                tasks: state.tasks.filter(
                    (t) => t.taskId !== action.payload.id
                ),
            };

        default:
            return state;
    }
};
