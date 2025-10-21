
export type Source = `/${string}.${string}` | `./${string}.${string}`;

type Contact = {
    label: string;
    content: string | number;
    icon?: string | Source;
    link?: string;
}

type Remote = "remote";
type Year = number;

interface TimeInterval {
    from: Year;
    to: Year;
}

type WorkExperience = {
    where: string | Remote;
    duration: number | string;
    stage: boolean;
    when: TimeInterval;
    name: string;
};



export interface Avatar {
    image: Source | string;
    label?: string;
}


export interface Profile {
    name: string;
    surname: string;
    age: number;
    contacts: Contact[];
    avatar: Avatar;
    workExperience: WorkExperience[];
    aboutMe: string;
}