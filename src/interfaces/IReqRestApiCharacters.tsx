export interface IReqRestApiCharacters {
    info:    IInfo;
    results: ICharacter[];
}

export interface IInfo {
    count: number;
    pages: number;
    next:  string;
    prev:  string;
}

export interface ICharacter {
    id:       number;
    name:     string;
    status:   IStatus;
    species:  string;
    type:     string;
    gender:   IGender;
    origin:   ILocation;
    location: ILocation;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export enum IGender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface ILocation {
    name: string;
    url:  string;
}

export enum IStatus {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}