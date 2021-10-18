

// SLIDER

var users = document.querySelectorAll('.user')
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");

var counter = 0;

console.log(users)

next.addEventListener("click", function () {
  counter = counter + 1;

  if (counter > users.length - 1) {
    counter = 0;
  }
    removeActiveClasses()
  users[counter].classList.add('show');
  console.log(counter);
});

prev.addEventListener("click", function () {
  counter = counter - 1;

  if (counter < 0) {
    counter = users.length - 1;
  }
  removeActiveClasses()
  users[counter].classList.add('show');
  console.log(counter);
});

function removeActiveClasses() {
    users.forEach(user => {
        user.classList.remove('show')
    })
}