const allLinks = [
  "https://well-games.com/",
  "https://well-games.com",
  "https://well-games.com/index.html",
  "https://well-games.com/team.html",
  "https://well-games.com/chomp.html",
  "https://well-games.com/404.html",
  "https://well-games.com/badges.html",
  "https://well-games.com/contact.html",
  "https://well-games.com/games.html",
  "https://well-games.com/indexnew.html",
  "https://well-games.com/indexnewyear.html",
  "https://well-games.com/policy.html",
  "https://well-games.com/sooon.html",
  "https://well-games.com/policy/blockyrushp.html",
  "https://well-games.com/games/blockyrush.html",
  "https://well-games.com/chomp.html",
  "https://well-games.com/skydice.html"
];

if (!allLinks.some(link => window.location.href.includes(link))) {
  window.location.href = "https://well-games.com/404.html";
}
