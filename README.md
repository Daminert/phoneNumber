# Landline Telephone System

This JavaScript code simulates a basic landline telephone system with the ability to add subscribers, make calls, and notify observers about the call events.

## Classes

### `Landline`
- Represents a landline telephone system.
- Methods:
  - `addSubscriber(subscriber)`: Adds a subscriber to the system.
  - `removeSubscriber(subscriber)`: Removes a subscriber from the system.
  - `callRecipient(recipient)`: Initiates a call to the specified recipient.
  - `addObserver(observer)`: Adds an observer to the system.
  - `removeObserver(observer)`: Removes an observer from the system.
  - `notifyObservers(recipient)`: Notifies all observers about a call event.

### `Observer`
- Base class for observers.
- Methods:
  - `notify(recipient)`: Base method to be overridden by subclasses.

### `PrintRecipientObserver`
- Subclass of `Observer` that prints the recipient when notified about a call event.

### `PrintCallingObserver`
- Subclass of `Observer` that prints the dialing action when notified about a call event.

## Usage

```javascript
const landline = new Landline();
landline.addObserver(new PrintRecipientObserver());
landline.addObserver(new PrintCallingObserver());

landline.addSubscriber("Alice");
landline.addSubscriber("Bob");

landline.callRecipient("Alice");
landline.callRecipient("Bob");
landline.callRecipient("Eve"); // This should not notify observers since the recipient is not added
