export class Info {

    data: {
        name: string,
        info: string
    };
    quote: {
        content: string,
        footer: string,
        author: string
    };

    constructor(info: Info) {
        this.data = info.data;
        this.quote = info.quote;
    }

}
