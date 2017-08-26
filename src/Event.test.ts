import { utc } from "moment";
import * as uuid from "uuid";

import Sut, { ICreateEvent } from "./Event";

interface ITestEventData {
  test: string;
}

describe("Event", () => {
  test("When given a create event command, should map to event", () => {
    // Arrange
    const createEvent: ICreateEvent<ITestEventData> = {
      correlationId: uuid(),
      data: {
        test: "test event data"
      },
      id: uuid(),
      raisedOn: utc(),
      type: "test-type"
    };

    // Act
    const result = new Sut(createEvent);

    // Assert
    expect(result.id).toBe(createEvent.id);
    expect(result.correlationId).toBe(createEvent.correlationId);
    expect(result.raisedOn).toBe(createEvent.raisedOn);
    expect(result.type).toBe(createEvent.type);
    expect(result.data).toBe(createEvent.data);
  });

  test("When not given values, should map defaults", () => {
    // Arrange
    const createEvent: ICreateEvent<ITestEventData> = {
      type: "test-type",
      data: {
        test: "test event data"
      }
    };
    // Act
    const result = new Sut(createEvent);

    // Assert
    expect(result.id).toEqual(expect.anything());
    expect(result.correlationId).toEqual(expect.anything());
    expect(result.raisedOn).toEqual(expect.anything());
  });
});
