export class Profile {

    name: string;
    email: string;
    image: string;
    width: number;

    constructor(profile: Profile) {
        this.name = profile.name;
        this.email = profile.email;
        this.image = profile.image;
        this.width = profile.width;
    }

}
