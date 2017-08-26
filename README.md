JS DDD Classes
=========================

[![Build Status](https://travis-ci.org/timReynolds/js-domain.svg?branch=master)](https://travis-ci.org/timReynolds/js-domain)
[![Coverage Status](https://coveralls.io/repos/github/timReynolds/js-domain/badge.svg?branch=master)](https://coveralls.io/github/timReynolds/js-domain?branch=master)

A set of base classes used to implement [DDD](https://en.wikipedia.org/wiki/Domain-driven_design) style [domain model](https://martinfowler.com/eaaCatalog/domainModel.html) pattern in JavaScript.

# Classes

Below outlines the classes provided in this package and the functionality encapsulated in each.

## Value Object
> Objects that matter only as the combination of their attributes. Two value objects with the same values for all their attributes are considered equal.

Provides a createdOn date which is can either be set via the constructor or defaults to Moment utc.


## Entity
> Objects that have a distinct identity that runs through time and different representations.

Extends ```ValueObject``` but provides an id to distinguishes the objects identity throughout time. Defaulted to a v4 GUID when not provided.

## Aggregate Root
> Cluster of domain objects that can be treated as a single unit and the basic element of transfer of data storage.

Extends ```Entity``` with the additional responsibility of tracking and queuing ```Events```.

Within these classes the Aggregate takes responsibility for eventing for any entity it manages. Events are stored within the class and made accessible vis the ```enqueuedEvents``` method. The advantages of this approach are;

* Class isn't coupled to a publisher
* Events can be batched processed
* Events can be encapsulated within a transactional boundary

## Event
> Captures the memory of something interesting which affects the domain

Used to provide a consistent interface for events from the domain expecting a ```type``` and ```data``` properties via the constructor. The following common event properties are default unless provided;

* id
* correlationId
* raisedOn

Intended to be extended by specific event classes that include data validation.

#Example Usage

All classes are exposed at root level.

```
const { ValueObject } = require('@reynolds/domain');
class Example extends ValueObject {
```

As are typescript declarations

```
const { ICreatedOn } = require('@reynolds/domain');
class Example implements ICreatedOn {}
```
