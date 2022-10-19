class Story{
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this.likes = [];
    }
    get likes(){
        if (this.likes.length === 0) {
            return `${this.title} has 0 likes`
        }else if (this.likes.length === 1) {
            return `${username} likes this story!"`
        }else{
            return `"{username of the first person that liked the story} and {likes - 1} others like this story!"`
        }
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

