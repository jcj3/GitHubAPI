'use strict'

function getRepo(username) {
  const url = `https://api.github.com/users/${username}/repos`;
  fetch(url)
  .then(response => {
    if(response.ok) {
      return response.json();
    }
  })
  .then(responseJson => displayResults(responseJson))
  .catch(error => alert('Sorry, there are no repos associated with that username. Please try again.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('#results-list').empty();
  responseJson.forEach(obj =>
  $('#results-list').append(`<li><a href='${obj.url}'>${obj.name}</a></li>`)
  );
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const username = $('.js-handle-input').val();
    getRepo(username);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
});

$(watchForm);
