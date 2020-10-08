import { noteAPI } from "../API/api";

const ADD_NOTE = "noteReducer/ADD_NOTE";
const DELETE_NOTE_SUCCESS = "noteReducer/DELETE_NOTE_SUCCESS";
const SHOW_ALERT = "noteReducer/SHOW_ALERT";
const CLOSE_ALERT = "noteReducer/CLOSE_ALERT";
const HIDE_LOADER = "noteReducer/HIDE_LOADER";
const FETCH_NOTES = "noteReducer/FETCH_NOTES";
const SEARCH_NOTE = "noteReducer/SEARCH_NOTE";
const SELECT_DONE = "noteReducer/SELECT_DONE";
const SORT_IS_DONE = "noteReducer/SORT_IS_DONE";
const SELECT_ACTIVE = "noteReducer/SELECT_ACTIVE"
const SHOW_ACTIVE_NOTES = "noteReducer/SHOW_ACTIVE_NOTES"


let initialState = {
  alert: {},
  loading: true,
  notes: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };

    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.id),
      };

    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        alert: { ...state.alert, visible: true },
      };
    case SHOW_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          type: action.show ? null : { type: "warning" },
          text: action.show
            ? "Your announcement has been added successfully"
            : "Enter your announcement name",
          visible: true,
        },
      };
    case CLOSE_ALERT:
      return {
        ...state,
        alert: { ...state.alert, visible: false },
      };
    case FETCH_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case SEARCH_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) =>
          note.title.toLowerCase().includes(action.searchNote.toLowerCase())
        ),
      };
      case SELECT_DONE:
        return {
          ...state,
          notes: state.notes.map( note => note.id === action.noteId 
            ? Object.assign(note, { status: 'done' }) 
            : note)
        };
        case SELECT_ACTIVE:
          return {
            ...state,
            notes: state.notes.map( note => note.id === action.noteId 
              ? Object.assign(note, { status: 'active' }) 
              : note)
          };
         case SORT_IS_DONE:
        return {
          ...state,
          notes: state.notes.filter( (note) => note.status === 'done')
        };
        
          case SHOW_ACTIVE_NOTES:
            return {
              ...state,
              notes: state.notes.filter( (note) => note.status === 'active')
            };

    default:
      return state;
  }
};

export const hideLoader = () => ({ type: HIDE_LOADER });
export const fetchNotesSuccess = (payload) => ({ type: FETCH_NOTES, payload });
export const removeNoteSuccess = (id) => ({ type: DELETE_NOTE_SUCCESS, id });
export const addNoteSuccess = (payload) => ({ type: ADD_NOTE, payload });
export const showAlert = (show) => ({ type: SHOW_ALERT, show });
export const closeAlert = () => ({ type: CLOSE_ALERT });
export const searchNote = (searchNote) => ({
  type: SEARCH_NOTE,
  searchNote: searchNote["search"],
});
// export const showAll = () => ({ type: SHOW_ALL_NOTES });
export const showActive = () => ({ type: SHOW_ACTIVE_NOTES });
export const selectDone = (noteId) => ({ type: SELECT_DONE, noteId });
export const selectActive = (noteId) => ({ type: SELECT_ACTIVE, noteId });
export const sortIsDone = () => ({ type: SORT_IS_DONE });


export const fetchNotes = () => async (dispatch) => {
  try {
    const response = await noteAPI.fetchNotes();
    const payload = Object.keys(response.data).map((key) => {
      return {
        ...response.data[key],
        id: key,
      };
    });
    dispatch(hideLoader());
    dispatch(fetchNotesSuccess(payload));
  } catch {
    alert("announcement not found");
  }
};
export const addNote = (title, description = "description") => async (dispatch) => {
  if (title && title.trim() !== '') {
    const note = { title, description, data: new Date().toJSON() };
    const response = await noteAPI.addNoteToDataBase(note);
    const payload = { ...note, id: response.data.name };
    dispatch(addNoteSuccess(payload));
    dispatch(showAlert(true));
    setTimeout(() => {
      dispatch(closeAlert());
    }, 4000);
    dispatch(hideLoader());
  } else {
    dispatch(showAlert(false));
  }
};
export const deleteNoteFromFirebase = (id) => async (dispatch) => {
  await noteAPI.removeNoteFromDataBase(id);
  dispatch(removeNoteSuccess(id));
};
export const updateNote = (id, title, description, data) => async ( dispatch ) => {
  const newNote = { id, title, description, data };
  const response = await noteAPI.updateNote(newNote);
  dispatch(fetchNotes(response.data));
};

export default noteReducer;
