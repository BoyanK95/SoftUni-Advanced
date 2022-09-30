function getArticleGenerator(input) {
  let articles = input;

  return () => {
    if (articles.length > 0) {
      let contetDiv = document.getElementById("content");
      let article = document.createElement("article");
      let currentText = articles.shift();
      article.innerText = currentText;
      contetDiv.appendChild(article);
    }
  };
}
