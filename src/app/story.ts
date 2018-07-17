import { Character } from "./character";

export class Story {

  constructor(
    public id: string,
    public title: string,
    // public character: Character,
    public plot: Array<object>,
    message?: string,
    
  ) {}
}
