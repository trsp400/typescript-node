"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showUser = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function showUser(request, response) {
    var user = CreateUser_1.default({
        name: 'Thiago',
        email: 'roblesthiago38@gmail.com',
        pass: '123',
        techs: ['Node', 'React', {
                title: 'Javascript',
                exp: 100
            }],
    });
    return response.json({ user: user });
}
exports.showUser = showUser;
