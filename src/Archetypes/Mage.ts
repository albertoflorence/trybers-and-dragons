import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static numberOfCreatedInstances = 0;
  _energyType: EnergyType = 'mana';

  constructor(
    name: string,
    special = 0,
    cost = 0,
  ) {
    super(name, special, cost);
    Mage.numberOfCreatedInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.numberOfCreatedInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
