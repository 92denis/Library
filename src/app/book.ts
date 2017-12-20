export class Book {
    public id: number;
    public name: string;
    public image: string;
    public genre: string;
    public description: string;
    public links: string[];

    constructor() {
        this.links = [];
    }
}
