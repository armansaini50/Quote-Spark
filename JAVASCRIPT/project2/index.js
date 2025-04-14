const quote = [
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. — William James",
    "Never bend your head. Always hold it high. Look the world straight in the eye. — Helen Keller",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
    "When you have a dream, you've got to grab it and never let go. — Carol Burnett",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. — Jimmy Dean",
    "No matter what you're going through, there's a light at the end of the tunnel. — Demi Lovato",
    "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome. — William James",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. — Albert Einstein",
    "Just don’t give up trying to do what you really want to do. — Ella Fitzgerald",
    "Try to be a rainbow in someone else's cloud. — Maya Angelou",
    "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
    "The bad news is time flies. The good news is you’re the pilot. — Michael Altshuler",
    "If you can dream it, you can do it. — Walt Disney",
    "Success is getting what you want. Happiness is wanting what you get. — Dale Carnegie",
    "Only those who dare to fail greatly can ever achieve greatly. — Robert F. Kennedy",
    "Don't count the days, make the days count. — Muhammad Ali",
    "Do what you can, with what you have, where you are. — Theodore Roosevelt",
    "The secret of getting ahead is getting started. — Mark Twain",
    "You don't have to be great to start, but you have to start to be great. — Zig Ziglar"
  ];
  const colors = [
    "rgb(255, 99, 132)",
    "rgb(54, 162, 235)",
    "rgb(255, 206, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(255, 159, 64)",
    "rgb(199, 199, 199)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 127)",
    "rgb(0, 128, 255)",
    "rgb(255, 105, 180)",
    "rgb(60, 179, 113)",
    "rgb(123, 104, 238)",
    "rgb(255, 140, 0)",
    "rgb(32, 178, 170)",
    "rgb(147, 112, 219)",
    "rgb(70, 130, 180)",
    "rgb(240, 128, 128)",
    "rgb(46, 139, 87)",
    "rgb(218, 112, 214)"
  ];
    
    function changeColor() {
    const body = document.querySelector('body');
    const index = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[index];
    }
    setInterval(changeColor, 2000);
   
 




    function generatQuote(){
    const team = document.getElementById(`quote`);
    const index = Math.floor(Math.random()*quote.length);
    team.innerHTML = quote[index];
    }
    setInterval(generatQuote,2000);