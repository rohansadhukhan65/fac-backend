"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testRoute_1 = __importDefault(require("./routes/testRoute"));
const app = (0, express_1.default)();
app.use('/', testRoute_1.default);
app.listen(8000, () => {
    try {
        console.log("🌍 Server Is Running on 👉 http://localhost:8000");
        console.log("🌍 Test Server on 👉 http://localhost:8000/version");
    }
    catch (error) {
        console.log(`🔴 INTERNAL ERROR :: ${error}`);
    }
});
