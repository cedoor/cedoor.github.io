export class Post {

    name: string;
    date: string;
    content: string;

    constructor(post: Post) {
        this.name = post.name;
        this.date = post.date;
        this.content = post.content;
    }

}
