"use strict";

let scores = [];
let players = [];

const displayScores = (scores, scoresString) => {
  let total = 0;
  scores.map((i) => (total += i));

  const avgScore = total / scores.length;
  $("#avr_score").text(avgScore);

  let displayText = "";
  for (let i = 0; i < scores.length; i++) {
    displayText += scoresString[i] + "\n";
  }
  $("#scores").val(displayText);
};

$(document).ready(() => {
  $("#add_button").click(() => {
    
    const firstName = $("#first_name").val();
    const lastName = $("#last_name").val();
    const score = Number($("#score").val());

    if (!firstName || !lastName || isNaN(score)) {
      alert("Please enter valid data.");
      return;
    }

    // Receive the score value as a string, so we use the 'Number' method to convert it into a number.
    scores.push(score);
    const playerStr = firstName + ", " + lastName + " : " + score;
    players.push(playerStr);
    displayScores(scores, players);

    //  prepare add form for next entry
    $("#first_name").val("");
    $("#last_name").val("");
    $("#score").val("");
    $("#first_name").focus();
  }); // end click()

  $("#clear_button").click(() => {
    players = [];
    scores = [];

    // It will remove the score data from the web page
    $("#avr_score").text("");
    $("#scores").val("");
    $("#first_name").focus();
  }); // end click()

  $("#sort_button").click(() => {
    players.sort((a, b) => {
      const lastNameA = a.split(" ")[1];
      const lastNameB = b.split(" ")[1];
      return lastNameA.localeCompare(lastNameB);
    });
    displayScores(scores, players);
  }); // end click()

  $("#first_name").focus();
}); // end ready()
