function Base() {

}
Base.extend = function (target) {
    for (let key in target) {
        this.key = target[key];
    }
    class Parent {
        constructor () {
            Object.assign(this, target)
        }
    }
    return Parent;
};

module.exports = Base