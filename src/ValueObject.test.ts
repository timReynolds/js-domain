import { utc } from "moment";

import Sut, { ICreateValueObject } from "./ValueObject";

describe("ValueObject", () => {
  test("When given a create command, should map to value object", () => {
    // Arrange
    const create: ICreateValueObject = {
      createdOn: utc()
    };

    // Act
    const result = new Sut(create);

    // Assert
    expect(result.createdOn).toBe(create.createdOn);
  });

  test("When not given createdOn, should default", () => {
    // Arrange
    // Act
    const result = new Sut({});

    // Assert
    expect(result.createdOn).toEqual(expect.anything());
  });
});
