"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, email = _a.email, pass = _a.pass;
    var user = {
        name: name,
        email: email,
        pass: pass,
    };
    return user;
}
exports.default = createUser;
