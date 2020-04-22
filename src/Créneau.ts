export default class Créneau {
    private date: Date;
    private heureDébut: number;
    private heureFin: number;

    /**
     * @param dateTime 
     * @param durée en minute
     */
    constructor(dateTime: Date, durée: number) {
        this.date = new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate());
        this.heureDébut = dateTime.getTime() - this.date.getTime();
        this.heureFin = this.heureDébut + durée * 60_000;

        console.log(new Date(this.date.getTime() + this.heureDébut));
        console.log(new Date(this.date.getTime() + this.heureFin));
    }

    public equals(date: Date): boolean {
        return this.date.getTime() === date.getTime();
    }
}
