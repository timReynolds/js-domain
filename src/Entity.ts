import { Moment } from "moment";
import * as uuid from "uuid";

import { IIdentity } from "./index";
import ValueObject from "./ValueObject";

export interface ICreateEntity {
  id?: string;
  createdOn?: Moment;
}

export default class Entity extends ValueObject implements IIdentity {
  private _id: string;

  constructor(create: ICreateEntity) {
    super(create);
    this._id = create.id || uuid();
  }

  get id() {
    return this._id;
  }
}
