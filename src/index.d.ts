export interface HandlerService<Return, Parameters> {
  handle: (...params: Parameters) => Return;
}

export type UseCase<Return, Parameters> = HandlerService<
  Return,
  [...Parameters]
>;

// Commentaire

/* 
HandlerService Interface :

Déclaration : HandlerService est une interface générique qui définit une méthode handle.

handle : C'est une méthode qui prend un nombre variable de paramètres (grâce à ...params: Parameters) et retourne un résultat de type Return.

Utilité : Cette interface garantit que les classes qui l'implémentent suivent une structure uniforme, avec une méthode handle qui prend des paramètres et retourne un résultat.
*/

/*
UseCase Type :

Déclaration : UseCase est un type générique basé sur l'interface HandlerService.

Paramètres : UseCase prend deux types génériques Return (le type de retour) et Parameters (les types des paramètres).

Utilité : Ce type est utilisé pour définir les cas d'utilisation (use cases) dans votre application, en s'assurant qu'ils suivent le même schéma que HandlerService.
*/

/*
En résumé
1. index.d.ts est un fichier que vous créez vous-même pour organiser vos définitions de types et interfaces dans un projet TypeScript/NestJS.
Il est très utile pour structurer des projets complexes et pour garantir que le typage est correct et cohérent dans toute l'application.
Les déclarations comme HandlerService et UseCase aident à s'assurer que tous vos use cases respectent une interface commune, ce qui rend votre code plus maintenable et prévisible.

2. Séparation des préoccupations
Séparer la logique de l'interface de la logique métier permet de mieux structurer votre code.

L'interface HandlerService se concentre sur le contrat que chaque classe doit respecter. Elle définit simplement la structure des données (ici, une méthode handle avec certains paramètres et un type de retour).

UseCase utilise cette interface pour spécifier un cas d'utilisation particulier. L'interface HandlerService devient une sorte de modèle qui peut être réutilisé pour d'autres use cases, tandis que UseCase représente un cas particulier avec des paramètres et un type de retour définis par l'usage spécifique.
*/
