import ValueObjectID from "../ValueObjectID";

export default class CV extends ValueObjectID {
  constructor(public readonly content: Blob) {
    super();
  }
}
