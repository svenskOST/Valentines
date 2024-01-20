import message from '../message.json'
var title, text

if (message.text == null) {
    title = "Placeholder titel"
    text = "Placeholder text"
} else {
    title = message.title
    text = message.text
}