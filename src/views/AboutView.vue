<template>
  <div class="about text-center">
    <strong id="heading">About.</strong>
    <div class="top-section">
      <p class="text-center title">
        Born 10 January 2000. Raised in Cape Town, South Africa.
      </p>
      <p class="text-center fs-2 fw-bolder" id="letter">
        I am <span class="letter">L</span>yle <span class="letter">B</span>rown.
      </p>
      <p class="text-center">
        I am self-motivated, a team player with strong organizational and
        interpersonal skills. Always looking to learn new skills, take on extra
        responsibilities, and grow professionally
      </p>
      <p class="text-center">
        I am passionate about technology. I fell in love with coding when I got
        small taste of it at University.My favourite part is being able to solve
        tricky issues to produce something beautiful.
      </p>
      <p class="text-center">
        Coding itself teaches you valuable life lessons such as perseverance,
        patience, discipline and out-of-the-box thinking.
      </p>
      <p class="text-center">I am fluent in English and Afrikaans.</p>
      <p class="text-center">
        I enjoy a cup of tea (no milk, no sugar), watching a period piece film
        or series. I love cricket, Formula 1, and rugby. I would happily be paid
        in Monaco Grand Prix tickets!
      </p>
    </div>
    <br />
    <h1 class="board">My 'Me' Board</h1>
    <div class="hobbie-board">
      <img
        src="https://i.postimg.cc/D0vjX8x2/Untitled-design.png"
        alt="My Me Board"
      />
    </div>
    <div id="message">
      <p>The board above provides you with a better idea of , well .... Me.</p>
      <p>
        The pictures depict a few of my favourite artists, my hobbies, favourite
        books and quotes! :)
      </p>
    </div>
  </div>
</template>

<style scoped>
#heading {
  font-family: "Caprasimo", cursive;
  font-size: 80px;
  text-align: center;
}

#message {
  color: #45a245;
  font-weight: bold;
  text-align: center;
}
.board {
  font-size: 50px;
  font-family: "Caprasimo", cursive;
  color: black;
  text-align: center;
}

img {
  width: 100%;
  height: 60%;
}

#letter {
  color: #45a245;
}
.top-section,
.hobbie-board {
  border: 4px solid black;
  border-radius: 15px;
  margin: 2%;
  padding: 2%;
}
p {
  border-radius: 15px;
}
</style>
