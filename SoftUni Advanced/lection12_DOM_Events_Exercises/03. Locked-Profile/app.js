function lockedProfile() {
  Array.from(document.querySelectorAll(".profile button")).forEach((button) =>
    button.addEventListener("click", onClick)
  );

  function onClick(ev) {
    let profile = ev.target.parentElement;
    let isUnlocked = profile.querySelectorAll("input[type='radio']")[1].checked;
    let hidden = profile.querySelector("div");

    if (isUnlocked) {
      if (ev.target.textContent === "Show more") {
        hidden.style.display = "block";
        ev.target.textContent = "Hide it";
      } else if (ev.target.textContent === "Hide it") {
        hidden.style.display = "none";
        ev.target.textContent = "Show more";
      }
    }
  }
}
