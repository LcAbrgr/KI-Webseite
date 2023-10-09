function showMore(id) {
  const SM = "SM" + id;
  const SL = "SL" + id;
  document.getElementById(id).style.display = "block";
  document.getElementById(SM).style.display = "none";
  document.getElementById(SL).style.display = "block";
}

function showLess(id) {
  const SM = "SM" + id;
  const SL = "SL" + id;
  document.getElementById(id).style.display = "none";
  document.getElementById(SM).style.display = "block";
  document.getElementById(SL).style.display = "none";
}
