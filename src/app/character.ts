export class Character {

  constructor(
    public id: string,
    public name: string,
    public gender: string,
    public appearance: string,
    public bio: string,
    public created: Date,
    public inventory: Array<string>
  ) {}
}
