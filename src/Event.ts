import { Moment, utc } from "moment";
import * as uuid from "uuid";

import { IEvent } from "./index";

export interface ICreateEvent<TEventData> {
  id?: string;
  correlationId?: string;
  raisedOn?: Moment;
  type: string;
  data: TEventData;
}

export default class Event<TEventData> implements IEvent<TEventData> {
  private _id: string;
  private _correlationId: string;
  private _raisedOn: Moment;
  private _type: string;
  private _data: TEventData;

  constructor(createEvent: ICreateEvent<TEventData>) {
    this._id = createEvent.id || uuid();
    this._correlationId = createEvent.correlationId || uuid();
    this._raisedOn = createEvent.raisedOn || utc();
    this._type = createEvent.type;
    this._data = createEvent.data;
  }

  get id() {
    return this._id;
  }

  get correlationId() {
    return this._correlationId;
  }

  get raisedOn() {
    return this._raisedOn;
  }

  get type() {
    return this._type;
  }

  get data() {
    return this._data;
  }
}
