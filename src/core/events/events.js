/**
 *
 * @public
 * @namespace Events
 * @description pub sub design pattern
 *
 */

const Events = {
  topics: {},

  subscribe(topic, listener) {
    // create the topic if not yet created
    if (!this.topics[ topic ]) {
      this.topics[ topic ] = [];
    }

    // add the listener
    this.topics[ topic ].push(listener);
  },

  publish(topic, data) {
    // return if the topic doesn't exist, or there are no listeners
    if (!this.topics[ topic ] || this.topics[ topic ].length < 1) {
      return;
    }

    // send the event to all listeners
    this.topics[ topic ].forEach((listener) => {
      listener = listener(data || {});
    });
  }
};

export default Events;