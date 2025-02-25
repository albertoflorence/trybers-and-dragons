import { EnergyType } from '../Energy';

export default abstract class Archetype {
  constructor(
    public readonly name: string,
    public readonly special: number = 0,
    public readonly cost: number = 0,
  ) {}

  static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}
