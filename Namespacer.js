'use strict';

function Namespacer(namespace) {
    this.namespace = namespace;
}

Namespacer.prototype.get = function(events) {
    var self = this;
    var eventArray = events.split(' ');
    eventArray = eventArray.map(function(eventName) {
        return eventName + '.' + self.namespace.replace('-', '_');
    });

    return eventArray.join(' ');
};

module.exports = Namespacer;
