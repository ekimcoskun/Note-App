let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    const createdAt = moment()
    timestamp = createdAt.valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp , 
        updatedAt: timestamp
    })

    saveNotes(notes)
    location.assign(`/notes-app/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value
    renderNotes(notes,filters)
})

window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes,filters)
    }
})


/*
const birthday = new Date('August 13 1998 13:58:09')
const watDate = new Date('June 20 1995 20:50')

const timestamp1 = birthday.getTime()
const timestamp2 = watDate.getTime()

if(timestamp1-timestamp2 <= 0 ){
    console.log(`Birthday is earlier :  ${birthday.toString()}`)
}
else{
    console.log(`Wat is earlier :  ${watDate.toString()}`)
}

const birthday = moment()
birthday.year(1998)
birthday.month("August")
birthday.date(13)

console.log(birthday.format('ll'))
*/