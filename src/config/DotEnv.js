import Config from "react-native-config";

/**
 * dot env
 */
export default class DotEnv {
  /**
   * get lang
   */
  static getApiUrl = ()=> {
    return Config.API_URL;
  };
}
