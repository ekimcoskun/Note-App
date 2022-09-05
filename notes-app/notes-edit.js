const noteId = location.hash.substring(1)
const dateElement = document.querySelector('#last-edited')
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if(!note){
    location.assign("/notes-app/index.html")
}

document.querySelector('#note-id').value = note.title
document.querySelector('#note-body').value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

document.querySelector('#note-id').addEventListener('change',(e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})
document.querySelector('#note-body').addEventListener('change',(e) => {
    note.body = e.target.value
    note.updatedAt =moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click',() => {
    removeNote(noteId)
    saveNotes(notes)
    location.assign("/notes-app/index.html")
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)
        
        if(!note){
            location.assign("/notes-app/index.html")
        }

        document.querySelector('#note-id').value = note.title
        document.querySelector('#note-body').value = note.body
        dateElement.textContent = generateLastEdited(note.updatedAt)
    }
})

