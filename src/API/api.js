import axios from "axios";


export const noteAPI = {
  fetchNotes() {
    return axios.get(`https://react-redux-axios.firebaseio.com/notes.json`);
  },
  addNoteToDataBase(note) {
    return axios.post(
      `https://react-redux-axios.firebaseio.com/notes.json`,
      note
    );
  },
  removeNoteFromDataBase(noteId) {
    return axios.delete(
      `https://react-redux-axios.firebaseio.com/notes/${noteId}.json`
    );
  },
  updateNote(newNote) {
    return axios.put(
      `https://react-redux-axios.firebaseio.com/notes/${newNote.id}.json`,
      newNote
    );
  },
};
