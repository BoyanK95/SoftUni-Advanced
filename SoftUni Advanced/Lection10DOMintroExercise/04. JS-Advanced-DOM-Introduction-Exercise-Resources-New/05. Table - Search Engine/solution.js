function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  let tableRows = document.querySelectorAll("tbody tr");
  let searchText = document.getElementById("searchField");

  function onClick() {
    for (let table of tableRows) {
      table.classList.remove("select");
      if (table.innerHTML.includes(searchText.value)) {
        table.className = "select";
      }
    }
  }
}
