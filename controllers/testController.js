"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersion = void 0;
const getVersion = async (request, response) => {
    const dataResponse = { message: '', error: false, data: {} };
    try {
        dataResponse.message = '🟢 Success!';
        dataResponse.data = { version: '0.1' };
        response.status(200).json(dataResponse);
    }
    catch (error) {
        console.log("🔴 Internal Error", error);
        dataResponse.message = `🔴 Internal Server Error 👉 ${error}`;
        dataResponse.error = true;
        response.status(500).json(dataResponse);
    }
};
exports.getVersion = getVersion;
