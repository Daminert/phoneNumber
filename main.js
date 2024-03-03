class Landline {
  constructor() {
    this.subscribers = new Set();
    this.observers = [];
  }

  addSubscriber(subscriber) {
    this.subscribers.add(subscriber);
  }

  removeSubscriber(subscriber) {
    this.subscribers.delete(subscriber);
  }

  callRecipient(recipient) {
    if (this.subscribers.has(recipient)) {
      this.notifyObservers(recipient);
    }
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(recipient) {
    this.observers.forEach((observer) => observer.notify(recipient));
  }
}

class Observer {
  notify(recipient) {
    // Base class method, should be overridden by subclasses
  }
}

class PrintRecipientObserver extends Observer {
  notify(recipient) {
    console.log(`Recipient: ${recipient}`);
  }
}

class PrintCallingObserver extends Observer {
  notify(recipient) {
    console.log(`Now calling: ${recipient}`);
  }
}

// Usage
const landline = new Landline();
landline.addObserver(new PrintRecipientObserver());
landline.addObserver(new PrintCallingObserver());

landline.addSubscriber("Alice");
landline.addSubscriber("Bob");

landline.callRecipient("Alice");
landline.callRecipient("Bob");
landline.callRecipient("Eve"); // This should not notify observers since the recipient is not added
