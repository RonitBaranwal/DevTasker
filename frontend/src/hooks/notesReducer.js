export const notesReducer = (state, action) => {
    switch (action.type) {
        case "INIT_NOTES":
            return {
                ...state,
                notes: action.payload,
                hasInitialized:true,
            };
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
            return {
                ...state,
                notes: state.notes.filter((nt) => nt.id !== action.payload),
            };
        default:
            return state;
    }
};
export const initialState = {
    notes: (() => {
        try {
            const data = JSON.parse(localStorage.getItem("notes"));
            return Array.isArray(data) ? data : [];
        } catch {
            return [];
        }
    })(),
    hasInitialized:false,
};
