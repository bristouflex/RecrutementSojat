import ValueObjectID from "./model/ValueObjectID";

export default class Creneau extends ValueObjectID {
  public readonly date: Date;
  public readonly heureDébut: number;
  public readonly heureFin: number;

  public static HUIT_HEURES: number = 480;
  public static UNE_HEURE_EN_MILLISECONDES: number = 60_000;

  /**
   * @param dateTime
   * @param duree en minute
   */
  constructor(dateTime: Date, duree: number) {
    if (duree <= 10) {
      throw new Error("Une réunion ne peut être inférieure à 10 minutes");
    } else if (duree > Creneau.HUIT_HEURES) {
      throw new Error("Une réunion est limitée à 8h");
    }

    super();

    this.date = new Date(
      dateTime.getFullYear(),
      dateTime.getMonth(),
      dateTime.getDate()
    );
    this.heureDébut = dateTime.getTime() - this.date.getTime();
    this.heureFin =
      this.heureDébut + duree * Creneau.UNE_HEURE_EN_MILLISECONDES;
  }

  public equals(creneau: Creneau): boolean {
    return this.date.getTime() === creneau.date.getTime();
  }
}
