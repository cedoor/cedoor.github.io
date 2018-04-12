export class Project {

    name: string;
    link: string;

    constructor(project: Project) {
        this.name = project.name;
        this.link = project.link;
    }

}
