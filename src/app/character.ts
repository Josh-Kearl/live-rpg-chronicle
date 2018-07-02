export class Character {

  constructor(
    private id: number,
    public name: string,
    public gender: string,
    public appearance: string,
    public bio: string,
    public created: Date,
    public inventory: Array<string>
  ) {}
}
