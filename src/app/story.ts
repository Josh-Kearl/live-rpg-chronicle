import { Character } from "./character";

export class Story {

  constructor(
    public title: string,
    public character: Character,
    public plot: Array<string>,
    public created: Date,
  ) {}
}
