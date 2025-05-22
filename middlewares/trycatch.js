const { errorCatchResponse } = require("../utilis/response");

const asyncHandler = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch((e) => {
        return errorCatchResponse(res, e.message);
    });

module.exports = asyncHandler;