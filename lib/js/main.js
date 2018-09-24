const title = document.getElementById('title_input');
const noun = document.getElementById('noun').value;
const verb = document.getElementById('verb').value;
const adjective = document.getElementById('adjective').value;
const submitButton = document.getElementById('submit_button');
const storyResult = document.getElementById('story_result');

// submitButton.addEventListener('mousedown', createStory(title, noun, verb, adjective));

function createStory(title, noun, verb, adjective) {
    let po = document.createTextNode(title);
    storyResult.appendChild(po);
    console.log("CLICKED");
}