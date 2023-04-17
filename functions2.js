var aud = document.getElementById("pupsong");
          
aud.ontimeupdate = function() {myFunction()};

function myFunction() {
  if (aud.currentTime < 11 ) {
      prevlyric = " - ";
      showlyric = "[Lyrics Start]";
      nextlyric = "Sintang Paaralan";
  }
  if (aud.currentTime > 11 && aud.currentTime < 15) {
      prevlyric = "[Lyrics Start]";
      showlyric = "Sintang Paaralan";
      nextlyric = "Tanglaw ka ng bayan";
  }
  if (aud.currentTime > 15 && aud.currentTime < 18) {
      prevlyric = "Sintang Paaralan";
      showlyric = "Tanglaw ka ng bayan";
      nextlyric = "Pandayan ng isip ng kabataan";
  }
  if (aud.currentTime > 18 && aud.currentTime < 23) {
      prevlyric = "Tanglaw ka ng bayan";
      showlyric = "Pandayan ng isip ng kabataan";
      nextlyric = "Kami ay dumating nang salat sa yaman";
  }
  if (aud.currentTime > 23 && aud.currentTime < 29) {
      prevlyric = "Pandayan ng isip ng kabataan";
      showlyric = "Kami ay dumating nang salat sa yaman";
      nextlyric = "Hanap na dunong ay iyong alay";
  }
  if (aud.currentTime > 29 && aud.currentTime < 34) {
      prevlyric = "Kami ay dumating nang salat sa yaman";
      showlyric = "Hanap na dunong ay iyong alay";
      nextlyric = "Ang layunin mong makatao";
  }
  if (aud.currentTime > 34 && aud.currentTime < 40) {
      prevlyric = "Hanap na dunong ay iyong alay";
      showlyric = "Ang layunin mong makatao";
      nextlyric = "Dinarangal ang Pilipino";
  }
  if (aud.currentTime > 40 && aud.currentTime < 46) {
      prevlyric = "Ang layunin mong makatao";
      showlyric = "Dinarangal ang Pilipino";
      nextlyric = "Ang iyong aral, diwa, adhikang taglay";
  }
  if (aud.currentTime > 46 && aud.currentTime < 52) {
      prevlyric = "Dinarangal ang Pilipino";
      showlyric = "Ang iyong aral, diwa, adhikang taglay";
      nextlyric = "PUP, aming gabay";
  }
  if (aud.currentTime > 52 && aud.currentTime < 55) {
      prevlyric = "Ang iyong aral, diwa, adhikang taglay";
      showlyric = "PUP, aming gabay";
      nextlyric = "Paaralang dakila";
  }
  if (aud.currentTime > 55 && aud.currentTime < 62) {
      prevlyric = "PUP, aming gabay";
      showlyric = "Paaralang dakila";
      nextlyric = "PUP, pinagpala";
  }
  if (aud.currentTime > 62 && aud.currentTime < 66) {
      prevlyric = "Paaralang dakila";
      showlyric = "PUP, pinagpala";
      nextlyric = "Gagamitin ang karunungan";
  }
  if (aud.currentTime > 66 && aud.currentTime < 73) {
      prevlyric = "PUP, pinagpala";
      showlyric = "Gagamitin ang karunungan";
      nextlyric = "Mula sa iyo, para sa bayan";
  }
  if (aud.currentTime > 73 && aud.currentTime < 80) {
      prevlyric = "Gagamitin ang karunungan";
      showlyric = "Mula sa iyo, para sa bayan";
      nextlyric = "Ang iyong aral, diwa, adhikang taglay";
  }
  if (aud.currentTime > 80 && aud.currentTime < 85) {
      prevlyric = "Mula sa iyo, para sa bayan";
      showlyric = "Ang iyong aral, diwa, adhikang taglay";
      nextlyric = "PUP, aming gabay";
  }
  if (aud.currentTime > 85 && aud.currentTime < 89) {
      prevlyric = "Ang iyong aral, diwa, adhikang taglay";
      showlyric = "PUP, aming gabay";
      nextlyric = "Paaralang dakila";
  }
  if (aud.currentTime > 89 && aud.currentTime < 95) {
      prevlyric = "PUP, aming gabay";
      showlyric = "Paaralang dakila";
      nextlyric = "PUP, pinagpala";
  }
  if (aud.currentTime > 95 && aud.currentTime < 100) {
      prevlyric = "Paaralang dakila";
      showlyric = "PUP, pinagpala";
      nextlyric = "[Lyrics End]";
  }
  if (aud.currentTime > 100 && aud.currentTime < 110) {
      prevlyric = "PUP, pinagpala";
      showlyric = "[Lyrics End]";
      nextlyric = "-";

  }
  document.getElementById("pLyric").innerHTML = prevlyric;
  document.getElementById("Lyric").innerHTML = showlyric;
  document.getElementById("nLyric").innerHTML = nextlyric;
}