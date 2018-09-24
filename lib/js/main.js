let title2 = document.getElementById('title_input').value;
title2 = 'Omar';
const noun2 = document.getElementById('noun').value;
const verb2 = document.getElementById('verb').value;
const adjective2 = document.getElementById('adjective').value;
const submitButton = document.getElementById('submit_button');
const storyResult = document.getElementById('story_result');

submitButton.addEventListener('click', function createStory(title, noun, verb, adjective) {
    let po = document.createTextNode(title);
    storyResult.appendChild(po);
    console.log(po);
});

