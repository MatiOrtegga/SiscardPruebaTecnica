"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(result, info) {
        this.Name = "";
        this.Gender = "";
        this.City = "";
        this.Country = "";
        this.PostCode = "";
        this.Latitude = "";
        this.Longitude = "";
        this.Email = "";
        this.Phone = "";
        this.Picture = "";
        this.Id = "";
        this.Seed = "";
        if (result !== undefined) {
            this.Name = result.name.title.concat(" ", result.name.first, " ", result.name.last);
            this.Gender = result.gender;
            this.City = result.location.city;
            this.Country = result.location.country;
            this.PostCode = result.location.postcode;
            this.Latitude = result.location.coordinates.latitude;
            this.Longitude = result.location.coordinates.longitude;
            this.Email = result.email;
            this.Phone = result.phone;
            this.Picture = result.picture.large;
            this.Id = result.id.value;
            this.Seed = info.seed;
        }
    }
}
exports.default = User;
