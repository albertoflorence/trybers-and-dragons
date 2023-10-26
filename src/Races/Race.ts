export default abstract class Race {
  constructor(
    public readonly name: string,
    public readonly dexterity: number,
  ) {
  }

  static createdRacesInstances(): never {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
