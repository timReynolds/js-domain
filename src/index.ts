import { Moment } from "moment";

import AggregateRoot from "./AggregateRoot";
import Entity from "./Entity";
import Event from "./Event";
import ValueObject from "./ValueObject";

// Interfaces that we want to consume outside the package
export interface IEvent<TEventData> {
  id: string;
  correlationId: string;
  raisedOn: Moment;
  type: string;
  data: TEventData;
};

export interface IIdentity {
  id: string;
};

export interface ICreatedOn {
  createdOn: Moment;
};

export interface IAggregateRoot<TEventData> {
  enqueuedEvents: Array<IEvent<TEventData>>;
  publishEvent(event: IEvent<TEventData>): void;
};

export default {
  ValueObject,
  Entity,
  AggregateRoot,
  Event
};
