const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("hidden2")) {
          entry.target.classList.add("show2");
        }
        else {
          entry.target.classList.add("show");
        }
      } else {
        entry.target.classList.remove("show");
        entry.target.classList.remove("show2");
      }
    });
});
  
const hiddenElements = document.querySelectorAll(".hidden");
const hiddenElements2 = document.querySelectorAll(".hidden2");

hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));


var viewButtons = document.querySelectorAll(".map-grid button#view-map");
viewButtons.forEach(function(button) {
    button.addEventListener("click", function (event) {
        var parentDiv = event.target.closest(".map"); // Find the closest parent with class "map"
        if (parentDiv) {
            var mapTitle = parentDiv.querySelector("#map-title"); // Find the map-title element within the parent
            if (mapTitle) {
                if (mapTitle.innerHTML.includes(" ")) {
                    const newTitle = mapTitle.innerHTML.replace(/ /g, "_"); // Corrected this line
                    console.log(newTitle.toLowerCase());
                    window.location.replace("https://mrniceguy9.github.io/maps/" + newTitle.toLowerCase() + ".html");
                }
                else {
                    console.log(mapTitle.innerHTML.toLowerCase());
                    window.location.replace("https://mrniceguy9.github.io/maps/" + mapTitle.innerHTML.toLowerCase() + ".html");
                }
            }
        }
    });
});

var buttons = document.querySelectorAll(".game-mode");
buttons.forEach(function(button) {
    button.addEventListener("click", function (event) {
        THETHING = button.querySelector("#modeTitle");
        console.log(THETHING.innerHTML.toLowerCase());
    })
})



var mapImages = document.querySelectorAll("#mapImage");
mapImages.forEach(function(map) {
  map.addEventListener("click", function (event) {
    console.log("Hello World!")
    document.querySelector("#overlay").style.display = "flex";
    document.getElementById("overlayImage").src = map.src;
  })
})

const overlay = document.getElementById("overlay");

if (overlay) {
  document.getElementById("overlay").addEventListener("click", function () {
    document.querySelector("#overlay").style.display = "none";
  })
}




var elements = document.getElementsByClassName("game-mode1");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    console.log("Hello!");
    window.location.href = "https://mrniceguy9.github.io/games/beginner.html";
  });
}

const guessMap = document.getElementById("guessMap");
let guesses = 3;

let map1;
let map2;
let answer;

function newMap() {
  map1 = Math.floor(Math.random() * 3) + 1;

  let newMap2;
  do {
    newMap2 = Math.floor(Math.random() * 2) + 1;
  } while (newMap2 === map2);

  let newMap1;
  do {
    newMap1 = Math.floor(Math.random() * 3) + 1;
  } while (newMap1 === map1);
  
  map2 = newMap2;
  guessMap.src = "./game_maps/" + map1 + "/" + map2 + ".jpg";
  answer = getAnswer(map1);
}




function getAnswer(num1) {
  switch (num1) {
    case 0:
      return;
    case 1:
      return "Bank";
    case 2:
      return "Consulate";
    case 3:
      return "Oregon";
  }
}

document.getElementById("guessButton").addEventListener("click", function () {
  var selectBox = document.getElementById("mapList");
  var inputBox = document.getElementById("mapGuess");
  if (selectBox.value == "placeholderMap" && inputBox.value != "") {
    if (inputBox.value.toLowerCase() == answer.toLowerCase()) {
      console.log("You win!");
      newMap();
      inputBox.value = "";
      guesses = 3;
      document.getElementById("guess1").style.display = "none";
      document.getElementById("guess2").style.display = "none";
      document.getElementById("guess3").style.display = "none";
    }
    else {
      console.log("You lost, try again!");
      guesses -= 1;
      switch (guesses) {
        case 2:
          document.getElementById("guess1").style.display = "block";
          document.getElementById("guess1").innerHTML = "WRONG";
          document.getElementById("guess1").style.color = "red";
          break;
        case 1:
          document.getElementById("guess2").style.display = "block";
          document.getElementById("guess2").innerHTML = "WRONG";
          document.getElementById("guess2").style.color = "red";
          break;
        case 0:
          document.getElementById("guess3").style.display = "block";
          document.getElementById("guess3").innerHTML = "WRONG TRY AGAIN";
          document.getElementById("guess3").style.color = "red";
          newMap();
          inputBox.value = "";
          guesses = 3;
          document.getElementById("guess1").style.display = "none";
          document.getElementById("guess2").style.display = "none";
          document.getElementById("guess3").style.display = "none";
          break;
      }
    }
  }
  else if (selectBox.value != "placeholderMap" && inputBox.value == "") {
    if (selectBox.value.toLowerCase() == answer.toLowerCase()) {
      console.log("You win!");
      newMap();
      selectBox.value = "placeholderMap";
      guesses = 3;
      document.getElementById("guess1").style.display = "none";
      document.getElementById("guess2").style.display = "none";
      document.getElementById("guess3").style.display = "none";
    }
    else {
      console.log("You lost, try again!");
      guesses -= 1;
      switch (guesses) {
        case 2:
          document.getElementById("guess1").style.display = "block";
          document.getElementById("guess1").innerHTML = "WRONG";
          document.getElementById("guess1").style.color = "red";
          break;
        case 1:
          document.getElementById("guess2").style.display = "block";
          document.getElementById("guess2").innerHTML = "WRONG";
          document.getElementById("guess2").style.color = "red";
          break;
        case 0:
          document.getElementById("guess3").style.display = "block";
          document.getElementById("guess3").innerHTML = "WRONG TRY AGAIN";
          document.getElementById("guess3").style.color = "red";
          newMap();
          selectBox.value = "placeholderMap";
          guesses = 3;
          document.getElementById("guess1").style.display = "none";
          document.getElementById("guess2").style.display = "none";
          document.getElementById("guess3").style.display = "none";
          break;
      }
    }  
  }
  else {
    console.log("CHOOSE AN OPTION");
    selectBox.style.animation = "shake 0.5s";
    inputBox.style.animation = "shake 0.5s";
    setTimeout(function() {
      selectBox.style.animation = "none";
      inputBox.style.animation = "none";
    }, 600);
  }

})

newMap();




