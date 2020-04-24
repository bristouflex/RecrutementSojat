import ValueObjectID from "../ValueObjectID";

export class Blob {}

export default class CV extends ValueObjectID {
  constructor(public readonly content: Blob) {
    super();
  }
}
