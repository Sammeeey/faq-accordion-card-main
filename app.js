// variables
const questions = document.querySelectorAll('.question')
const arrows = document.querySelectorAll('.arrow')



// event listeners
// inspired by sortable drag and drop --> https://github.com/Sammeeey/sortable-drag-drop-js/blob/96ce9e0600823251cda85eddc5ec84e49cb2879d/script.js#L6
questions.forEach(question => {
    const parentElem = question.parentElement
    question.addEventListener('click', () => {
        parentElem.querySelector('.arrow').classList.toggle('up-arrow')
    })
    question.addEventListener('click', () => {
        parentElem.querySelector('.question').classList.toggle('open-question')
    })
    question.addEventListener('click', () => {
        parentElem.querySelector('.answer').classList.toggle('open-answer')
    })
})

// FOLLOWING LINES BEEN PART OF ORIGINAL OWN THOUGHTS - BUT SUPERFLUOUS BECAUSE OF SIMPLE SOLUTION IN EVENT LISTENER ABOVE
// question & arrow: listen to click
    // rotate arrow image + bold question + display answer
        // find parent node (.accordion-item)
            // find .question child -> https://stackoverflow.com/a/14478026 & pass it to boldText function
            // find .arrow child (see above) & pass it to rotateElem function
            // find .answer child (see above) & pass it to display function



// functions

// rotateElem
    // toggle between .arrow and .up-arrow

// boldText
    // toggle between .question and .open-question

// display
    // toggle between .answer and .open-answer