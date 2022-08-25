const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function(note){
    return note.id === noteId
})

if(note === undefined){
    location.assign("/notes-app/index.html")
}

document.querySelector('#note-id').value = note.title
document.querySelector('#note-body').value = note.body

document.querySelector('#note-id').addEventListener('change',function(e){
    note.title = e.target.value
    saveNotes(notes)
})
document.querySelector('#note-body').addEventListener('change',function(e){
    note.body = e.target.value
    saveNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click',function(){
    removeNote(noteId)
    saveNotes(notes)
    location.assign("/notes-app/index.html")
})