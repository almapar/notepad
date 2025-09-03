document.addEventListener('DOMContentLoaded', () => {
    const noteArea = document.getElementById('note-area');
    const savedNote = localStorage.getItem('savedNote');
    if (savedNote) {
        noteArea.value = savedNote;
        noteArea.addEventListener('input', () {
            localStorage.setItem('savedNote', noteArea.value);
        })
    }
})