/**
 * On définit une classe Game.
 * Une classe est un type, un ensemble complexe, une structure.
 * A partir d'une classe, on pourra créer (instancier) des objets.
 */
export class Game {
    /**
     * On peut définir des propriétés (variables)
     */
    name: string;
    platform: string;

    /**
     * Le constructor s'exécute au moment de l'instance de la
     * classe.
     */
    constructor(name: string, platform: string) {
        this.name = name;
        this.platform = platform;
    }

    /**
     * Une méthode (fonction) permet de récupèrer
     * des infos de l'objet
     */
    getInfos() {
        return 'Le jeu se nomme ' + this.name;
    }
}
