class Story{
    #comments = [];
    #likes = [];
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
    }
    get likes(){
        if (this.#likes.length === 0) {
            return `${this.title} has 0 likes`
        }
        if (this.#likes.length === 1) {
            return `${this.likes[0]} likes this story!"`
        }else{
            return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!"`
        }
    }

    like (username){
        if (!this.likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (username == this.creator) {
            throw new Error("You can't like your own story!")
        }
        this.#likes = this.#likes.filter(u => u != username);
        return `${username} liked ${this.title}!`
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));

