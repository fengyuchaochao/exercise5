class Base {
    constructor () {
        this.handler = [];
    }
    on (event, callback) {
        this.handler.push({
            event: event,
            callback: callback
        });
    }
    trigger (event, params) {
        this.handler.forEach((item) => {
            if (item.event === event) {
                item.callback.call(this, params);
            }
        })

    }
}

module.exports = Base