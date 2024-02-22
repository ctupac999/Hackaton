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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PropertyService = class PropertyService {
    constructor(propertyModel) {
        this.propertyModel = propertyModel;
    }
    async create(createPropertyDto) {
        const propertyCreated = new this.propertyModel(createPropertyDto);
        return await propertyCreated.save();
    }
    async findAll() {
        const allProperty = await this.propertyModel.find();
        console.log(allProperty);
        return allProperty;
    }
    async findByWord(word) {
        const regex = new RegExp(word, 'i');
        return this.propertyModel.find({
            $or: [
                { name: regex },
                { releaseDate: regex },
                { meters: regex },
                { description: regex },
                { city: regex }
            ],
        }).exec();
    }
    async findByCity(ciudad) {
        return this.propertyModel.find({
            [`city.${ciudad}`]: true,
        }).exec();
    }
    update(id, updatePropertyDto) {
        return `This action updates a #${id} property`;
    }
    remove(id) {
        return `This action removes a #${id} property`;
    }
};
exports.PropertyService = PropertyService;
exports.PropertyService = PropertyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Property')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PropertyService);
//# sourceMappingURL=property.service.js.map