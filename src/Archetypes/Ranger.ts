import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static numberOfCreatedInstances = 0;
  _energyType: EnergyType = 'stamina';

  constructor(
    name: string,
    special = 0,
    cost = 0,
  ) {
    super(name, special, cost);
    Ranger.numberOfCreatedInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.numberOfCreatedInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
