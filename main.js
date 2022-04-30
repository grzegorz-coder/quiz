//catching elements by ID
const yourName = document.querySelector(".name");
const playerName = document.querySelector(".playerName");
const startGame = document.querySelector(".start");
const categories = document.querySelector(".categories");
const mathQuestions = document.querySelector(".math-questions");
const filmQuestions = document.querySelector(".film-questions");
const musicQuestions = document.querySelector(".music-questions");
const result = document.querySelector(".next");
const mathCorrectAnswers = document.querySelector(".grid-mathCorrectAnswers");
const mathgoodAnswer1 = document.getElementById("answer1Choice1")
const mathgoodAnswer2 = document.getElementById("answer2Choice3")
const mathgoodAnswer3 = document.getElementById("answer3Choice1")
const mathgoodAnswer4 = document.getElementById("answer4Choice2")
const mathgoodAnswer5 = document.getElementById("answer5Choice3")
const filmCorrectAnswers = document.querySelector(".grid-filmCorrectAnswers");
const filmgoodAnswer1 = document.getElementById("answer1Choice1F")
const filmgoodAnswer2 = document.getElementById("answer2Choice3F")
const filmgoodAnswer3 = document.getElementById("answer3Choice1F")
const filmgoodAnswer4 = document.getElementById("answer4Choice2F")
const filmgoodAnswer5 = document.getElementById("answer5Choice3F")
const musicCorrectAnswers = document.querySelector(".grid-musicCorrectAnswers");
const musicgoodAnswer1 = document.getElementById("answer1Choice1M")
const musicgoodAnswer2 = document.getElementById("answer2Choice3M")
const musicgoodAnswer3 = document.getElementById("answer3Choice1M")
const musicgoodAnswer4 = document.getElementById("answer4Choice2M")
const musicgoodAnswer5 = document.getElementById("answer5Choice3M")

//entering the player's name
yourName.addEventListener("blur", () => {
    const val = yourName.value;
    val1 = val.toUpperCase();
    playerName.innerHTML = 'Czesc '+val1+' !';
    playerName.style.fontSize = '36px';
    playerName.style.color = 'red';
    categories.style.display = 'block';
    startGame.style.display = 'block';
}
)
//selecting a category
startGame.addEventListener("click", () => {
  let x = document.getElementById("mySelect").selectedIndex;
  if (x==0) {
    mathQuestions.style.display = 'block';
    filmQuestions.style.display = 'none';
    musicQuestions.style.display = 'none';
    result.style.display = 'inline';
    mathCorrectAnswers.style.display = 'none';
    filmCorrectAnswers.style.display = 'none';
    musicCorrectAnswers.style.display = 'none';
  }
  else if (x==1) {
    mathQuestions.style.display = 'none';
    filmQuestions.style.display = 'block';
    musicQuestions.style.display = 'none';
    result.style.display = 'inline';
    mathCorrectAnswers.style.display = 'none';
    filmCorrectAnswers.style.display = 'none';
    musicCorrectAnswers.style.display = 'none';
  }
  else {
    mathQuestions.style.display = 'none';
    filmQuestions.style.display = 'none';
    musicQuestions.style.display = 'block';
    result.style.display = 'inline';
    mathCorrectAnswers.style.display = 'none';
    filmCorrectAnswers.style.display = 'none';
    musicCorrectAnswers.style.display = 'none';
  }
})
//answer choice
result.addEventListener("click", () => {
  let x = document.getElementById("mySelect").selectedIndex
  if (x==0) {
    mathCorrectAnswers.style.display = 'grid';
    filmQuestions.style.display = 'none';
    musicQuestions.style.display = 'none';
    mathQuestions.style.display = 'block';
  }
  else if (x==1){
    filmCorrectAnswers.style.display = 'grid'
    musicQuestions.style.display = 'none';
    mathQuestions.style.display = 'none';
    filmQuestions.style.display = 'block';
  }
  else {
    musicCorrectAnswers.style.display = 'grid';
    filmQuestions.style.display = 'none';
    mathQuestions.style.display = 'none';
    musicQuestions.style.display = 'block';
  }  
  }
)
//checking the correctness of the answer
function chackedanswermath1(RadioName) {
    const mathAnswers1 = document.getElementsByName(RadioName)
    for (i = 0; i < mathAnswers1.length; i++) {
      if (mathAnswers1[i].checked) {
        if (mathAnswers1[i].value === mathgoodAnswer1.value ){
       
        document.getElementById('math1CorrectAnswer').value = "1. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('math1CorrectAnswer').value = "1. Zla odpowiedz. Prawidlowa odpowiedz to: a";
      }
      }
    }
  }
function chackedanswermath2(RadioName) {
    const mathAnswers2 = document.getElementsByName(RadioName)
    for (i = 0; i < mathAnswers2.length; i++) {
      if (mathAnswers2[i].checked) {
        if (mathAnswers2[i].value === mathgoodAnswer2.value ){
        
        document.getElementById('math2CorrectAnswer').value = "2. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('math2CorrectAnswer').value = "2. Zla odpowiedz. Prawidlowa odpowiedz to: c";
      }
      }
    }
  }
function chackedanswermath3(RadioName) {
    const mathAnswers3 = document.getElementsByName(RadioName)
    for (i = 0; i < mathAnswers3.length; i++) {
      if (mathAnswers3[i].checked) {
        if (mathAnswers3[i].value === mathgoodAnswer3.value ){
        
        document.getElementById('math3CorrectAnswer').value = "3. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('math3CorrectAnswer').value = "3. Zla odpowiedz. Prawidlowa odpowiedz to: a";
      }
      }
    }
  }
function chackedanswermath4(RadioName) {
    const mathAnswers4 = document.getElementsByName(RadioName)
    for (i = 0; i < mathAnswers4.length; i++) {
      if (mathAnswers4[i].checked) {
        if (mathAnswers4[i].value === mathgoodAnswer4.value ){
       
        document.getElementById('math4CorrectAnswer').value = "4. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('math4CorrectAnswer').value = "4. Zla odpowiedz. Prawidlowa odpowiedz to: b";
      }
      }
    }
  }
function chackedanswermath5(RadioName) {
    const mathAnswers5 = document.getElementsByName(RadioName)
    for (i = 0; i < mathAnswers5.length; i++) {
      if (mathAnswers5[i].checked) {
        if (mathAnswers5[i].value === mathgoodAnswer5.value ){
        
        document.getElementById('math5CorrectAnswer').value = "5. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('math5CorrectAnswer').value = "5. Zla odpowiedz. Prawidlowa odpowiedz to: c";
      }
      }
    }
  }
function chackedanswerfilm1(RadioName) {
    const filmAnswers1 = document.getElementsByName(RadioName)
    for (i = 0; i < filmAnswers1.length; i++) {
      if (filmAnswers1[i].checked) {
        if (filmAnswers1[i].value === filmgoodAnswer1.value ){
       
        document.getElementById('film1CorrectAnswer').value = "1. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('film1CorrectAnswer').value = "1. Zla odpowiedz. Prawidlowa odpowiedz to: a";
      }
      }
    }
  }
function chackedanswerfilm2(RadioName) {
    const filmAnswers2 = document.getElementsByName(RadioName)
    for (i = 0; i < filmAnswers2.length; i++) {
      if (filmAnswers2[i].checked) {
        if (filmAnswers2[i].value === filmgoodAnswer2.value ){
        
        document.getElementById('film2CorrectAnswer').value = "2. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('film2CorrectAnswer').value = "2. Zla odpowiedz. Prawidlowa odpowiedz to: c";
      }
      }
    }
  }
function chackedanswerfilm3(RadioName) {
    const filmAnswers3 = document.getElementsByName(RadioName)
    for (i = 0; i < filmAnswers3.length; i++) {
      if (filmAnswers3[i].checked) {
        if (filmAnswers3[i].value === filmgoodAnswer3.value ){
        
        document.getElementById('film3CorrectAnswer').value = "3. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('film3CorrectAnswer').value = "3. Zla odpowiedz. Prawidlowa odpowiedz to: a";
      }
      }
    }
  }
function chackedanswerfilm4(RadioName) {
    const filmAnswers4 = document.getElementsByName(RadioName)
    for (i = 0; i < filmAnswers4.length; i++) {
      if (filmAnswers4[i].checked) {
        if (filmAnswers4[i].value === filmgoodAnswer4.value ){
       
        document.getElementById('film4CorrectAnswer').value = "4. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('film4CorrectAnswer').value = "4. Zla odpowiedz. Prawidlowa odpowiedz to: b";
      }
      }
    }
  }
function chackedanswerfilm5(RadioName) {
    const filmAnswers5 = document.getElementsByName(RadioName)
    for (i = 0; i < filmAnswers5.length; i++) {
      if (filmAnswers5[i].checked) {
        if (filmAnswers5[i].value === filmgoodAnswer5.value ){
        
        document.getElementById('film5CorrectAnswer').value = "5. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('film5CorrectAnswer').value = "5. Zla odpowiedz. Prawidlowa odpowiedz to: c";
      }
      }
    }
  }
function chackedanswermusic1(RadioName) {
    const musicAnswers1 = document.getElementsByName(RadioName)
    for (i = 0; i < musicAnswers1.length; i++) {
      if (musicAnswers1[i].checked) {
        if (musicAnswers1[i].value === musicgoodAnswer1.value ){
       
        document.getElementById('music1CorrectAnswer').value = "1. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('music1CorrectAnswer').value = "1. Zla odpowiedz. Prawidlowa odpowiedz to: a";
      }
      }
    }
  }
function chackedanswermusic2(RadioName) {
    const musicAnswers2 = document.getElementsByName(RadioName)
    for (i = 0; i < musicAnswers2.length; i++) {
      if (musicAnswers2[i].checked) {
        if (musicAnswers2[i].value === musicgoodAnswer2.value ){
        
        document.getElementById('music2CorrectAnswer').value = "2. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('music2CorrectAnswer').value = "2. Zla odpowiedz. Prawidlowa odpowiedz to: c";
      }
      }
    }
  }
function chackedanswermusic3(RadioName) {
    const musicAnswers3 = document.getElementsByName(RadioName)
    for (i = 0; i < musicAnswers3.length; i++) {
      if (musicAnswers3[i].checked) {
        if (musicAnswers3[i].value === musicgoodAnswer3.value ){
        
        document.getElementById('music3CorrectAnswer').value = "3. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('music3CorrectAnswer').value = "3. Zla odpowiedz. Prawidlowa odpowiedz to: a";
      }
      }
    }
  }
function chackedanswermusic4(RadioName) {
    const musicAnswers4 = document.getElementsByName(RadioName)
    for (i = 0; i < musicAnswers4.length; i++) {
      if (musicAnswers4[i].checked) {
        if (musicAnswers4[i].value === musicgoodAnswer4.value ){
       
        document.getElementById('music4CorrectAnswer').value = "4. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('music4CorrectAnswer').value = "4. Zla odpowiedz. Prawidlowa odpowiedz to: b";
      }
      }
    }
  }
function chackedanswermusic5(RadioName) {
    const musicAnswers5 = document.getElementsByName(RadioName)
    for (i = 0; i < musicAnswers5.length; i++) {
      if (musicAnswers5[i].checked) {
        if (musicAnswers5[i].value === musicgoodAnswer5.value ){
        
        document.getElementById('music5CorrectAnswer').value = "5. Prawidlowa odpowiedz!";
      }
      else {
        document.getElementById('music5CorrectAnswer').value = "5. Zla odpowiedz. Prawidlowa odpowiedz to: c";
      }
      }
    }
  }
