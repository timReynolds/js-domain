import * as uuid from "uuid";

import Sut, { ICreateEntity } from "./Entity";

describe("Event", () => {
  test("When given a create entity command, should map to entity", () => {
    // Arrange
    const createEntity: ICreateEntity = {
      id: uuid()
    };

    // Act
    const result = new Sut(createEntity);

    // Assert
    expect(result.id).toBe(createEntity.id);
  });

  test("When not given values in command, should map defaults", () => {
    // Arrange
    // Act
    const result = new Sut({});

    // Assert
    expect(result.id).toEqual(expect.anything());
  });
});
