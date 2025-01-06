"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testController_1 = require("../controllers/testController");
const routes = (0, express_1.Router)();
routes.get('/version', testController_1.getVersion);
exports.default = routes;
