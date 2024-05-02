/**
 * Basic class to fetch.
 */
class FetchClient {

  /**
   * 
   * @param url the url to fetch the data.
   * @returns if the response is ok returns the data, else just return an empty object, but if the fetch fails, make a console log and write the error.
   */
  async Get(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return {};
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

export default FetchClient;
