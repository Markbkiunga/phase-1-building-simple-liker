// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
const hearts = document.querySelectorAll('.like-glyph');
const errorContainer = document.getElementById('modal');
const errorMessage = document.getElementById('modal-message');

for (let heart of hearts) {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then((response) => {
        console.log(response);
        heart.innerHTML = FULL_HEART;
        heart.classList.toggle('activated-heart');
      })
      .catch((error) => {
        console.error(error);
        errorContainer.classList.remove('hidden');
        errorMessage.textContent = error;
        setTimeout(function hideModal() {
          errorContainer.classList.add('hidden');
        }, 3000);
      });
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject('Random server error. Try again.');
      } else {
        resolve('Pretend remote server notified of action!');
      }
    }, 300);
  });
}
