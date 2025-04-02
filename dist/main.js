"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    var _a;
    const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(port);
    console.log(`XXXXXXXXXXX Application is running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map