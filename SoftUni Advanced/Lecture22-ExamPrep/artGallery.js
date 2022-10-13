class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }
  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();
    let isInTheArr = false;

    if (!this.possibleArticles[articleModel]) {
      throw new Error(`This article model is not included in this gallery!`);
    }

    for (const el of this.listOfArticles) {
      if (el.articleName === articleName && el.articleModel === articleModel) {
        el.quantity += Number(quantity);
        isInTheArr = true;
      }
    }
    if (!isInTheArr) {
      this.listOfArticles.push({ articleModel, articleName, quantity });
    }
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    for (const guest of this.guests) {
      if (guest.guestName === guestName) {
        throw new Error(`${guestName} has already been invited.`);
      }
    }
    let object = { guestName, points: 0, purchaseArticle: 0 };
    switch (personality) {
      case "Vip":
        object.points = 500;
        break;
      case "Middle":
        object.points = 250;
        break;
      default:
        object.points = 50;
        break;
    }
    this.guests.push(object)

    return `You have successfully invited ${guestName}`
  }

  buyArticle(articleModel, articleName, guestName) {
    let article;
    let guest;

    let isArticleInTheArr = false;
    

    for (const el of this.listOfArticles) {
        if (el.articleName !== articleName || el.articleModel !== articleModel) {
            isArticleInTheArr = false
        }else{
            article = el;
            isArticleInTheArr = true;
            break;
        }
    }
    if (!isArticleInTheArr) {
        throw new Error(`This article is not found.`);
    }
    if (article.quantity === 0) {
        throw new Error (`The ${articleName} is not available.`)
    }

    let isGuestInTheArr = false;

    for (let el  of this.guests) {
        if (el.guestName !== guestName) {
            isGuestInTheArr = false
        }else{
            isGuestInTheArr = true
            guest = el;
            break;
        }
    }

    if (!isGuestInTheArr) {
        return "This guest is not invited.";
    }

    if (guest.points < this.possibleArticles[articleModel]) {
       return  "You need to more points to purchase the article.";
    }else{
        article.quantity --;
        guest.points -= this.possibleArticles[articleModel];
        guest.purchaseArticle++;
    }
    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`

  }
  showGalleryInfo(criteria) {
    if (criteria) {
        
    }
  }
}

const artGallery = new ArtGallery('Curtis Mayfield');

artGallery.addArticle('picture', 'Mona Liza', 3);

artGallery.addArticle('Item', 'Ancient vase', 2);

artGallery.addArticle('picture', 'Mona Liza', 1);

artGallery.inviteGuest('John', 'Vip');

artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'))
