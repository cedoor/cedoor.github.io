export class Skill {

    color: string;
    list: { name: string, capacity: string }[];

    constructor(skill: Skill) {
        this.color = skill.color;
        this.list = skill.list;
    }

}
