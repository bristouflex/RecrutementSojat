import ValueObjectID from "./model/ValueObjectID";

export default class Creneau extends ValueObjectID {
  public readonly date: Date;
  public readonly heureDébut: number;
  public readonly heureFin: number;

  public static HUIT_HEURES: number = 480;
  public static UNE_HEURE: number = 60;
  public static UNE_MINUTE_EN_MILLISECONDES: number = 60_000;
  public static UNE_HEURE_EN_MILLISECONDES: number = Creneau.UNE_MINUTE_EN_MILLISECONDES*60;

  /**
   * @param dateTime
   * @param duree en minute
   */
  constructor(dateTime: Date, duree: number) {
    
    const dateMinuit = new Date(
      dateTime.getFullYear(),
      dateTime.getMonth(),
      dateTime.getDate()
    );

    if (![Creneau.UNE_HEURE, Creneau.UNE_HEURE * 2, Creneau.UNE_HEURE * 3].includes(duree)){
      throw new RangeError("Un créneau doit durer 1, 2 ou 3 heures");
    } else if (dateTime.getHours() < 18) {
      throw new RangeError("Un créneau doit commencer à 18h minimum");
    } else if (dateTime.getTime() - dateMinuit.getTime() + duree * Creneau.UNE_MINUTE_EN_MILLISECONDES > 21 * Creneau.UNE_HEURE_EN_MILLISECONDES){
      throw new RangeError("Un créneau doit finir à 21h maximum");
    }

    super();

    this.date = dateMinuit;
    this.heureDébut = dateTime.getTime() - this.date.getTime();
    this.heureFin =
      this.heureDébut + duree * Creneau.UNE_MINUTE_EN_MILLISECONDES;
    
  }

  public equals(creneau: Creneau): boolean {
    return this.date.getTime() === creneau.date.getTime();
  }
}
