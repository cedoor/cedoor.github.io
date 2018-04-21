export class Profile {

    name: string;
    email: string;
    image: string;

    constructor(profile: Profile) {
        this.name = profile.name;
        this.email = profile.email;
        this.image = profile.image;
    }

}
