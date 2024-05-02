class User {
  Name: string = "";
  Gender: string = "";
  City: string = "";
  Country: string = "";
  PostCode: string = "";
  Latitude: string = "";
  Longitude: string = "";
  Email: string = "";
  Phone: string = "";
  Picture: string = "";
  Id: string = "";
  Seed: string = "";

  constructor(result: any, info: any) {
    if (result !== undefined) {
      this.Name = result.name.title.concat(
        " ",
        result.name.first,
        " ",
        result.name.last
      );
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

export default User;
