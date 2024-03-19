import { constants } from "../constants.mjs";

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode :500;
    switch (statusCode) {
        case constants.VALIDATION-ERROR:
            res.json({Title: "VALIDATION FAILED",
             message: err.message, 
             stackTrace: err.stack})

            break;
            
        case constants. NOT_FOUND:
        res.json({Title: "NOT FOUND", 
        message: err.message,
        stackTrace: err.stack})

        break;

        case constants. UNAUTHORIZED:
        res.json({Title: "UNAUTHORIZED", 
        message: err.message, 
        stackTrace: err.stack})

        break;

        case constants. FORBIDDEN:
        res.json({Title: "FORBIDDEN", 
        message: err.message, 
        stackTrace: err.stack})

        break;

        case constants. SERVER_ERROR:
            res.json({Title: "SERVER_ERROR", 
            message: err.message, 
            stackTrace: err.stack})

        default:
            console.log("NO ERROR, all good!")
            break;
    }
    
    
};

export default errorHandler;
