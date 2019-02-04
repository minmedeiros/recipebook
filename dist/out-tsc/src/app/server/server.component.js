"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
        var _this = this;
        this.serverId = 10;
        this.serverStatus = 'offline';
        this.allowNewServer = false;
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 2000);
    }
    ServerComponent.prototype.getServerStatus = function () {
        return this.serverStatus;
    };
    ServerComponent = __decorate([
        core_1.Component({
            selector: 'app-server',
            templateUrl: './server.component.html',
            styleUrls: ['./server.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ServerComponent);
    return ServerComponent;
}());
exports.ServerComponent = ServerComponent;
//# sourceMappingURL=server.component.js.map