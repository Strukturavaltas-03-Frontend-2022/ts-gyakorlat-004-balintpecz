// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
 export const humans: HumanHero[] = [
    new HumanHero(1, "Test Elek", "male", 63, 32 ),
    new HumanHero(2, "Test Erika", "female", 77, 42),
    new HumanHero(3, "Test Elek", "male", 90, 60)
  ];
  

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
 export const transformers: any[] = [
    {id:1, name: "transform", wings:0, wheels:2, clan: 'alma'},
    {id:2, name: "transform", wings:1, wheels:5, clan: 'beka'},
    {id:3, name: "transform", wings:2, wheels:6, clan: 'szolo'},
  ];
