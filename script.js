let mood = "standard";

function changeMood(type) {
  mood = type;

  const image = document.getElementById("tigoImage");
  const title = document.getElementById("moodTitle");
  const text = document.getElementById("moodText");
  const state = document.getElementById("currentState");

  if (mood === "folk") {
    image.src = "Folk.png";
    title.textContent = "Tigo feels bored.";
    text.textContent = "Folk music makes Tigo sleepy and uninterested.";
    state.textContent = "Bored";
  }

  else if (mood === "rnb") {
    image.src = "RNB.png";
    title.textContent = "Tigo feels relaxed.";
    text.textContent = "R&B makes Tigo calm and comfortable.";
    state.textContent = "Relaxed";
  }

  else if (mood === "hiphop") {
    image.src = "HipHop.png";
    title.textContent = "Tigo feels excited.";
    text.textContent = "Hip-Hop gives Tigo energy and makes him want to move.";
    state.textContent = "Excited";
  }

  console.log("Current mood:", mood);
}