import Entity, { ICreateEntity } from "./Entity";
import { IAggregateRoot, IEvent } from "./index";

export default class AggregateRoot<TEventData> extends Entity
  implements IAggregateRoot<TEventData> {
  private _events: Array<IEvent<TEventData>>;

  constructor(create: ICreateEntity) {
    super(create);
    this._events = [];
  }

  get enqueuedEvents() {
    return this._events;
  }

  public publishEvent(event: IEvent<TEventData>) {
    this._events.push(event);
  }
}
