class User {
  Name: string = '';
  Gender: string = '';
  City: string = '';
  Country: string = '';
  PostCode: string = '';
  Latitude: string = '';
  Longitude: string = '';
  Email: string = '';
  Phone: string = '';
  Picture: string = '';
  Id: string = '';
  Seed: string = '';

  constructor(result: any) {
    if (result !== undefined) {
      this.Name = result.Name;
      this.Gender = result.Gender;
      this.City = result.City;
      this.Country = result.Country;
      this.PostCode = result.PostCode;
      this.Latitude = result.Latitude;
      this.Longitude = result.Longitude;
      this.Email = result.Email;
      this.Phone = result.Phone;
      this.Picture = result.Picture;
      this.Id = result.Id;
      this.Seed = result.Seed;
    }
  }
}
export default User;
