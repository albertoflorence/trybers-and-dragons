import Race from './Race';

export default class Halfling extends Race {
  static numberOfCreatedInstances = 0;
  _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.numberOfCreatedInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.numberOfCreatedInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
