import { Moment, utc } from "moment";
import { ICreatedOn } from "./index";

export interface ICreateValueObject {
  createdOn?: Moment;
}

export default class ValueObject implements ICreatedOn {
  private _createdOn: Moment;

  constructor(create: ICreateValueObject) {
    this._createdOn = create.createdOn || utc();
  }

  get createdOn() {
    return this._createdOn;
  }
}
