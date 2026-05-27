// The signature framework — Dave Ramsey's Baby Steps, adapted to Serbia.
// Approved Serbian copy (conversational, "ti" address).
export interface BabyStep {
  n: number;
  title: string;
  text: string;
  highlight?: boolean;
}

export const babySteps: BabyStep[] = [
  {
    n: 1,
    title: 'Skloni sa strane 1.000 € za crne dane',
    text: 'Prva ušteđevina za nepredviđene troškove — da te kvar na kolima ili zubar ne gurnu u minus.',
  },
  {
    n: 2,
    title: 'Raščisti dugove — od najmanjeg ka najvećem',
    text: 'Kartice, keš krediti, minus, dugovanja kod ljudi. Krećeš od najmanjeg da uhvatiš zalet. Stambeni kredit ostavljaš za kasnije.',
  },
  {
    n: 3,
    title: 'Napravi zalihu za 3–6 meseci života',
    text: 'Ušteđevina u evrima za miran san — koliko ti treba da preživiš pola godine bez plate. Štit od inflacije i pada dinara.',
  },
  {
    n: 4,
    title: 'Odvajaj 15% plate za penziju',
    text: 'Dobrovoljni penzioni fond i ETF-ovi preko brokera. Na državnu penziju se ne računaj previše.',
  },
  {
    n: 5,
    title: 'Odvajaj za školovanje dece',
    text: 'Namenska ušteđevina za fakultet i da deca lakše krenu u život.',
  },
  {
    n: 6,
    title: 'Otplati stan pre roka',
    text: 'Skini sebi ratu sa vrata što pre — život bez kredita je sasvim druga priča.',
  },
  {
    n: 7,
    title: 'Uživaj, ulaži i pomaži drugima',
    text: 'Sad slobodno investiraš, trošiš bez griže savesti i pomažeš porodici i ljudima oko sebe. To je prava sloboda.',
    highlight: true,
  },
];
