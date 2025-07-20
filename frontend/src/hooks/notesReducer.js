export const  notesReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        title: action.payload.title,
                        content: action.payload.content,
                        id: action.payload.id,
                    },
                ],
            };
        case "DELETE":
            console.log(action.payload);
            return {
                ...state,
                notes: state.notes.filter((nt) => nt.id !== action.payload),
            };
        default:
            return state;
    }
};
export const initialState = {
    notes: [],
};