import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

/**
 * This class generate a map using the open source map "OpenStreetMaps".
 */
class Map {
  private mapElement: HTMLElement;
  private map: any;
  private latitude: number;
  private longitude: number;

  /**
   *
   * @param map the HTMLElement to render the map.
   * @param latitude the latitude position to render the ubication and marker.
   * @param longitude the longitude position to render the ubication and marker.
   */
  constructor(map: HTMLElement, latitude: string, longitude: string) {
    this.mapElement = map;
    this.latitude = Number(latitude);
    this.longitude = Number(longitude);
  }

  /**
   * This method generate the map and render to the user.
   */
  GenerateMap() {
    this.map = leaflet
      .map(this.mapElement)
      .setView([this.latitude, this.longitude], 13);
    this.GetLayer();
    this.AddMarker();
  }

  /**
   * this local method use the openStretMap layer to render the map.
   */
  private GetLayer() {
    leaflet
      .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      })
      .addTo(this.map);
  }

  /**
   * This local method add the marker to the specific position in the map.
   */
  private AddMarker() {
    leaflet.marker([this.latitude, this.longitude]).addTo(this.map);
  }
}

export default Map;
