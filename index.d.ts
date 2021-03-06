/**
 * Create a XML to React converter.
 *
 * @param {object} converters - a mapping of tag names to a function
 *                              returning the desired mapping.
 * @param {boolean} [debug] - optional flag to enable additional
 *                            developer debug information.
 * @public
 */
declare class XMLToReact {
  constructor(converters: any, debug?: boolean);

  /**
   * Create a XML to React converter.
   *
   * @param {string} xml - xml to convert
   * @param {object} [data] - optional data to assist in conversion
   * @returns {object} - React element tree
   * @public
   */
  public convert(xml: string, data?: any): any;
}

declare namespace XMLToReact {
  declare interface XMLToReactComponentProps {
    key: number,
    tagName: string;
  }
}

export = XMLToReact;
