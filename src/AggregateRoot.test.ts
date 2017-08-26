import Sut from "./AggregateRoot";
import Event from "./Event";

interface ITestEventData {
  test: string;
}

describe("AggregateRoot", () => {
  describe("eventing", () => {
    test("When created, should not return any events", () => {
      // Arrange
      // Act
      const result = new Sut({});

      // Assert
      expect(result.enqueuedEvents.length).toBe(0);
    });

    test("When an event has been published, should return event", () => {
      // Arrange
      const event = new Event<ITestEventData>({
        type: 'test',
        data: {
          test: 'test'
        }
      });

      // Act
      const result = new Sut({});
      result.publishEvent(event);

      // Assert
      expect(result.enqueuedEvents.length).toBe(1);
    });
  });
});
