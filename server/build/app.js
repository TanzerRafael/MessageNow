"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var App = /** @class */ (function () {
    /**
     *
     */
    function App() {
        this.express = express_1.default();
        this.middleware();
        this.route();
    }
    App.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype.route = function () {
        var router = express_1.default.Router();
        router.get('/', function (req, res, next) {
            res.json({
                message: 'Hello there!'
            });
        });
        this.express.use('/', router);
    };
    return App;
}());
exports.default = new App().express;
