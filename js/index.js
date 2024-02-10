function handleRadioClick(radio) {
  document.querySelectorAll(".radioDiv").forEach((element) => {
    element.classList.remove("showDescription");
    element.classList.remove("selectedBorder");
  });
  document.querySelector(".finalPayment").style.pointerEvents = "all";
  document.querySelector("." + radio).classList.add("showDescription");
  document.querySelector("." + radio).classList.add("selectedBorder");
  if (radio === "one") {
    document.querySelector(".total span").innerHTML = "10";
  } else if (radio === "two") {
    document.querySelector(".total span").innerHTML = "18";
  } else {
    document.querySelector(".total span").innerHTML = "24";
  }
}
