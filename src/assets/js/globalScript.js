module.exports.Helpers = class {
    constructor() { }

    toggleVisibility(el, display="block") {
        let visibility = el.style.display;
        if (visibility != "none") el.style.display = "none";
        else el.style.display = display;
    }
}