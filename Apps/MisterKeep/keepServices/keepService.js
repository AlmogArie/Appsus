import storageService from '../../services/storageService.js'
import utilService from '../../services/utilService.js'

const KEEP_KEY = 'notes';
var gNotes; 

export default {
    query,
    getNoteIdxById,
    delNote,
    loadNotesFromStorage,
    addNoteToStorage,
    getNoteToEdit
}
var gDefNotes = [
    {
        id: "OXeMG8",
        type: "NoteText",
        isPinned: true,
        info: {
            title: '',
            txt: "Fullstack Me Baby!"
        },
        display: {
            bcgColor: '#80ff00',
            txtColor: '#ff8000'

        }
    },
    {
        id: "1y0Oqt",
        type: "NoteImg",
        info: {
            url: "https://store-images.s-microsoft.com/image/apps.6632.13914979749842905.9c677d6d-da11-477f-bc18-b44258890dc0.890a1e33-f92c-4690-a684-3fa619396282",
            title: "Me playing Mi"
        },
        display: {          // display was "style"
            bcgColor: "#00d",     //bcgColor was "backgroundColor"
            txtColor: '#000000'
        }
    },
    {
        id: "f4iuVm",
        type: "NoteList",
        info: {
            title: "How was it:",
            items: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        },
        display: {
            bcgColor: '#ffffff',
            txtColor: '#000000'

        }
    }
];



function saveNotesToStorage() {
    storageService.store(KEEP_KEY, gNotes)
}

function loadNotesFromStorage() {
    storageService.load(KEEP_KEY)
}

function _craeteNote() {
    console.log('Creating a note...');

}

// function _createEmails() {
//     gEmails = storageService.load(STORAGE_KEY, gDefaultEmails)
//     storageService.store(STORAGE_KEY, gEmails)
// }


function query(filterBy, search) {
    //return gNotes;
    //debugger
    gNotes = storageService.load(KEEP_KEY, gDefNotes)
    var notes = gNotes
    saveNotesToStorage();
    if(search) {
        notes = gNotes.filter(note => note.info.title.toLowerCase().includes(search) )
    }
    if(filterBy && filterBy !== 'all') {
        notes = gNotes.filter(note => note.type === filterBy)
    }
    return Promise.resolve(notes);
}

function getNoteIdxById(id) {
    var noteIdx;
    gNotes.find((note, Idx) => {
        if (id === note.id) noteIdx = Idx

    })
    return noteIdx
}

function getNoteToEdit(id) {
    gNotes = storageService.load(KEEP_KEY, gDefNotes)
    var noteToEdit = gNotes.find(note => note.id === id)
    return noteToEdit
}

function delNote(id) {
    var noteIdxToDel = gNotes.findIndex(note => note.id === id)
    gNotes.splice(noteIdxToDel, 1);
    saveNotesToStorage()

}

function addNoteToStorage(note){
    console.log('saving note got: ', note);
    note.id = utilService.makeId();
    console.log('id note: ', note)
    gNotes.push(note);
    saveNotesToStorage()
    
    
}
