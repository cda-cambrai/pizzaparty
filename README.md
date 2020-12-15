# Pizzaparty

Petit projet pour découvrir Angular...

## Récupèration du projet

Pour récupèrer, on utilise Git. On s'assure d'être dans le bon dossier avant :

```
cd C:\Users\Administrateur\Code
git clone https://github.com/cda-cambrai/pizzaparty.git
```

On n'oublie pas d'installer les dépendances du projet :

```
cd pizzaparty
npm install
```

Et voilà, on peut lancer le serveur (`http://localhost:4200/`) :

```
ng serve
```

Par la suite, s'il y a des modifications, on peut simplement faire :

```
cd pizzaparty
git pull
```

## Commandes utiles

Pour générer un composant :

```
ng generate component pizza-list
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
