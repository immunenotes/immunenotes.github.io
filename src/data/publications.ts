// Single source of truth for publications across the site: the /publications
// page renders this list grouped by year, and each person's Publications
// section is generated from it by author matching (see src/utils/authorMatch.ts).
//
// Sorted newest first, then by author. Conference abstracts, proceedings and
// book chapters are included alongside journal articles, so many entries carry
// no link at all — the source they were migrated from has none for them.

export interface Publication {
  /** Author string exactly as cited, e.g. "Ringleb M, Bizjak DA, … Puta C". */
  authors: string;
  year: number;
  /** Everything between "(year). " and the trailing link: title + source. */
  body: string;
  /** Visible text of the trailing link (e.g. a DOI). Omitted with `url`. */
  linkText?: string;
  /** Optional: many proceedings and book chapters have no online source. */
  url?: string;
}

export const publications: Publication[] = [
  {
    "authors": "Fehrer A, Windzio L, Schoening S, Steiner S, Aschenbrenner AC, Babel N, Behrends U, Bellmann-Strobl J, Cammà G, Cash A, Doehner W, den Dunnen J, Fluge Ø, Franke C, Hoffmann K, Kedor C, Kim L, Löhden W, Mella O, Mihatsch LL, Peluso MJ, Puta C, Putrino D, Ramoji A, Sato W, Sawitzki B, Schlieper G, Schoenfeld Y, Seifert M, Sigurdsson F, Slaghekke A, Sommerfelt K, Sotzny F, Stein E, Steinacker JM, Stingl M, Systrom DM, Tronstad KJ, Wirth K, Wörmann B, Wüst RCI, Yamamura T, Scheibenbogen C",
    "year": 2026,
    "body": "Expert perspectives on Myalgic encephalomyelitis/chronic fatigue syndrome – Insights from the 3rd International Conference of the Charité Fatigue Center. Autoimmunity Reviews: 104043.",
    "linkText": "doi: 10.1016/j.autrev.2026.104043",
    "url": "https://www.sciencedirect.com/science/article/pii/S1568997226000571?via%3Dihub"
  },
  {
    "authors": "Geisler M, Herbsleb M, de la Cruz F, von Au S, Schumann A, Croy I, Bär KJ",
    "year": 2026,
    "body": "Profound neuronal differences during exercise-induced hypoalgesia between athletes and non-athletes revealed by functional near-infrared spectroscopy. J Physiol 604(7): 2738-2756.",
    "linkText": "doi: 10.1113/JP289766",
    "url": "https://doi.org/10.1113/JP289766"
  },
  {
    "authors": "Ringleb M, Bizjak DA, Nieß AM, Notbohm H, Predel H-G, Puta C, Steinacker JM, Widmann M, Zacher J, Bloch W, Javelle F",
    "year": 2026,
    "body": "Immune Dysregulation and Persistent Symptoms: Insights into T Cell Dynamics in Post-COVID among Athletes from the CoSmo-S Study. Journal of Clinical Immunology.",
    "linkText": "doi: 10.1007/s10875-026-02020-2",
    "url": "https://link.springer.com/article/10.1007/s10875-026-02020-2"
  },
  {
    "authors": "Ringleb M, Fabritius F, Godde J, Puta C, Bloch W, Javelle F",
    "year": 2026,
    "body": "Circulating Myokine Responses to Acute Endurance Exercise and Their Role in Immunoregulation: A Systematic Review and Meta-Analysis. The FASEB Journal 40(4): e71536.",
    "linkText": "doi: 10.1096/fj.202504780R",
    "url": "https://faseb.onlinelibrary.wiley.com/doi/10.1096/fj.202504780R"
  },
  {
    "authors": "Röhr W, Simon R, Kirschke S, von Loga I, Putrino D, Bloch W, Reuken PA, Dudziak D, Kipp AP, Stallmach A, Puta C",
    "year": 2026,
    "body": "Acute effects of the 1-minute sit-to-stand test (STST) on immune-metabolic stress indices. Sci Rep 16(1): 25484.",
    "linkText": "doi: 10.1038/s41598-026-66330-6",
    "url": "https://doi.org/10.1038/s41598-026-66330-6"
  },
  {
    "authors": "Schrenk SJ, Bang C, Best L, Dost T, Flor S, Frahm C, Gaser C, Hamdan RA, Herbsleb M, Kaleta C, Kattlun F, Müller HJ, Puta C, Radscheidt M, Ruiz-Rizzo AL, Scherag A, Steidten T, Witte OW, Brodoehl S, Finke K",
    "year": 2026,
    "body": "Impact of an online-guided physical activity intervention on cognition, resting-state brain connectivity, and the gut microbiome in healthy older adults—a randomized controlled trial. GeroScience. Epub ahead of print.",
    "linkText": "doi: 10.1007/s11357-026-02324-6",
    "url": "https://doi.org/10.1007/s11357-026-02324-6"
  },
  {
    "authors": "Simon R, Röhr W, Schwarz M, Haase H, Puta C, Kipp AP",
    "year": 2026,
    "body": "Acute effects of physical exercise on biomarkers of the trace elements selenium, zinc, copper, and iron. Journal of Trace Elements in Medicine and Biology 94: 127828.",
    "linkText": "doi: 10.1016/j.jtemb.2026.127828",
    "url": "https://www.sciencedirect.com/science/article/pii/S0946672X26000143?via%3Dihub"
  },
  {
    "authors": "Warneke K, Lebelt N, Liebermann F, Jöst B, Herbsleb M",
    "year": 2026,
    "body": "Reliability and device objectivity in oscillatory blood pressure measurement — a measurement error analysis to inform clinical decision making. BMC Cardiovasc Disord 26(1): 593.",
    "linkText": "doi: 10.1186/s12872-026-06262-1",
    "url": "https://doi.org/10.1186/s12872-026-06262-1"
  },
  {
    "authors": "Warneke K, Oraze M, Herbsleb M, Afonso J, Wallot S",
    "year": 2026,
    "body": "Do sex differences influence test habituation and internal data validity in neurocognitive testing? A blinded measurement error analysis. Neuroscience 593: 106-121.",
    "linkText": "doi: 10.1016/j.neuroscience.2025.12.007",
    "url": "https://doi.org/10.1016/j.neuroscience.2025.12.007"
  },
  {
    "authors": "Bähr F, Wöhrl T, Teich P, Puta C, Kliegl R",
    "year": 2025,
    "body": "Impact of age, sex, body constitution, and the COVID-19 pandemic on the physical fitness of 38,084 German primary school children. Scientific Reports 15: 11300.",
    "linkText": "doi: 10.1038/s41598-025-95461-5",
    "url": "https://www.nature.com/articles/s41598-025-95461-5#citeas"
  },
  {
    "authors": "Garza AP, Morton L, Motsch A-L, Puta C, Stiebler M, Lading Y, Chakrabarty S, Schreiber S, Buzás EI, Braun-Dullaeus R, Müller P, Dunay IR",
    "year": 2025,
    "body": "Acute exercise alters immune responses in older adults, with extracellular vesicle changes observed in a high-intensity intervention. Frontiers in Immunology 16: 1661161.",
    "linkText": "doi: 10.3389/fimmu.2025.1661161",
    "url": "https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2025.1661161/full"
  },
  {
    "authors": "Kiel A, Kliegl R, Zum Berge AH, Schwarzenbrunner K, Puta C, Kullik L, Jakowski S, Kellmann M",
    "year": 2025,
    "body": "Interindividual and intraindividual differences in recovery of German junior female ice hockey players during 2020 World Championship Division IA tournament. Scientific Reports 15(1): 25520.",
    "linkText": "doi: 10.1038/s41598-025-09906-y",
    "url": "https://www.nature.com/articles/s41598-025-09906-y"
  },
  {
    "authors": "Ledebur K, Wiedermann M, Puta C, Thurner S, Klimek P, Brockmann D",
    "year": 2025,
    "body": "Wearable data reveals distinct characteristics of individuals with persistent symptoms after a SARS-CoV-2 infection. npj digital medicine 8: 167.",
    "linkText": "doi: 10.1038/s41746-025-01456-x",
    "url": "https://www.nature.com/articles/s41746-025-01456-x"
  },
  {
    "authors": "Puta C, Reuken P, Katzer K, Gabriel M, Dudziak D, Stallmach A",
    "year": 2025,
    "body": "Exercise Snacks. Ärzteblatt Thüringen 11: 24-28.",
    "linkText": "aerzteblatt-thueringen.de/pdf/thu2511_024.pdf",
    "url": "https://www.aerzteblatt-thueringen.de/pdf/thu2511_024.pdf"
  },
  {
    "authors": "Reuken PA, Besteher B, Finke K, Lemhöfer C, Puta C, Schönherr C, Vonderlind S, Stallmach A",
    "year": 2025,
    "body": "Präventionsmöglichkeiten des Post-COVID-Syndroms: ein Überblick des aktuellen Forschungsstandes. Ärzteblatt Thüringen 10: 30-33.",
    "linkText": "aerzteblatt-thueringen.de/pdf/thu2510_030.pdf",
    "url": "https://www.aerzteblatt-thueringen.de/pdf/thu2510_030.pdf"
  },
  {
    "authors": "Reuken PA, Wagner F, Finke K, Lemhöfer C, Puta C, Stengel S, Scherag A, Lewejohann J-C, Stallmach A, Quickert S",
    "year": 2025,
    "body": "Possible link between steatotic liver diseases, severe COVID-19 and cognitive impairment in post-COVID-19 syndrome. Infection.",
    "linkText": "doi: 10.1007/s15010-025-02531-x",
    "url": "https://link.springer.com/article/10.1007/s15010-025-02531-x"
  },
  {
    "authors": "Saraei T, Schrenk S, Puta C, Herbsleb M, Witte OW, Frahm C, Brodoehl S, Finke K, Gaser C",
    "year": 2025,
    "body": "Physical Activity and BrainAGE: Exploring the Impact on Brain Health and Plasticity in Older Adults. Human Brain Mapping 46(15): e70378.",
    "linkText": "doi: 10.1002/hbm.70378",
    "url": "https://doi.org/10.1002/hbm.70378"
  },
  {
    "authors": "Steidten T, Granacher U, Gabriel H, Haunhorst S, Reuken P, Dudziak D, Puta C",
    "year": 2025,
    "body": "Impact of different concurrent training sequencing schemes on overnight systemic immunological regulation in adolescent athletes. Frontiers in Physiology 16: 1392946.",
    "linkText": "doi: 10.3389/fphys.2025.1392946",
    "url": "https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2025.1392946/full"
  },
  {
    "authors": "Warneke K, Oraže M, Plöschberger G, Herbsleb M, Afonso J, Wallot S",
    "year": 2025,
    "body": "When Testing Becomes Learning — Underscoring the Relevance of Habituation to Improve Internal Validity of Common Neurocognitive Tests. European Journal of Neuroscience 61(8): e70117.",
    "linkText": "doi: 10.1111/ejn.70117",
    "url": "https://doi.org/10.1111/ejn.70117"
  },
  {
    "authors": "Zhang B, Grau M, Puta C, Arvidsson D, Arz M, Böcker J, Chilibeck P, Forbes SC, Kaiser-Stolz C, McLaurin N, Miyamoto-Mikami E, Pesta D, Pustowalow W, Tanaka H, Rittweger J, Bloch W",
    "year": 2025,
    "body": "Post-COVID-19 Condition in Track and Field Master Athletes: Severity, Symptoms, and Associations With Quality of Life and C-Reactive Protein Levels. Scandinavian Journal of Medicine & Science in Sports 35(7): e70106.",
    "linkText": "doi: 10.1111/sms.70106",
    "url": "https://onlinelibrary.wiley.com/doi/10.1111/sms.70106"
  },
  {
    "authors": "Christ T, Ringleb M, Haunhorst S, Fennen L, Jordan PM, Wagner H, Puta C",
    "year": 2024,
    "body": "The acute effects of pre- and mid-exercise carbohydrate ingestion on the immunoregulatory stress hormone release in experienced endurance athletes — a systematic review. Frontiers in Sports and Active Living 6: 1264814.",
    "linkText": "doi: 10.3389/fspor.2024.1264814",
    "url": "https://www.frontiersin.org/articles/10.3389/fspor.2024.1264814/full"
  },
  {
    "authors": "Garza AP, Morton L, Motsch A-L, Puta C, Stiebler M, Lading Y, Schreiber S, Braun-Dullaeus R, Müller P, Dunay IR",
    "year": 2024,
    "body": "Exercise intensity shapes acute and prolonged immune and extracellular vesicle responses in older adults. medRxiv:11.22.24317619.",
    "linkText": "doi: 10.1101/2024.11.22.24317619",
    "url": "https://doi.org/10.1101/2024.11.22.24317619"
  },
  {
    "authors": "Geisler M, de la Cruz F, Makris N, Billah T, Zhang F, Rathi Y, O'Donnell LJ, Bouix S, Herbsleb M, Bär K-J, Kikinis Z, Weiss T",
    "year": 2024,
    "body": "Brains of endurance athletes differ in the association areas but not in the primary areas. Psychophysiology 61: e14483.",
    "linkText": "doi: 10.1111/psyp.14483",
    "url": "https://doi.org/10.1111/psyp.14483"
  },
  {
    "authors": "Haunhorst S, Dudziak D, Scheibenbogen C, Seifert M, Sotzny F, Finke C, Behrends U, Aden K, Schreiber S, Brockmann D, Burggraf P, Bloch W, Ellert C, Ramoji A, Popp J, Reuken P, Walter M, Stallmach A, Puta C",
    "year": 2024,
    "body": "Towards an understanding of physical activity-induced post-exertional malaise: Insights into microvascular alterations and immunometabolic interactions in post-COVID condition and myalgic encephalomyelitis/chronic fatigue syndrome. Infection 53: 1-13.",
    "linkText": "doi: 10.1007/s15010-024-02386-8",
    "url": "https://link.springer.com/article/10.1007/s15010-024-02386-8"
  },
  {
    "authors": "Kullik L, Stork M, Kellmann M, Puta C, Jakowski S",
    "year": 2024,
    "body": "Impact of sleep-wake patterns and daily rhythms including training on midsleep time in adolescent basketball players during the COVID-19 pandemic. German Journal of Exercise and Sport Research 54: 393-401.",
    "linkText": "doi: 10.1007/s12662-023-00933-3",
    "url": "https://link.springer.com/article/10.1007/s12662-023-00933-3"
  },
  {
    "authors": "Quickert S, Wagner F, Finke K, Katzer K, Lemhöfer C, Puta C, Stengel S, Scherag A, Lewejohann JC, Stallmach A, Reuken PA",
    "year": 2024,
    "body": "MASLD is a common comorbidity in post-COVID-19 and associated with severe COVID-19 courses and neurocognitive impairments. Z Gastroenterol 62(09): e668.",
    "linkText": "doi: 10.1055/s-0044-1789803",
    "url": "https://www.thieme-connect.com/products/ejournals/html/10.1055/s-0044-1789803"
  },
  {
    "authors": "Reuken PA, Besteher B, Bleidorn J, Brockmann D, Finke K, Freytag A, Lehmann-Pohl K, Lemhöfer C, Mikolajczyk R, Puta C, Scherag A, Wiedermann M, Zippel-Schultz B, Stallmach A",
    "year": 2024,
    "body": "Web-based telemedicine approach for treatment of post-COVID-19 in Thuringia (WATCH). DIGITAL HEALTH 10.",
    "linkText": "doi: 10.1177/20552076241291748",
    "url": "https://journals.sagepub.com/doi/10.1177/20552076241291748"
  },
  {
    "authors": "Ringleb M, Javelle F, Haunhorst S, Bloch W, Fennen L, Baumgart S, Drube S, Reuken PA, Pletz MW, Wagner H, Gabriel HHW, Puta C",
    "year": 2024,
    "body": "Beyond muscles: Investigating immunoregulatory myokines in acute resistance exercise – A systematic review and meta-analysis. The FASEB Journal 38(7): e23596.",
    "linkText": "doi: 10.1096/fj.202301619R",
    "url": "https://faseb.onlinelibrary.wiley.com/doi/10.1096/fj.202301619R"
  },
  {
    "authors": "Stallmach A, Quickert S, Puta C, Reuken PA",
    "year": 2024,
    "body": "The gastrointestinal microbiota in the development of ME/CFS: a critical view and potential perspectives. Frontiers in Immunology 15: 1352744.",
    "linkText": "doi: 10.3389/fimmu.2024.1352744",
    "url": "https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2024.1352744/full"
  },
  {
    "authors": "Giszas B, Trommer S, Schüßler N, Rodewald A, Bester B, Bleidorn J, Dickmann P, Finke K, Katzer K, Lehmann-Pohl K, Lemhöfer C, Pletz MW, Puta C, Quickert S, Walter M, Stallmach A, Reuken PA",
    "year": 2023,
    "body": "Post-COVID-19 condition is not only a question of persistent symptoms: structured screening including health-related quality of life reveals two separate clusters of post-COVID. Infection 51(2): 365-377.",
    "linkText": "doi: 10.1007/s15010-022-01886-9",
    "url": "https://doi.org/10.1007/s15010-022-01886-9"
  },
  {
    "authors": "Haunhorst S, Bloch W, Drube S, Baumgart S, Pletz MW, Gabriel HHW, Puta C",
    "year": 2023,
    "body": "Current return to sports recommendations after non-severe COVID-19 from an exercise immunology perspective: A scoping review. Sport Orthopaedics and Traumatology 39(4): 378-388.",
    "linkText": "doi: 10.1016/j.orthtr.2023.11.003",
    "url": "https://doi.org/10.1016/j.orthtr.2023.11.003"
  },
  {
    "authors": "Haunhorst S, Bloch W, Puta C",
    "year": 2023,
    "body": "Impact Of Long Covid On Recovery In Sport and Exercise. The Importance of Recovery for Physical and Mental Health, 1st Edition, Routledge: 203-222.",
    "linkText": "doi: 10.4324/9781003250647-12",
    "url": "https://doi.org/10.4324/9781003250647-12"
  },
  {
    "authors": "Haunhorst S, Bloch W, Puta C",
    "year": 2023,
    "body": "8 Recovery and the immune system. In: M Kellmann, S Jakowski, J Beckmann (eds). The Importance of Recovery for Physical and Mental Health: Negotiating the Effects of Underrecovery. Routledge, Oxon.",
    "linkText": "doi: 10.4324/9781003250647-8",
    "url": "https://doi.org/10.4324/9781003250647-8"
  },
  {
    "authors": "Lemhöfer C, Bahmer T, Baumbach P, Besteher B, Boekel A, Finke K, Katzer K, Lehmann-Pohl K, Lewejohann JC, Loudovici-Krug D, Nowka M, Puta C, Quickert S, Reuken PA, Walter M, Stallmach A",
    "year": 2023,
    "body": "Variations and Predictors of Post-COVID Syndrome Severity in Patients Attending a Post-COVID Outpatient Clinic. J Clin Med 12(12): 4013.",
    "linkText": "doi: 10.3390/jcm12124013",
    "url": "https://doi.org/10.3390/jcm12124013"
  },
  {
    "authors": "Markov A, Bussweiler J, Helm N, Arntz F, Steidten T, Krohm L, Sacot A, Baumert P, Puta C, Chaabene H",
    "year": 2023,
    "body": "Acute effects of concurrent muscle power and sport-specific endurance exercises on markers of immunological stress response and measures of muscular fitness in highly trained young male athletes. Eur J Appl Physiol 123(5): 1015-1026.",
    "linkText": "doi: 10.1007/s00421-022-05126-8",
    "url": "https://link.springer.com/article/10.1007/s00421-022-05126-8"
  },
  {
    "authors": "Palmowski J, Kohnhorst S, Bauer P, Puta C, Haunhorst S, Gebhardt K, Reichel T, Keller C, Huber M, Raifer H, Krüger K",
    "year": 2023,
    "body": "T-cell-derived TNF-α and a cluster of immunological parameters from plasma allow a separation between SARS-CoV-2 convalescent versus vaccinated elite athletes. Front Physiol 14: 1203983.",
    "linkText": "doi: 10.3389/fphys.2023.1203983",
    "url": "https://doi.org/10.3389/fphys.2023.1203983"
  },
  {
    "authors": "Platz T, Abel U, Behrends U, Berlit P, Diem L, Ellert C, Fickenscher H, Guha M, Koch M, Köllner V, Krakow K, Kramer A, Koczulla R, Moser H, Noth R, Pohl M, Puta C, Reißhauer A, Schlitt A, Sigrist T, de Zeeuw J, Zwick RH",
    "year": 2023,
    "body": "S2k-LL COVID-19 and (early) rehabilitation. In: German Society for Neurorehabilitation e.V. (DGNR) (ed.), Guidelines for Neurorehabilitation. Edition/Version Date: 4.0 (3. Update).",
    "linkText": "awmf.org/leitlinien/detail/ll/080-008.html",
    "url": "https://www.awmf.org/leitlinien/detail/ll/080-008.html"
  },
  {
    "authors": "Platz T, Abel U, Behrends U, Berlit P, Diem L, Ellert C, Fickenscher H, Guha M, Koch M, Köllner V, Krakow K, Kramer A, Koczulla R, Moser H, Noth R, Pohl M, Puta C, Reißhauer A, Schlitt A, Sigrist T, de Zeeuw J, Zwick RH",
    "year": 2023,
    "body": "S2k-LL COVID-19 und (Früh-) Rehabilitation. In: DEUTSCHE GESELLSCHAFT FÜR NEUROREHABILITATION E.V. (DGNR) (Hrsgb.), Leitlinien für die Neurorehabilitation. Auflage/Version Datum: 4.0 (3. Update)/1. Dezember 2023.",
    "linkText": "awmf.org/leitlinien/detail/ll/080-008.html",
    "url": "https://www.awmf.org/leitlinien/detail/ll/080-008.html"
  },
  {
    "authors": "Reuken PA, Bester B, Finke K, Fischer A, Holl A, Katzer K, Lehmann-Pohl K, Lemhöfer C, Nowka M, Puta C, Walter M, Weißenborn C, Stallmach A",
    "year": 2023,
    "body": "Long-term course of neuropsychological symptoms and ME/CFS after SARS-CoV-2 infection: a prospective registry study. Eur Arch Psychiatry Clin Neurosci 274(8): 1903-1910.",
    "linkText": "doi: 10.1007/s00406-023-01661-3",
    "url": "https://pubmed.ncbi.nlm.nih.gov/37587244/"
  },
  {
    "authors": "Schrenk SJ, Brodoehl S, Flor S, Frahm C, Gaser C, Hamdan RA, Herbsleb M, Kaleta C, Kattlun F, Müller HJ, Puta C, Radscheidt M, Ruiz-Rizzo AL, Saraei T, Scherag A, Steidten T, Witte OW, Finke K",
    "year": 2023,
    "body": "Impact of an online guided physical activity training on cognition and gut-brain axis interactions in older adults: protocol of a randomized controlled trial. Front Aging Neurosci 15: 1254194.",
    "linkText": "doi: 10.3389/fnagi.2023.1254194",
    "url": "https://doi.org/10.3389/fnagi.2023.1254194"
  },
  {
    "authors": "Steiner S, Fehrer A, Hoheisel F, Schoening S, Aschenbrenner A, Babel N, Bellmann-Strobl J, Finke C, Fluge Ø, Froehlich L, Goebel A, Grande B, Haas JP, Hohberger B, Jason LA, Komaroff AL, Lacerda E, Liebl M, Maier A, Mella O, Nacul L, Paul F, Prusty BK, Puta C, Riemekasten G, Ries W, Rowe PC, Sawitzki B, Shoenfeld Y, Schultze JL, Seifert M, Sepúlveda N, Sotzny F, Stein E, Stingl M, Ufer F, Veauthier C, Westermeier F, Wirth K, Wolfarth B, Zalewski P, Behrends U, Scheibenbogen C",
    "year": 2023,
    "body": "Understanding, diagnosing, and treating Myalgic encephalomyelitis/chronic fatigue syndrome — State of the art: Report of the 2nd international meeting at the Charité fatigue center. Autoimmunity Reviews.",
    "linkText": "doi: 10.1016/j.autrev.2023.103452",
    "url": "https://doi.org/10.1016/j.autrev.2023.103452"
  },
  {
    "authors": "Teich P, Fühner T, Bähr F, Puta C, Granacher U, Kliegl R",
    "year": 2023,
    "body": "Covid Pandemic Effects on the Physical Fitness of Primary School Children: Results of the German EMOTIKON Project. Sports Med Open 9(1): 77.",
    "linkText": "doi: 10.1186/s40798-023-00624-1",
    "url": "https://doi.org/10.1186/s40798-023-00624-1"
  },
  {
    "authors": "de la Cruz F, Geisler M, Schumann A, Herbsleb M, Kikinis Z, Weiss T, Bär KJ",
    "year": 2022,
    "body": "Central autonomic network alterations in male endurance athletes. Scientific Reports 12: 16743.",
    "linkText": "doi: 10.1038/s41598-022-20064-3",
    "url": "https://doi.org/10.1038/s41598-022-20064-3"
  },
  {
    "authors": "Haunhorst S, Bloch W, Ellert C, Puta C",
    "year": 2022,
    "body": "Recovered, but not healthy – Long Covid and the effects on physical performance. Sportphysio 10(03): 111-116.",
    "linkText": "doi: 10.1055/a-1841-8209",
    "url": "https://doi.org/10.1055/a-1841-8209"
  },
  {
    "authors": "Haunhorst S, Bloch W, Javelle F, Krüger K, Baumgart S, Drube S, Lemhöfer C, Reuken P, Stallmach A, Müller M, Zielinski CE, Pletz MW, Gabriel HHW, Puta C",
    "year": 2022,
    "body": "A scoping review of regulatory T cell dynamics in convalescent COVID-19 patients – indications for their potential involvement in the development of Long COVID? Front Immunol 13: 1070994.",
    "linkText": "doi: 10.3389/fimmu.2022.1070994",
    "url": "https://doi.org/10.3389/fimmu.2022.1070994"
  },
  {
    "authors": "Haunhorst S, Bloch W, Ringleb M, Fennen L, Wagner H, Gabriel HHW, Puta C",
    "year": 2022,
    "body": "Acute effects of heavy resistance exercise on biomarkers of neuroendocrine-immune regulation in healthy adults: a systematic review. Exerc Immunol Rev 28: 36-52.",
    "linkText": "eir-isei.de/2022/eir-2022-036-article.pdf",
    "url": "http://eir-isei.de/2022/eir-2022-036-article.pdf"
  },
  {
    "authors": "Haunhorst S, Bloch W, Wagner H, Ellert C, Krüger K, Vilser DC, Finke K, Reuken P, Pletz MW, Stallmach A, Puta C",
    "year": 2022,
    "body": "Long COVID: a narrative review of the clinical aftermaths of COVID-19 with a focus on the putative pathophysiology and aspects of physical activity. Oxford Open Immunology 3(1): iqac006.",
    "linkText": "doi: 10.1093/oxfimm/iqac006",
    "url": "https://doi.org/10.1093/oxfimm/iqac006"
  },
  {
    "authors": "Herbsleb M",
    "year": 2022,
    "body": "Bewegung ins Leben bringen – Sport und Depression. physiopraxis 20(07/08): 48-51.",
    "linkText": "thieme-connect.com/products/ejournals/pdf/10.1055/a-1802-3235.pdf",
    "url": "https://www.thieme-connect.com/products/ejournals/pdf/10.1055/a-1802-3235.pdf"
  },
  {
    "authors": "Herbsleb M",
    "year": 2022,
    "body": "Sporttherapie bei Depression. VPT Magazin 08(03): 16-18.",
    "linkText": "doi: 10.1055/s-0042-1745926",
    "url": "https://doi.org/10.1055/s-0042-1745926"
  },
  {
    "authors": "Herbsleb M, Ziezio R, Stanek FD, Donath L, Puta C",
    "year": 2022,
    "body": "Prävention von haltungs- und inaktivitätsbedingten Funktionsstörungen: Prinzipien und Übungsbeispiele. Muskuloskelettale Physiotherapie 26(02): 87-95.",
    "linkText": "doi: 10.1055/a-1731-6947",
    "url": "https://doi.org/10.1055/a-1731-6947"
  },
  {
    "authors": "Kullik L, Kellmann M, Puta C, Jakowski S",
    "year": 2022,
    "body": "Sleep Behavior and Training Load in Adolescent Elite Basketball Players During Covid-19 Pandemic Development. Chronobiology International 39(11): 1454-1464.",
    "linkText": "doi: 10.1080/07420528.2022.2117051",
    "url": "https://doi.org/10.1080/07420528.2022.2117051"
  },
  {
    "authors": "Markov A, Chaabene H, Hauser L, Behm S, Bloch W, Puta C, Granacher U",
    "year": 2022,
    "body": "Acute Effects of Aerobic Exercise on Muscle Strength and Power in Trained Male Individuals: A Systematic Review with Meta-analysis. Sports Medicine 52(6): 1385-1398.",
    "linkText": "doi: 10.1007/s40279-021-01615-6",
    "url": "https://doi.org/10.1007/s40279-021-01615-6"
  },
  {
    "authors": "Nisser M, Puta C, Hoyer H, Buder A, Baumbach P, Best N",
    "year": 2022,
    "body": "Erfassung von Anstrengungsempfinden und Biosignalen bei mentalen Belastungen: Zusammenhang von subjektiven und objektiven Beanspruchungsparametern. Physikalische Medizin, Rehabilitationsmedizin, Kurortmedizin.",
    "linkText": "doi: 10.1055/a-1839-6506",
    "url": "https://doi.org/10.1055/a-1839-6506"
  },
  {
    "authors": "Stallmach A, Katzer K, Besteher B, Finke K, Giszas B, Gremme Y, Abou Hamdan R, Lehmann-Pohl K, Legen M, Lewejohann JC, Machnik M, Moshmosh Alsabbagh M, Nardini L, Puta C, Stallmach Z, Reuken PA",
    "year": 2022,
    "body": "Mobile primary care for post-COVID patients in rural areas: a proof-of-concept study. Infection 13: 1-9.",
    "linkText": "doi: 10.1007/s15010-022-01881-0",
    "url": "https://doi.org/10.1007/s15010-022-01881-0"
  },
  {
    "authors": "Geisler M, Ritter A, Herbsleb M, Bär K-J, Weiss T",
    "year": 2021,
    "body": "Neural mechanisms of pain processing differ between endurance athletes and nonathletes: A functional connectivity magnetic resonance imaging study. Human Brain Mapping: 1-16.",
    "linkText": "doi: 10.1002/hbm.25659",
    "url": "https://doi.org/10.1002/hbm.25659"
  },
  {
    "authors": "Geisler M, Rizzoni E, Makris N, Pasternak O, Rathi Y, Bouix S, Herbsleb M, Bär K-J, Weiss T, Kikinis Z",
    "year": 2021,
    "body": "Microstructural alterations in medial forebrain bundle are associated with interindividual pain sensitivity. Human Brain Mapping 42: 1130-1137.",
    "linkText": "doi: 10.1002/hbm.25281",
    "url": "https://doi.org/10.1002/hbm.25281"
  },
  {
    "authors": "Puta C, Gabriel HHW",
    "year": 2021,
    "body": "Sportmedizinische Grundlagen: Immunologische Beanspruchung durch körperliche Belastung. In: A Güllich, M Krüger (eds). Bewegung, Training, Leistung und Gesundheit. Springer, Berlin, Heidelberg, Online-ISBN: 978-3-662-53386-4.",
    "linkText": "doi: 10.1007/978-3-662-53386-4_20-1",
    "url": "https://doi.org/10.1007/978-3-662-53386-4_20-1"
  },
  {
    "authors": "Puta C, Haunhorst S, Bloch W",
    "year": 2021,
    "body": "Post-acute Covid-19 (“Long-covid”): Persistent symptoms, possible causes and symptom-driven post-acute Covid-19 management to regain physical performance (Scoping Review). Sports Orthopaedics and Traumatology 37(3): 214-225.",
    "linkText": "doi: 10.1016/j.orthtr.2021.08.006",
    "url": "https://doi.org/10.1016/j.orthtr.2021.08.006"
  },
  {
    "authors": "Puta C, Steidten T, Fischer S",
    "year": 2021,
    "body": "Overarm throwing in humans. In: R Schleip, J Willke, A Baker (Hrsg.). Fascia in Sports and Movement (2 ed.). Handspring Publishing Ltd. pp. 385-392."
  },
  {
    "authors": "Steidten T, Baumbach P, May R, Gabriel B, Herbsleb M, Markov A, Granacher U, Kellmann M, Bloch W, Gabriel HHW, Puta C",
    "year": 2021,
    "body": "Overnight Immune Regulation and Subjective Measures of Sleep: A Three Night Observational Study in Adolescent Track and Field Athletes. Front Sports Act Living 3: 689805.",
    "linkText": "doi: 10.3389/fspor.2021.689805",
    "url": "https://doi.org/10.3389/fspor.2021.689805"
  },
  {
    "authors": "Wagner H, Boström KJ, de Lussanet MHE, de Graaf ML, Puta C, Mochizuki L",
    "year": 2021,
    "body": "Optimized motor control reduces knee-joint forces during walking and squatting: Validating the inverse dynamics approach for full body movements on instrumented knee prostheses. arXiv:2109.07884.",
    "linkText": "doi: 10.48550/arXiv.2109.07884",
    "url": "https://doi.org/10.48550/arXiv.2109.07884"
  },
  {
    "authors": "Granacher U, Höhne J, Puta C, Büsch D",
    "year": 2020,
    "body": "Frühspezialisierung vs. multisportive Ausbildung. Modelle der körperlichen Leistungsfähigkeit im Nachwuchsleistungssport. Leistungssport 6: 35-41."
  },
  {
    "authors": "Herbsleb M, Schumann A, Lehmann L, Gabriel HHW, Bär KJ",
    "year": 2020,
    "body": "Cardio-Respiratory Fitness and Autonomic Function in Patients with Major Depressive Disorder. Front Psychiatry 10: 980. eCollection 2019.",
    "linkText": "doi: 10.3389/fpsyt.2019.00980",
    "url": "https://doi.org/10.3389/fpsyt.2019.00980"
  },
  {
    "authors": "Lesinski M, Schmelcher A, Herz M, Puta C, Gabriel H, Arampatzis A, Laube G, Büsch D, Granacher U",
    "year": 2020,
    "body": "Maturation-, age- and sex-specific anthropometric and physical fitness percentiles of German elite young athletes. PLoS One 15(8): e0237423.",
    "linkText": "doi: 10.1371/journal.pone.0237423",
    "url": "https://doi.org/10.1371/journal.pone.0237423"
  },
  {
    "authors": "Scharschmidt R, Derlien S, Siebert T, Herbsleb M, Stutzig N",
    "year": 2020,
    "body": "Intraday and interday reliability of pelvic floor muscles electromyography in continent woman. Neurourol Urodyn 39: 271-278.",
    "linkText": "doi: 10.1002/nau.24187",
    "url": "https://doi.org/10.1002/nau.24187"
  },
  {
    "authors": "Steidten T, Puta C",
    "year": 2020,
    "body": "Narratives Review zur Wirksamkeit von Faszientechniken. In: I Dienstbühl, M Stadeler, C Puta (Hrsg). 26. Erfurter Tage: Prävention von Arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 201-208."
  },
  {
    "authors": "Herbsleb M, Keller-Varady K, Wobrock T, Hasan A, Schmitt A, Falkai P, Gabriel HHW, Bär KJ, Malchow B",
    "year": 2019,
    "body": "The Influence of Continuous Exercising on Chronotropic Incompetence in Multi-Episode Schizophrenia. Frontiers in Psychiatry 10: 90.",
    "linkText": "doi: 10.3389/fpsyt.2019.00090",
    "url": "https://doi.org/10.3389/fpsyt.2019.00090"
  },
  {
    "authors": "Heydenreich M, Puta C, Gabriel HHW, Dietze A, Wright P, Zermann D-H",
    "year": 2019,
    "body": "Does trunk muscle training with an oscillating rod improve urinary incontinence after radical prostatectomy? A prospective randomized controlled trial. Clinical Rehabilitation.",
    "linkText": "doi: 10.1177/0269215519893096",
    "url": "https://doi.org/10.1177/0269215519893096"
  },
  {
    "authors": "Kurz E, Herbsleb M, Gabriel HHW, Hilberg T",
    "year": 2019,
    "body": "Posturographic and ankle muscle activation characteristics in patients with haemophilia. Haemophilia 25: 136-143.",
    "linkText": "doi: 10.1111/hae.13650",
    "url": "https://doi.org/10.1111/hae.13650"
  },
  {
    "authors": "Nothnagel H, Brown Menard M, Kvarstein G, Norheim AJ, Weiss T, Puta C, Mist SD, Musial F",
    "year": 2019,
    "body": "Recruitment and inclusion procedures as \"pain killers\" in clinical trials? J Pain Res 12: 2027-2037.",
    "linkText": "doi: 10.2147/JPR.S204259",
    "url": "https://doi.org/10.2147/JPR.S204259"
  },
  {
    "authors": "Prieske O, Chaabene H, Puta C, Behm DG, Büsch D, Granacher U",
    "year": 2019,
    "body": "Effects of Drop Height on Jump Performance in Male and Female Elite Adolescent Handball Players. Int J Sports Physiol Perform 14(5): 674-680.",
    "linkText": "doi: 10.1123/ijspp.2018-0482",
    "url": "https://doi.org/10.1123/ijspp.2018-0482"
  },
  {
    "authors": "Bähr F, Ritter A, Seidel G, Puta C, Gabriel HHW, Hamzei F",
    "year": 2018,
    "body": "Boosting the Motor Outcome of the Untrained Hand by Action Observation: Mirror Visual Feedback, Video Therapy, or Both Combined - What is More Effective? Neural Plasticity, Article ID 8369262.",
    "linkText": "doi: 10.1155/2018/8369262",
    "url": "https://doi.org/10.1155/2018/8369262"
  },
  {
    "authors": "Blume KR, Racz J, Franz M, Dietrich C, Puta C, Friedel R, Hofmann GO, Miltner WHRH, Weiss T",
    "year": 2018,
    "body": "Quantitative sensory testing after macroreplantation: evidence for a specific somatosensory profile. Pain 159(7): 1289-1296.",
    "linkText": "doi: 10.1097/j.pain.0000000000001210",
    "url": "https://doi.org/10.1097/j.pain.0000000000001210"
  },
  {
    "authors": "Gabriel HHW, Puta C",
    "year": 2018,
    "body": "Leistung in Gesundheit: Risiken und Ressourcen. Leistungssport, 48(5): 25-26."
  },
  {
    "authors": "Granacher U, Puta C, Gabriel HHW, Behm DG, Arampatzis A",
    "year": 2018,
    "body": "Editorial: Neuromuscular Training and Adaptations in Youth Athletes. Frontiers in Physiology 9: 1264.",
    "linkText": "doi: 10.3389/fphys.2018.01264",
    "url": "https://doi.org/10.3389/fphys.2018.01264"
  },
  {
    "authors": "Herbsleb M, Schumann A, Malchow B, Puta C, Schulze PC, Gabriel HW, Bär KJ",
    "year": 2018,
    "body": "Chronotropic incompetence of the heart is associated with exercise intolerance in patients with schizophrenia. Schizophrenia Research 197: 162-169.",
    "linkText": "doi: 10.1016/j.schres.2018.02.020",
    "url": "https://doi.org/10.1016/j.schres.2018.02.020"
  },
  {
    "authors": "Puta C, Gabriel HHW, Arampatzis A, Granacher U",
    "year": 2018,
    "body": "Fazit des KINGS-Symposiums 2018: Evidenz - Wissen - Handlungsempfehlungen. Leistungssport 48(5): 27-28."
  },
  {
    "authors": "Puta C, Steidten T, Baumbach P, Wöhrl T, May R, Kellmann M, Herbsleb M, Gabriel B, Weber S, Granacher U, Gabriel HHW",
    "year": 2018,
    "body": "Standardized Assessment of Resistance Training-Induced Subjective Symptoms and Objective Signs of Immunological Stress Responses in Young Athletes. Frontiers in Physiology 9: 698.",
    "linkText": "doi: 10.3389/fphys.2018.00698",
    "url": "https://doi.org/10.3389/fphys.2018.00698"
  },
  {
    "authors": "Steidten T, Puta C, Gabriel B, May R, Kellmann M, Granacher U, Gabriel HHW",
    "year": 2018,
    "body": "Belastungsinduzierte immunologische Stressreaktion: How much is too much? Leistungssport, 48(5): 22-24."
  },
  {
    "authors": "Weber S, Puta C, Lesinski M, Gabriel B, Steidten T, Bär KJ, Herbsleb M, Granacher U, Gabriel HHW",
    "year": 2018,
    "body": "Symptoms of Anxiety and Depression in Young Athletes Using the Hospital Anxiety and Depression Scale. Frontiers in Physiology 9: 182.",
    "linkText": "doi: 10.3389/fphys.2018.00182",
    "url": "https://doi.org/10.3389/fphys.2018.00182"
  },
  {
    "authors": "Büsch D, Prieske O, Kriemler S, Puta C, Gabriel H, Granacher U",
    "year": 2017,
    "body": "Krafttraining im Kindes- und Jugendalter: Bedeutung, Wirkung und Handlungsempfehlungen. Swiss Sports & Exercise Medicine 65 (3), 34-42."
  },
  {
    "authors": "Funk S, Finke R, Zeh S, Siebert T, Puta C",
    "year": 2017,
    "body": "Effects of a paraspinal-lumbar tape application during 7 days on the perceived area of tape contact. Physical Therapy in Spor, 25: 89-93.",
    "linkText": "doi: 10.1016/j.ptsp.2016.10.005",
    "url": "https://doi.org/10.1016/j.ptsp.2016.10.005"
  },
  {
    "authors": "Mühlbeier A, Puta C, Boström KJ, Wagner H",
    "year": 2017,
    "body": "Monosynaptic Stretch Reflex Fails to Explain the Initial Postural Response to Sudden Lateral Perturbations. Frontiers in Human Neuroscience 11:296.",
    "linkText": "doi: 10.3389/fnhum.2017.00296",
    "url": "https://doi.org/10.3389/fnhum.2017.00296"
  },
  {
    "authors": "Nothnagel H, Puta C, Lehmann T, Baumbach P, Menard MB, Gabriel B, Gabriel HHW, Weiss T, Musial F",
    "year": 2017,
    "body": "How stable are quantitative sensory testing measurements over time? Report on 10-week reliability and agreement of results in healthy volunteers. Journal of Pain Research 10: 2067-2078.",
    "linkText": "doi: 10.2147/JPR.S137391",
    "url": "https://doi.org/10.2147/JPR.S137391"
  },
  {
    "authors": "Wagner G, Herbsleb M, Cruz F, Schumann A, Köhler S, Puta C, Gabriel HW, Reichenbach J R, Bär KJ",
    "year": 2017,
    "body": "Changes in fMRI activation in anterior hippocampus and motor cortex during memory retrieval after an intense exercise intervention. Biological Psychology 124: 65-78.",
    "linkText": "doi: 10.1016/j.biopsycho.2017.01.003",
    "url": "https://doi.org/10.1016/j.biopsycho.2017.01.003"
  },
  {
    "authors": "Abou Hamdan R, Schumann A, Herbsleb M, Schmidt M, Rose G, Bär K-J, Gabriel H",
    "year": 2016,
    "body": "Determining cardiac vagal threshold from short term heart rate complexity. Current Directions in Biomedical Engineering 2(1): 155-159.",
    "linkText": "doi: 10.1515/cdbme-2016-0036",
    "url": "https://doi.org/10.1515/cdbme-2016-0036"
  },
  {
    "authors": "Gabriel H, Puta C, Arampatzis A, Granacher U",
    "year": 2016,
    "body": "Fazit und Ausblick der KINGS-Studie: Potenziale des Nachwuchsleistungssports für junge Menschen. Leistungssport 46(6): 37-39."
  },
  {
    "authors": "Granacher U, Lesinski M, Büsch D, Mühlbauer T, Prieske O, Puta C, Gollhofer A, Behm DG",
    "year": 2016,
    "body": "Effects of resistance training in youth athletes on muscular fitness and athletic performance: A conceptual model for long-term athlete development. Frontiers in Physiology 7: 164.",
    "linkText": "doi: 10.3389/fphys.2016.00164",
    "url": "https://doi.org/10.3389/fphys.2016.00164"
  },
  {
    "authors": "Jelínková I, Rorfová M, Wagner H, Puta C",
    "year": 2016,
    "body": "The evaluation of upright posture caused by simple movement test. J Back Musculoskelet Rehabil 29(1): 15-21.",
    "linkText": "doi: 10.3233/BMR-140568",
    "url": "https://doi.org/10.3233/BMR-140568"
  },
  {
    "authors": "Lesinski M, Mühlbauer T, Prieske O, Büsch D, Gollhofer A, Puta C, Behm D G, Granacher U",
    "year": 2016,
    "body": "Krafttraining im Nachwuchsleistungssport: Wirkungen und Einsatz im langfristigen Leistungsaufbau. Leistungssport 46(6): 11-14."
  },
  {
    "authors": "Nothnagel H, Puta C, Gabriel H, Weiss T, Musial F",
    "year": 2016,
    "body": "Existieren geografische Unterschiede für die Sensitivität bei der Untersuchung thermischer Schwellen zwischen einer arktischen und einer mitteleuropäischen Population?. Der Schmerz 30: 58."
  },
  {
    "authors": "Puta C, Franz M, Blume KR, Gabriel HHW, Miltner WHR, Weiss T",
    "year": 2016,
    "body": "Are There Abnormalities in Peripheral and Central Components of Somatosensory Evoked Potentials in Non-Specific Chronic Low Back Pain? Frontiers in Human Neuroscience 10: 521.",
    "linkText": "doi: 10.3389/fnhum.2016.00521",
    "url": "https://doi.org/10.3389/fnhum.2016.00521"
  },
  {
    "authors": "Puta C, Gabriel B, Gabriel H",
    "year": 2016,
    "body": "Sport und Immunsystem. In: M Wonisch, P Hofmann, H Förster, H Hörtnagl, E Ledl-Kurkowski, R Pokan (editor). Kompendium der Sportmedizin: Physiologie, Innere Medizin und Pädiatrie. Springer, Austria, 2. Auflage. pp. 389-414."
  },
  {
    "authors": "Puta C, Weber S, May R, Steidten T, Hildebrandt P, Gabriel B, Herbsleb M, Lesinski M, Kellmann M, Granacher U, Gabriel H",
    "year": 2016,
    "body": "Immun-Score: Entwicklung eines benutzerfreundlichen Instruments zur standardisierten Erfassung von Symptomen für die Differenzierung von belastungsinduzierter und infektbasierter Stressreaktion im Nachwuchsleistungssport. Leistungssport 46(6): 15-18."
  },
  {
    "authors": "Ritter A, Franz M, Puta C, Dietrich C, Miltner WHR, Weiss T",
    "year": 2016,
    "body": "Enhanced brain responses to pain-related words in chronic back pain patients and their modulation by current pain. Healthcare 4(3): 54.",
    "linkText": "doi: 10.3390/healthcare4030054",
    "url": "https://doi.org/10.3390/healthcare4030054"
  },
  {
    "authors": "Zeh S, Nothnagel H, Gabriel B, Gabriel H, Weiss T, Musial F, Wagner H, Puta C",
    "year": 2016,
    "body": "Prädiktive individuelle Klassifikation von Parametern der Quantitativ Sensorischen Testung (QST) und psychometrischer Angaben bei nicht spezifischem Rückenschmerz. In: I Dienstbühl, M Stadeler, HC Scholle, editor. 22. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 289-293."
  },
  {
    "authors": "Franz M, Ritter A, Puta C, Miltner W H, Weiss T",
    "year": 2015,
    "body": "Diagnostischer Vergleich der thermischen Parameter der quantitativ sensorischen Testung und der Laserstimulation bei postherpetischer Neuralgie. Schmerz 30: 89-91.",
    "linkText": "doi: 10.1007/s00482-015-0079-0",
    "url": "https://doi.org/10.1007/s00482-015-0079-0"
  },
  {
    "authors": "Gabriel HHW, Herbsleb M, Puta C",
    "year": 2015,
    "body": "Sportmedizinische Grundlagen. In: V Markser, K-J Bär, editor. Sport- und Bewegungstherapie bei seelischen Erkrankungen: Forschungsstand und Praxisempfehlungen. Stuttgart: Schattauer. pp. 47-54."
  },
  {
    "authors": "Herbsleb M, Puta C",
    "year": 2015,
    "body": "Grundlagen der Trainingslehre. In: V Markser, K-J Bär, editor. Sport- und Bewegungstherapie bei seelischen Erkrankungen: Forschungsstand und Praxisempfehlungen. Stuttgart: Schattauer. pp. 36-46."
  },
  {
    "authors": "Lükens J, Boström KJ, Puta C, Schulte TL, Wagner H",
    "year": 2015,
    "body": "Using ultrasound to assess the thickness of the transversus abdominis in a sling exercise. BMC Musculoskeletal Disorders 16(1): 203.",
    "linkText": "doi: 10.1186/s12891-015-0674-3",
    "url": "https://doi.org/10.1186/s12891-015-0674-3"
  },
  {
    "authors": "Nothnagel H, Puta C, Weiss T, Gabriel B, Gabriel H, Musial F",
    "year": 2015,
    "body": "Langzeit Test-Retest Reliabilität der Quantitativ Sensorischen Testung (QST) an Rücken und Hand. Der Schmerz 29: 47."
  },
  {
    "authors": "Nothnagel H, Puta C, Weiss T, Gabriel B, Gabriel H, Musial F",
    "year": 2015,
    "body": "Long-term test-retest reliability of quantitative sensory testing (QST) in healthy participants. 9th Congress of the European Pain Federation, EFIC®, Vienna, Austria, 2.-5. September 2015."
  },
  {
    "authors": "Puta C, Baumgart M, Puta J",
    "year": 2015,
    "body": "Update Sportwissenschaft: Statisches oder neurodynamisches Dehnen? Sportpraxis 56(5+6): 39-43."
  },
  {
    "authors": "Wagner G, Herbsleb M, de la Cruz F, Schumann A, Brünner F, Schachtzabel C, Gussew A, Puta C, Smesny S, Gabriel HW, Reichenbach J R, Bär KJ",
    "year": 2015,
    "body": "Hippocampal structure, metabolism, and inflammatory response after a 6-week intense aerobic exercise in healthy young adults: a controlled trial. Journal of Cerebral Blood Flow & Metabolism 35(10): 1570-1578.",
    "linkText": "doi: 10.1038/jcbfm.2015.125",
    "url": "https://doi.org/10.1038/jcbfm.2015.125"
  },
  {
    "authors": "Boström KJ, de Lussanet MH, Weiss T, Puta C, Wagner H",
    "year": 2014,
    "body": "A computational model unifies apparently contradictory findings concerning phantom pain. Scientific Reports 4: 5298.",
    "linkText": "doi: 10.1038/srep05298",
    "url": "https://doi.org/10.1038/srep05298"
  },
  {
    "authors": "Donath L, Siebert T, Faude O, Puta C",
    "year": 2014,
    "body": "Correct, fake and absent pre-information does not affect the occurrence and magnitude of the bilateral force deficit. Journal of sports science & medicine 13: 439-443.",
    "linkText": "PMCID: PMC3990902",
    "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3990902/"
  },
  {
    "authors": "Franz M, Ritter A, Puta C, Nötzel D, Miltner WH, Weiss T",
    "year": 2014,
    "body": "Laser heat hyperalgesia is not a feature of non-specific chronic low back pain. European journal of pain 18(10): 1501-1508.",
    "linkText": "doi: 10.1002/ejp.535",
    "url": "https://doi.org/10.1002/ejp.535"
  },
  {
    "authors": "Herbleb M, Puta C",
    "year": 2014,
    "body": "Schwingstab. In: HD Kempf, editor. Funktionelles Training mit Hand- und Kleingeräten. Das Praxisbuch: Springer Verlag, Berlin, Heidelberg. pp. 449-487."
  },
  {
    "authors": "Herbsleb M, Mühlhaus T, Bär KJ",
    "year": 2014,
    "body": "Differential cardiac effects of aerobic interval training versus moderate continuous training in a patient with schizophrenia: a case report. Front Psychiatry 5: 119.",
    "linkText": "doi: 10.3389/fpsyt.2014.00119",
    "url": "https://doi.org/10.3389/fpsyt.2014.00119"
  },
  {
    "authors": "Polchow K, Anders C, Puta C, Scholle HC, Strauß B, Borys C",
    "year": 2014,
    "body": "Ist Depressivität mit einer verminderten Leistungsfähigkeit im Rückenbereich bei Patientinnen mit chronisch unspezifischem Rückenschmerz verbunden? In: I Dienstbühl, M Stadeler, HC Scholle, editor. 20. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Dr. Bussert & Stadeler. pp. 387-388."
  },
  {
    "authors": "Puta C, Herbsleb M",
    "year": 2014,
    "body": "Training der motorischen Grundeigenschaften. In: H-D Kempf, editor. Die Neue Rückenschule. Ein Praxishandbuch. Berlin, Heidelberg: Springer-Verlag, 2. Auflage. pp. 217-244."
  },
  {
    "authors": "Wagner H, Rehmes U, Kohle D, Puta C",
    "year": 2014,
    "body": "Laughing: a demanding exercise for trunk muscles. Journal of Motor Behavior 46: 33-37.",
    "linkText": "doi: 10.1080/00222895.2013.844091",
    "url": "https://doi.org/10.1080/00222895.2013.844091"
  },
  {
    "authors": "Blochberger L, Franz M, Ritter A, Puta C, Weiss T",
    "year": 2013,
    "body": "Nozizeptive Zwei-Punkt-Diskriminationsleistung am Rücken auf Laserstimuli, appliziert in unterschiedlicher Orientierung. Der Schmerz 27: 123."
  },
  {
    "authors": "de Lussanet MH, Behrendt F, Puta C, Schulte TL, Lappe M, Weiss T, Wagner H",
    "year": 2013,
    "body": "Impaired visual perception of hurtful actions in patients with chronic low back pain. Hum Mov Sci 32(5): 938-953.",
    "linkText": "doi: 10.1016/j.humov.2013.05.002",
    "url": "https://doi.org/10.1016/j.humov.2013.05.002"
  },
  {
    "authors": "Franz M, Ritter A, Blochberger L, Puta C, Miltner W, Weiss T",
    "year": 2013,
    "body": "Zentrale Verarbeitung von Laserhitzereizen bei Personen mit nicht- spezifischen chronischen Rückenschmerzen. Der Schmerz 27: 96."
  },
  {
    "authors": "Funk S, Wenzel D, Gabriel B, Gabriel H, Pfau D, Weiss T, Puta C",
    "year": 2013,
    "body": "Die Druckschmerzschwelle am lumbalen Rücken bei Gesunden - Test-Retest-Reliabilität und Beeinflussbarkeit durch Anlage eine Kinesiotapes. Der Schmerz 27: 97."
  },
  {
    "authors": "Herbsleb M, Schulz S, Ostermann S, Donath L, Eisenträger D, Puta C, Voss A, Gabriel HW, Bär KJ",
    "year": 2013,
    "body": "The relation of autonomic function to physical fitness in patients suffering from alcohol dependence. Drug Alcohol Depend 132(3): 505-512.",
    "linkText": "doi: 10.1016/j.drugalcdep.2013.03.016",
    "url": "https://doi.org/10.1016/j.drugalcdep.2013.03.016"
  },
  {
    "authors": "Liebetrau A, Puta C, Anders C, de Lussanet MH, Wagner H",
    "year": 2013,
    "body": "Influence of delayed muscle reflexes on spinal stability: model-based predictions allow alternative interpretations of experimental data. Hum Mov Sci 32: 954-970.",
    "linkText": "doi: 10.1016/j.humov.2013.03.006",
    "url": "https://doi.org/10.1016/j.humov.2013.03.006"
  },
  {
    "authors": "Nothnagel H, Abou-Hamdan R, Zeh S, Bär KJ, Gabriel H, Puta C",
    "year": 2013,
    "body": "Effekte kutaner punktueller schmerzhafter mechanischer Stimuli am unteren Rücken auf die Herzrate bei Personen ohne chronische Rückenschmerzen. Der Schmerz 27: 122."
  },
  {
    "authors": "Ostermann S, Herbsleb M, Schulz S, Donath L, Berger S, Eisenträger D, Siebert T, Müller HJ, Puta C, Voss A, Gabriel HW, Koch K, Bär KJ",
    "year": 2013,
    "body": "Exercise reveals the interrelation of physical fitness, inflammatory response, psychopathology, and autonomic function in patients with schizophrenia. Schizophr Bull 39(5): 1139-1149.",
    "linkText": "doi: 10.1093/schbul/sbs085",
    "url": "https://doi.org/10.1093/schbul/sbs085"
  },
  {
    "authors": "Puta C, Nötzel D, Borys C, Anders C, Wagner H, Weiss T, Gabriel B, Scholle H-C, Valet G, Gabriel H",
    "year": 2013,
    "body": "Individuelle Klassifikation von Patienten mit chronisch-nicht spezifischem Rückenschmerz mittels CLASSIF1 (Datensiebung-Algorithmus). In: CJ Kirchner, M Stadeler, HC Scholle, editor. 19. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 317-323."
  },
  {
    "authors": "Puta C, Schulz B, Schoeler S, Magerl W, Gabriel B, Gabriel HHW, Miltner WHR, Weiss T",
    "year": 2013,
    "body": "Somatosensory abnormalities for painful and innocuous stimuli at the back and at a site distinct from the region of pain in chronic back pain patients. PloS one 8: e58885.",
    "linkText": "doi: 10.1371/journal.pone.0058885",
    "url": "https://doi.org/10.1371/journal.pone.0058885"
  },
  {
    "authors": "Puta C, Zeh S, Nötzel D, Anders C, Gabriel H, Weiss T, Wagner H",
    "year": 2013,
    "body": "Verzögerte reflektorische Aktivierung von Hüft- und Beinmuskulatur bei chronischem Rückenschmerz. Der Schmerz 27: 120."
  },
  {
    "authors": "Ritter A, Franz A, Puta C, Richter M, Miltner W, Weiss T",
    "year": 2013,
    "body": "Activation of the brain during the processing of pain-related words in low back pain patients. Der Schmerz 27: 95."
  },
  {
    "authors": "Bär K-J, Herbsleb M, Schulz S, Rachow T, Eisenträger D, Puta C, Gabriel H, Voss A",
    "year": 2012,
    "body": "Physical fitness and autonomic dysbalance in schizophrenia. Biomed Tech (Berl) 57."
  },
  {
    "authors": "De Lussanet MH, Behrendt F, Puta C, Weiss T, Lappe M, Schulte TL, Wagner H",
    "year": 2012,
    "body": "A body-part-specific impairment in the visual recognition of actions in chronic pain patients. Pain 153: 1459-1466.",
    "linkText": "doi: 10.1016/j.pain.2012.04.002",
    "url": "https://doi.org/10.1016/j.pain.2012.04.002"
  },
  {
    "authors": "Franz M, Nötzel D, Blume K, Ritter A, Puta C, Miltner WHR, Weiss T",
    "year": 2012,
    "body": "Gesteigerte Schmerzsensitivität und verringerte Amplituden von laserevozierten Potenzialen bei Personen mit chronischen nicht-spezifischen Rückenschmerzen. Der Schmerz 26: 85."
  },
  {
    "authors": "Funk S, Schulz B, Nötzel D, Gabriel B, Weiss T, Gabriel H, Puta C",
    "year": 2012,
    "body": "Effekte von Kinesiotape auf die mechanische Schmerzsensitivität und taktil-räumliche Genauigkeit am lumbalen Rücken. In: CJ Kirchner, M Stadeler, HC Scholle, editor. 18. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 347-354."
  },
  {
    "authors": "Funk S, Schulz B, Sens E, Gabriel B, Gabriel H, Weiss T, Puta C",
    "year": 2012,
    "body": "Taktil-räumliche Genauigkeit an der Hand bei Patienten mit chronischem unspezifischem Rückenschmerz (CURS) und gesunden Kontrollpersonen. Der Schmerz 26: 87."
  },
  {
    "authors": "Herbsleb M, Abou-Hamdan R, Puta C, Donath L, Kobelt R, Stanek FD, Hilberg T, Gabriel HHW",
    "year": 2012,
    "body": "Schwere und mittelschwere Hämophilie unter prophylaktischer Substitutionstherapie: Maximale Drehmomente der Knieextensoren und Knieflexoren bei Kindern und Jugendlichen. Hamostaseologie 32 Suppl 1: S62-69.",
    "linkText": "PMID: 22961403",
    "url": "https://pubmed.ncbi.nlm.nih.gov/22961403/"
  },
  {
    "authors": "Herbsleb M, Donath L, Hamdan R, Puta C, Kobelt R, Hilberg T, Gabriel H",
    "year": 2012,
    "body": "Is there a link between aerobic capacity and behavioural attributes in children with haemophilia? A pilot study. 43rd Hemophilia Symposium. Hamburg."
  },
  {
    "authors": "Kurz E, Anders C, Herbsleb M, Puta C, Czepa D, Hilberg T",
    "year": 2012,
    "body": "Ankle muscle activation in people with haemophilia. Haemophilia 18 (6): 948-954.",
    "linkText": "doi: 10.1111/j.1365-2516.2012.02852.x",
    "url": "https://doi.org/10.1111/j.1365-2516.2012.02852.x"
  },
  {
    "authors": "Kurz E, Herbsleb M, Anders C, Czepa D, Puta C, Hilberg T",
    "year": 2012,
    "body": "Concurrent and synergistic activation of selected muscles of severely affected haemophilic ankle joints during bipedal standing. Acta Physiol 204(689)."
  },
  {
    "authors": "Liebetrau A, Puta C, Schinowski D, Wulf T, Wagner H",
    "year": 2012,
    "body": "Besteht ein Zusammenhang zwischen Rückenschmerz und der Stabilität der lumbalen Wirbelsäule in der Schwangerschaft? : Eine modellbasierte Hypothese. Schmerz 26: 36-45.",
    "linkText": "doi: 10.1007/s00482-011-1125-1",
    "url": "https://doi.org/10.1007/s00482-011-1125-1"
  },
  {
    "authors": "Liebetrau A, Puta C, Schinowski D, Wulf T, Wagner H",
    "year": 2012,
    "body": "Besteht ein Zusammenhang zwischen Rückenschmerz und der Stabilität der lumbalen Wirbelsäule in der Schwangerschaft? : Eine modellbasierte Hypothese. Manuelle Medizin 50(2): 132-140.",
    "linkText": "doi: 10.1007/s00337-012-0905-8",
    "url": "https://doi.org/10.1007/s00337-012-0905-8"
  },
  {
    "authors": "Nötzel D, Anders C, Wagner H, Gabriel B, Liebetrau A, Gabriel H, Puta C",
    "year": 2012,
    "body": "Veränderte reflektorische Kontrolle der abdominalen Muskulatur bei Patienten mit chronischem unspezifischem Rückenschmerz während externer Entlastungsstörungen. Der Schmerz 26: 86."
  },
  {
    "authors": "Puta C, de Lussanet de la Sablonière M, Behrendt F, Weiss T, Lappe M, Wagner H",
    "year": 2012,
    "body": "Chronische Schmerzen verändern die visuelle Erkennung von Bewegungen für schmerzassoziierte Körperregionen. Der Schmerz 26: 118."
  },
  {
    "authors": "Puta C, Nötzel D, Borys C, Anders C, Grieshaber R, Scholle H-C, Gabriel H",
    "year": 2012,
    "body": "Klassifikation von SIPR Patienten mit Rückenschmerz vor und nach Therapie anhand von elektrophysiologischen und psychometrischen Parametern - Pilotuntersuchung. In: CJ Kirchner, M Stadeler, HC Scholle, editor. 18. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 257-264."
  },
  {
    "authors": "Puta C, Schulz B, Schoeler S, Magerl W, Gabriel B, Gabriel HHW, Miltner WH, Weiss T",
    "year": 2012,
    "body": "Enhanced sensitivity to punctate painful stimuli in female patients with chronic low back pain. BMC Neurol 12: 98.",
    "linkText": "doi: 10.1186/1471-2377-12-98",
    "url": "https://doi.org/10.1186/1471-2377-12-98"
  },
  {
    "authors": "Wulf A, Wagner H, Wulf T, Schinowski D, Puta C, Anders C, Chong SY",
    "year": 2012,
    "body": "Phasic bursting pattern of postural responses may reflect internal dynamics: simulation of trunk reflexes with a neural oscillator model. J Biomech 45(15): 2645-2650.",
    "linkText": "doi: 10.1016/j.jbiomech.2012.08.010",
    "url": "https://doi.org/10.1016/j.jbiomech.2012.08.010"
  },
  {
    "authors": "Anders C, Puta C, Koch M, Grieshaber R, Scholle HC",
    "year": 2011,
    "body": "Detaillierte spatiale Analyse der Rückenmuskelkoordination während Lokomotion bei Gesunden und Rückenschmerzpatienten. In: R Grieshaber, M Stadeler, HC Scholle, editor. 17. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 267-278."
  },
  {
    "authors": "Bär KJ, Herbsleb M, Eisenträger D, Berger S, Schulz S, Voss A, Puta C, Gabriel H",
    "year": 2011,
    "body": "Störung von Atemregulation sowie kardialer Kontrolle während körperlicher Belastung bei Patienten mit paranoider Schizophrenie. Posterpräsentation auf der Jahrestagung der Deutschen Gesellschaft für Psychiatrie, Psychotherapie und Nervenheilkunde (DGPPN). pp. P006."
  },
  {
    "authors": "Funk S, Schulz B, Nötzel D, Gabriel B, Weiss T, Gabriel H, Puta C",
    "year": 2011,
    "body": "Existiert ein Einfluss von Kinesiotape auf mechanische Schmerzschwellen und taktile Genauigkeit am lumbalen Rücken? Der Schmerz 25: 104."
  },
  {
    "authors": "Gabriel H, Wick C, Puta C, Hübscher M",
    "year": 2011,
    "body": "Komponenten präventiven Gesundheitstrainings - Ausdauer, Kraft, Beweglichkeit, Koordination, Sensomotorik. In: L Vogt A Neumann, editor. Sport in der Prävention: Handbuch für Übungsleiter, Sportlehrer, Physiotherapeuten und Trainer ; in Kooperation mit dem Deutschen Olympischen Sportbund. Köln: Deutscher Ärzteverlag. pp. 51-104."
  },
  {
    "authors": "Herbsleb M, Hamdan R, Puta C, Donath L, Kobelt R, Hilberg T, Gabriel H",
    "year": 2011,
    "body": "Maximale Drehmomente der Knieextensoren und Knieflexoren von Kindern und Jugendlichen mit schwerer und mittelschwerer Hämophilie unter prophylaktischer Substitutionstherapie. 42 Hämophilie-Symposion. Hamburg."
  },
  {
    "authors": "Herbsleb M, Puta C, Oswald K, Donath L, Kobelt R, Hilberg T, Gabriel H",
    "year": 2011,
    "body": "Statisches Gleichgewichtsverhalten und Standregulation von Kindern und Jugendlichen mit schwerer und mittelschwerer Hämophilie unter prophylaktischer Substitutionstherapie. 42 Hämophilie-Symposion. Hamburg."
  },
  {
    "authors": "Kurz E, Herbsleb M, Anders C, Czepa D, Puta C, Hilberg T",
    "year": 2011,
    "body": "Different functional surfaces alter knee muscle activation levels during bipedal standing in healthy subjects - methodological aspects for sensory-motor programs. Physiotherapy 97: eS646."
  },
  {
    "authors": "Kurz E, Herbsleb M, Anders C, Czepa D, Puta C, Hilberg T",
    "year": 2011,
    "body": "Aktivierungsstrategien von Muskeln des Sprunggelenkes in Abhängigkeit visueller Deprivation bei Patienten mit Hämophilie. Deutsche Zeitschrift für Sportmedizin 62: 253, R 301."
  },
  {
    "authors": "Kurz E, Herbsleb M, Anders C, Graßme R, Czepa D, Puta C, Hilberg T",
    "year": 2011,
    "body": "Spektralanalyse von Sprunggelenkmuskeln im Stand auf hartem und weichem Untergrund bei Patienten mit Hämophilie. Deutsche Zeitschrift für Sportmedizin 62: 208, R 124."
  },
  {
    "authors": "Kurz E, Herbsleb M, Anders C, Puta C, Vollandt R, Czepa D, Ziezio R, Scholle HC, Hilberg T",
    "year": 2011,
    "body": "SEMG activation patterns of thigh muscles during upright standing in haemophilic patients. Haemophilia 17 (4): 669-675.",
    "linkText": "doi: 10.1111/j.1365-2516.2010.02466.x",
    "url": "https://doi.org/10.1111/j.1365-2516.2010.02466.x"
  },
  {
    "authors": "Liebetrau A, Puta C, Schinowski D, Wagner H",
    "year": 2011,
    "body": "Rückenschmerz während der Schwangerschaft - ein Stabilitätsproblem der lumbalen Wirbelsäule? Antworten mittels eines Muskel-Skelett-Modells. Der Schmerz 25: 102."
  },
  {
    "authors": "Nötzel D, Puta C, Anders C, Borys C, Wagner H, Gabriel B, Valet G, Gabriel H",
    "year": 2011,
    "body": "Kassifikation von Rückenschmerz auf Basis elektrophysiologischer und psychosozialer Parameter. In: R Grieshaber, M Stadeler, HC Scholle, editor. 17. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 501-505."
  },
  {
    "authors": "Nötzel D, Puta C, Borys C, Anders C, Wagner H, Gabriel B, Valet G, Gabriel H",
    "year": 2011,
    "body": "Kassifikation von Patienten mit Rückenschmerz auf Basis elekt-rophysiologischer und psychosozialer Daten. Der Schmerz 25: 102."
  },
  {
    "authors": "Nötzel D, Puta C, Wagner H, Anders C, Petrovich A, Gabriel HHW",
    "year": 2011,
    "body": "Veränderte Beckenmuskelaktivierung bei Patienten mit chronischem nichtspezifischem Rückenschmerz. Der Schmerz, 25: 199-206.",
    "linkText": "doi: 10.1007/s00482-010-1010-3",
    "url": "https://doi.org/10.1007/s00482-010-1010-3"
  },
  {
    "authors": "Puta C, Herbsleb M, Weiss T, Gabriel H",
    "year": 2011,
    "body": "Rückenschmerz - Schmerzverarbeitung und aktive segmentale Stabilisation. Aktuelle Aspekte der \"neuen Rückenschule\". Manuelle Medizin 49: 83-90.",
    "linkText": "doi: 10.1007/s00337-011-0818-y",
    "url": "https://doi.org/10.1007/s00337-011-0818-y"
  },
  {
    "authors": "Puta C, Schöler S, Anders C, Koch M, Weiss T, Grieshaber R, Scholle HC, Gabriel H",
    "year": 2011,
    "body": "Quantitative Untersuchung der somatosensorischen Funktion und reflektorischen Kontrolle bei chronischem Rückenschmerz. In: R Grieshaber, M Stadeler, HC Scholle, editor. 17. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 377-381."
  },
  {
    "authors": "Puta C, Schulz B, Schöler S, Magerl W, Gabriel B, Gabriel H, Weiss T",
    "year": 2011,
    "body": "Lokale mechanische Hyperalgesie und generalisiert gesteigerte Schmerzempfindlichkeit bei chronisch nicht-spezifischem Rückenschmerz. Der Schmerz 25: 103."
  },
  {
    "authors": "Schulte T, de Lussanet M, Behrendt F, Puta C, Weiss T, Lappe M, Wagner H",
    "year": 2011,
    "body": "Impairment of Motion Perception in Chronic Low Back Pain Patients. Spine Journal 11(10): S92.",
    "linkText": "doi: 10.1016/j.spinee.2011.08.229",
    "url": "https://doi.org/10.1016/j.spinee.2011.08.229"
  },
  {
    "authors": "Wagner H, Wulf A, Puta C, Anders C",
    "year": 2011,
    "body": "Spinale Mustergeneratoren beschreiben komplexe Reflexmuster in Reaktion auf plötzliche Störungen. In: R Grieshaber, M Stadeler, HC Scholle, editor. 17. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 261-266."
  },
  {
    "authors": "Wick C, Puta C, Herbsleb M, Töpper A",
    "year": 2011,
    "body": "Gesundheitstraining Haltungs- und Bewegungssystem. In: L Vogt, A Neumann, editor. Sport in der Prävention: Handbuch für Übungsleiter, Sportlehrer, Physiotherapeuten und Trainer. Köln: Deutscher Ärzteverlag. pp. 129-169."
  },
  {
    "authors": "Boettger S, Müller HJ, Oswald K, Puta C, Donath L, Gabriel HHW, Bär K-J",
    "year": 2010,
    "body": "Inflammatory changes upon a single maximal exercise test in depressed patients and healthy controls. Prog Neuropsychopharmacol Biol Psychiatry 34: 475-478."
  },
  {
    "authors": "Boettger S, Puta C, Yeragani VK, Donath L, Müller HJ, Gabriel HHW, Bär K-J",
    "year": 2010,
    "body": "Heart rate variability, QT variability, and electrodermal activity during exercise. Med Sci Sports Exerc 42(3): 443-448.",
    "linkText": "doi: 10.1249/MSS.0b013e3181b64db1",
    "url": "https://doi.org/10.1249/MSS.0b013e3181b64db1"
  },
  {
    "authors": "Donath L, Boettger S, Puta C, Wetzig F, Müller HJ, Bär K-J, Gabriel HHW",
    "year": 2010,
    "body": "Dissociation of performance parameters at the IAT requires specific exercise recommendations for depressed patients. Prog Neuropsychopharmacol Biol Psychiatry 34: 131-135.",
    "linkText": "doi: 10.1016/j.pnpbp.2009.10.012",
    "url": "https://doi.org/10.1016/j.pnpbp.2009.10.012"
  },
  {
    "authors": "Donath L, Puta C, Boettger S, Müller HJ, Faude O, Meyer T, Bär K-J, Gabriel HHW",
    "year": 2010,
    "body": "Ventilatory inefficiency in major depressive disorder: a potential adjunct for cardiac risk stratification in depressive disorders? Prog Neuropsychopharmacol Biol Psychiatry 34(6): 882-887.",
    "linkText": "doi: 10.1016/j.pnpbp.2010.04.007",
    "url": "https://doi.org/10.1016/j.pnpbp.2010.04.007"
  },
  {
    "authors": "Donath L, Puta C, Nötzel D, Herbsleb M, Müller HJ, Glaser A, Gabriel HHW",
    "year": 2010,
    "body": "Zunehmende Fluktuation der Laktat-Steady-States am Ende der Belastungsstufen: Konsequenzen für die Laktatleistungsdiagnostik? In: Wollesen KMB, editor. Bewegung und Leistung - Sport, Gesundheit und Alter. Hamburg: 8. Gemeinsames Symposium der dvs-Sektionen Biomechanik, Sportmotorik und Trainingswissenschaft 02.-04. September 2010, Schriften der Deutschen Vereinigung für Sportwissenschaft. pp. 78."
  },
  {
    "authors": "Koch M, Anders C, Puta C, Grieshaber R, Blickhan R",
    "year": 2010,
    "body": "Reaktion des Bewegungsapparates auf externe Störungen: ein Vergleich zwischen Gesunden und Patienten mit chronisch unspezifischen Rückenschmerzen. In: R Grieshaber, M Stadeler, HC Scholle, editor. 16. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 285-297."
  },
  {
    "authors": "Kurz E, Herbsleb M, Anders C, Czepa D, Puta C, Ziezio R, Scholle HC, Hilberg T",
    "year": 2010,
    "body": "Haemophilia & Exercise Project (HEP): Synergism and antagonism of selected knee muscles in haemophilic patients. 54 Jahrestagung der Gesellschaft für Thrombose und Hämostaseforschung (GTH). Hämostaseologie 30: A59, P06-11."
  },
  {
    "authors": "Nötzel D, Puta C, Wagner H, Anders C, Gabriel B, Valet G, Gabriel H",
    "year": 2010,
    "body": "Klassifikation von Rückenschmerz auf Basis elektrophysiologischer und psychosozialer Parameter. Erfurter Tage 2010. Erfurt."
  },
  {
    "authors": "Nötzel D, Puta C, Wagner H, Anders C, Gabriel B, Valet G, Gabriel H",
    "year": 2010,
    "body": "Klassifikation von Rückenschmerz mittels CLASSIF1 Datensiebung. Der Schmerz 24: 128."
  },
  {
    "authors": "Nötzel D, Puta C, Wagner H, Anders C, Petrovitch A, Gabriel H",
    "year": 2010,
    "body": "Veränderte Aktivierung der beckenstabilisierenden Muskulatur bei chronisch unspezifischem Rückenschmerz. In: R Grieshaber, M Stadeler, HC Scholle, editor. 16. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 445-448."
  },
  {
    "authors": "Puta C, Behrendt F, de Lussanet de la Sablonière M, Weiß T, Schulte T, Gabriel H, Wagner H",
    "year": 2010,
    "body": "Visuelle Wahrnehmung von biologischen schmerzassoziierten Bewegungen bei chronischem Rückenschmerz. Der Schmerz 24: 127."
  },
  {
    "authors": "Puta C, Herbsleb M",
    "year": 2010,
    "body": "Training der motorischen Grundeigenschaften. In: Kempf HD, editor. Die Neue Rückenschule: Das Praxisbuch. Heidelberg: Springer Medizin Verlag. pp. 141-161."
  },
  {
    "authors": "Puta C, Nötzel D, Wagner H, Anders C, Koch M, Schulz T, Gabriel B, Gabriel H",
    "year": 2010,
    "body": "Klassifikation von chronischem Rückenschmerz mittels muskulärer Reaktionszeiten bei externen Störungen. In: R Grieshaber, M Stadeler, HC Scholle, editor. 16. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 277-283."
  },
  {
    "authors": "von Mackensen S, Czepa D, Herbsleb M, Hilberg T",
    "year": 2010,
    "body": "Development and validation of a new questionnaire for the assessment of subjective physical performance in adult patients with haemophilia — the HEP-Test-Q. Haemophilia 16(1): 170-178.",
    "linkText": "doi: 10.1111/j.1365-2516.2009.02112.x",
    "url": "https://doi.org/10.1111/j.1365-2516.2009.02112.x"
  },
  {
    "authors": "Anders C, Puta C, Koch M, Gabriel H, Blickhan R, Grieshaber R, Scholle HC",
    "year": 2009,
    "body": "Graduell abgestufte Belastungen: funktionelle Befunde von Rumpfmuskeln bei Gesunden und chronischen Rückenschmerzpatienten. In: R Grieshaber, M Stadeler, HC Scholle, editor. 15. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 261-268."
  },
  {
    "authors": "Anders C, Wagner H, Puta C, Grassme R, Scholle HC",
    "year": 2009,
    "body": "Healthy humans use sex-specific co-ordination patterns of trunk muscles during gait. Eur J Appl Physiol 105(4): 585-594.",
    "linkText": "doi: 10.1007/s00421-008-0938-9",
    "url": "https://doi.org/10.1007/s00421-008-0938-9"
  },
  {
    "authors": "Boettger S, Wetzig F, Puta C, Donath L, Müller HJ, Gabriel HHW, Bär K-J",
    "year": 2009,
    "body": "Physical fitness and heart rate recovery are decreased in major depressive disorder. Psychosom Med 71(5): 519-523.",
    "linkText": "doi: 10.1097/PSY.0b013e3181a55303",
    "url": "https://doi.org/10.1097/PSY.0b013e3181a55303"
  },
  {
    "authors": "Donath L, Böttger S, Puta C, Müller HJ, Wetzig F, Bär K-J, Gabriel HHW",
    "year": 2009,
    "body": "Depressive Erkrankungen: Welche Methoden der Belastungssteuerung und welche Belastungsintensität sind für aerobes Ausdauertraining im Rahmen von Interventionsstudien geeignet? Deutsche Zeitschrift für Sportmedizin 60: 242."
  },
  {
    "authors": "Donath L, Nötzel D, Puta C, Sölter F, Herbsleb M, Müller HJ, Gabriel HHW",
    "year": 2009,
    "body": "Über den Einfluss des Respiratorischen Quotienten vor Beginn eines Stufentests auf den Grad der Ausbelastung und den Anteil der Fettverbrennung in der Nachbelastungsphase. Deutsche Zeitschrift für Sportmedizin 60: 192."
  },
  {
    "authors": "Donath L, Puta C, Böttger S, Müller HJ, Wetzig F, Bär K-J, Faude O, Meyer T, Gabriel HHW",
    "year": 2009,
    "body": "Die Beziehung zwischen körperlicher Fitness und ventilatorischer Effizienz bei Major Depression: Ein möglicher Beitrag zur Risikostratifizierung? Deutsche Zeitschrift für Sportmedizin 60: 216."
  },
  {
    "authors": "Donath L, Puta C, Nötzel D, Mühlberg K, Müller HJ, Oswald K, Weber S, Gabriel HHW",
    "year": 2009,
    "body": "Liegend vs. liegend-gekippte Spiroergometrie: Ventilatorische und metabolische Beanspruchung bei gesunden Sportstudenten. Deutsche Zeitschrift für Sportmedizin 60: 214."
  },
  {
    "authors": "Herbsleb M, Hilberg T",
    "year": 2009,
    "body": "Maximal and submaximal endurance performance in adults with severe haemophilia. Haemophilia 15(1): 114-121.",
    "linkText": "doi: 10.1111/j.1365-2516.2008.01860.x",
    "url": "https://doi.org/10.1111/j.1365-2516.2008.01860.x"
  },
  {
    "authors": "Kurz E, Herbsleb M, Anders C, Czepa D, Puta C, Ziezio R, Scholle HC, Hilberg T",
    "year": 2009,
    "body": "Haemophilia and Exercise Project (HEP): Elektromyographische Untersuchung ausgewählter Muskeln des hämophilen Kniegelenks nach einjähriger programmierter Sporttherapie. Deutsche Zeitschrift für Sportmedizin 60: 205."
  },
  {
    "authors": "Kurz E, Herbsleb M, Anders C, Czepa D, Puta C, Ziezio R, Scholle HC, Hilberg T",
    "year": 2009,
    "body": "Haemophilia and Exercise Project (HEP): Muscle activation patterns of selected ankle muscles in haemophilic patients during bipedal upright standing depending on orthopaedic joint score. Acta Physiologica 195: 100."
  },
  {
    "authors": "Kurz E, Herbsleb M, Anders C, Czepa D, Puta C, Ziezio R, Scholle HC, Hilberg T",
    "year": 2009,
    "body": "Haemophilia and Exercise Project (HEP): Activity of selected ankle muscles in haemophilic patients during bipedal standing depending on orthopaedic joint score. Hamostaseologie 29: A41."
  },
  {
    "authors": "Kurz E, Herbsleb M, Anders C, Czepa D, Puta C, Ziezio R, Scholle HC, Hilberg T",
    "year": 2009,
    "body": "Haemophilia and Exercise Project (HEP): Co-activation of selected knee muscles in haemophilic patients. Hamostaseologie 29: A38."
  },
  {
    "authors": "Nötzel D, Anders C, Wagner H, Petrovich A, Gabriel H, Puta C",
    "year": 2009,
    "body": "Einfluss der visuellen Information bei distalen Störungen auf Muskelaktivierungsmuster bei Patienten mit chronisch unspezifischem Rückenschmerz. In: R Grieshaber, M Stadeler, HC Scholle, editor. 15. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 499-502."
  },
  {
    "authors": "Nötzel D, Puta C, Anders C, Wagner H, Petrovich A, Gabriel HHW",
    "year": 2009,
    "body": "Muskelaktivierungsmuster bei Patienten mit chronisch nicht-klassifiziertem Rückenschmerz und bei Gesunden - welchen Einfluß hat die visuelle Information? Deutsche Zeitschrift für Sportmedizin 60: 211."
  },
  {
    "authors": "Nötzel D, Puta C, Anders C, Wagner H, Petrovitch A, Gabriel HHW",
    "year": 2009,
    "body": "Muskelaktivierungsmuster bei Patienten mit chronischem Rückenschmerz und bei Gesunden - Einfluss der visuellen Information. In: R Grieshaber, M Stadeler, HC Scholle, editor. 15 Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler."
  },
  {
    "authors": "Puta C, Wagner H, Anders C, Nötzel D, Bohlsen D, Petrovitch A, Gabriel H",
    "year": 2009,
    "body": "Nicht-spezifischer chronischer Rückenschmerz beeinträchtigt die reflektorische Kontrolle der Rumpf- und Beckenmuskulatur nach externen Belastungsstörungen. In: R Grieshaber, M Stadeler, HC Scholle, editor. 15 Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 291-298."
  },
  {
    "authors": "Puta C, Wagner H, Anders C, Nötzel D, Weiß T, Bohlsen D, Gabriel HHW",
    "year": 2009,
    "body": "Chronisch nicht-spezifischer Rückenschmerz beeinträchtigt die zeitliche Beziehung zwischen paraspinaler Reflexantwort und korrespondierender lumbaler Bewegungsantwort bei externen Belastungsstörungen. Deutsche Zeitschrift für Sportmedizin 60: 212."
  },
  {
    "authors": "Wagner H, Liebetrau A, Puta C, Anders C",
    "year": 2009,
    "body": "Bedeutung verzögerter Reflexe auf die Stabilität der Wirbelsäule. In: R Grieshaber, M Stadeler, HC Scholle, editor. 15. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 283-289."
  },
  {
    "authors": "Wagner H, Puta C, Anders C, Petrovitch A, Schilling N, Scholle H",
    "year": 2009,
    "body": "Chronischer unspezifischer Rückenschmerz. Manuelle Medizin 47: 39-51.",
    "linkText": "doi: 10.1007/s00337-009-0663-4",
    "url": "https://doi.org/10.1007/s00337-009-0663-4"
  },
  {
    "authors": "Anders C, Puta C, Liebetrau A, Koch M, Wagner H, Gabriel H, Blickhan R, Scholle HC, Grieshaber R",
    "year": 2008,
    "body": "Muskelkoordination im Rumpfbereich von Rückenschmerzpatienten während externer Provokation. In: R Grieshaber, M Stadeler, HC Scholle, editor. 14. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 387-396."
  },
  {
    "authors": "Borys C, Puta C, Strauß B",
    "year": 2008,
    "body": "Multidimensionale Erfassung von chronisch unspezifischem Rückenschmerz. In: Rosendahl J, Strauß B, editors. Psychosoziale Aspekte körperlicher Krankheiten. Lengerich: Pabst Science Publisher. pp. 131."
  },
  {
    "authors": "Herbsleb M, Puta C, Hilberg T",
    "year": 2008,
    "body": "Conception and contents of an \"Programmed Sports Therapy\" for Hemophilic patients. In: I Scharrer WS, editor. 37th Hemophilia Symposium Hamburg 2006: Springer Berlin pp. 45-59."
  },
  {
    "authors": "Kempf H-D, Puta C, Herbsleb M",
    "year": 2008,
    "body": "Stabilisationsübungen in der Rückenschule mit dem Propriomed. Die Säule 18: 173-179."
  },
  {
    "authors": "Kurz E, Herbsleb M, Anders C, Czepa D, Puta C, Ziezio R, Scholle HC, Hilberg T",
    "year": 2008,
    "body": "Haemophilia and Exercise Project (HEP): Muscle activation patterns of selected knee muscles in haemophilic patients depending on orthopaedic joint score. Hamostaseologie 28: A109."
  },
  {
    "authors": "Wagner H, Puta C, Anders C, Graßme R, Gussew A, Mörl F, Petrovich A, Reichenbach JR, Rzanny R, Schilling N, Wisch S, Blickhan R, Gabriel H, Grieshaber R, Scholle HC",
    "year": 2008,
    "body": "Chronisch-unspezifischer Rückenschmerz - von der Funktionsmorphologie zur Prävention : Grundlagen und Schlussfolgerungen für Diagnostik und Therapie. In: R Grieshaber, M Stadeler, HC Scholle, editor. 14. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 181-205."
  },
  {
    "authors": "Anders C, Wagner H, Puta C, Grassme R, Petrovitch A, Scholle HC",
    "year": 2007,
    "body": "Trunk muscle activation patterns during walking at different speeds. Journal of Electromyography and Kinesiology 17(2): 245-252.",
    "linkText": "doi: 10.1016/j.jelekin.2006.01.002",
    "url": "https://doi.org/10.1016/j.jelekin.2006.01.002"
  },
  {
    "authors": "Herbsleb M, Puta J, Czepa D, Puta C, Hilberg T",
    "year": 2007,
    "body": "Haemophilia & Exercise Project (HEP): Auswirkungen einer zweijährigen programmierten Sporttherapie auf die isometrische Maximalkraft der unteren Extremitäten bei Erwachsenen mit Hämophilie. Deutsche Zeitschrift für Sportmedizin 58: S204."
  },
  {
    "authors": "Kurz E, Herbsleb M, Anders C, Czepa D, Puta C, Ziezio R, Scholle HC, Hilberg T",
    "year": 2007,
    "body": "Haemophilia and Exercise Project (HEP): Aktivierungsverhalten ausgewählter Muskeln des hämophilen Kniegelenks im aufrechten Stand unter Berücksichtigung des Gelenkstatus. Deutsche Zeitschrift für Sportmedizin 58: S226."
  },
  {
    "authors": "Kurz E, Herbsleb M, Puta C, Anders C, Scholle HC, Ziezio R, Czepa D, Hilberg T",
    "year": 2007,
    "body": "Electromyography of selected muscles in the haemophilic knee. Hamostaseologie 27: A65."
  },
  {
    "authors": "Nötzel D, Puta C, Wagner H, Anders C, Petrovitch A, Wisch S, Gabriel HHW",
    "year": 2007,
    "body": "Die beckenstabilisierende Muskulatur bei Patienten mit chronisch unspezifischem Rückenschmerz reagiert verzögert bei der Kontrolle des aufrechten Standes. Deutsche Zeitschrift für Sportmedizin 58: S289."
  },
  {
    "authors": "Puta C, Wagner H, Anders C, Weiß T, Petrovitch A, Gabriel HHW",
    "year": 2007,
    "body": "Externe Störungen des Rumpfes im Stand führen zu verzögerter Reflexantwort der paraspinalen Muskulatur bei symptomfreier degenerativer Bandscheibenerkrankung der Lendenwirbelsäule. Deutsche Zeitschrift für Sportmedizin 58: S288."
  },
  {
    "authors": "Puta C, Wagner H, Anders C, Weiß T, Petrovitch A, Gabriel HHW",
    "year": 2007,
    "body": "Externe laterale Störungen des Rumpfes im aufrechten Stand: reflektorische EMG Antwort der Rumpfmuskulatur und kinematische Antwort des korrespondierenden LWS-Segmentes. Deutsche Zeitschrift für Sportmedizin 58: S247."
  },
  {
    "authors": "Liebetrau A, Wagner H, Puta C, Anders C, Petrovich A, Blickhan R",
    "year": 2006,
    "body": "Muskeleigenschaften unterstützen die Stabilität der lumbalen Wirbelsäule. In: R Grieshaber, M Stadeler, HC Scholle, editor. 12. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 361-374."
  },
  {
    "authors": "Nötzel D, Puta C, Meierhöfer R, Gabriel HHW",
    "year": 2006,
    "body": "Die Beeinflussung der Beckenfehler der Kategorie I und II nach de Jarnette durch einen individuell angepassten Aufbissbehelf. Journal of Professional Applied Kinesiology pilot issue 0: 24-26."
  },
  {
    "authors": "Anders C, Puta C, Wagner H, Graßme R, Petrovitch A, Scholle HC",
    "year": 2005,
    "body": "Muskelkoordination im Rumpfbereich: Zusammenhang zwischen Struktur und Motorik während Lokomotion. In: R Grieshaber, M Stadeler, HC Scholle, editor. 11. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 301-307."
  },
  {
    "authors": "Anders C, Scholle HC, Wagner H, Puta C, Grassme R, Petrovitch A",
    "year": 2005,
    "body": "Trunk muscle coordination during gait: Relationship between muscle function and acute low back pain. Pathophysiology 12(4): 243-247.",
    "linkText": "doi: 10.1016/j.pathophys.2005.09.001",
    "url": "https://doi.org/10.1016/j.pathophys.2005.09.001"
  },
  {
    "authors": "Gabriel H, Wick C, Puta C",
    "year": 2005,
    "body": "Komponenten präventiven Gesundheitstrainings - Ausdauer, Kraft, Beweglichkeit, Koordination. In: L Vogt AN, editor. Sport in der Prävention. Köln: Deutscher Ärzteverlag. pp. 33-65."
  },
  {
    "authors": "Herbsleb M, Hilberg T, Puta C, Gabriel HHW",
    "year": 2005,
    "body": "Ausdauerleistungsfähigkeit erwachsener Personen mit Hämophilie. Deutsche Zeitschrift für Sportmedizin 56: 289."
  },
  {
    "authors": "Herbsleb M, Hilberg T, Puta J, Puta C, Gabriel HHW",
    "year": 2005,
    "body": "Quantifizierung der isometrischen Maximalkraft und des bilateralen Kraftdefizits bei erwachsenen Personen mit Hämophilie. Deutsche Zeitschrift für Sportmedizin 56: 288."
  },
  {
    "authors": "Hilberg T, Herbsleb M, Puta C, Czepa D, Gothe D, Gabriel HHW",
    "year": 2005,
    "body": "Veränderungen der gesundheitsbezogenen Lebensqualität durch Sporttherapie bei Personen mit schwerer Hämophilie A bzw. B. Deutsche Zeitschrift für Sportmedizin 56: 195."
  },
  {
    "authors": "Petrovitch A, Böttcher J, Behrendt W, Puta C, Wagner H, Anders C, Wisch S, Kaiser W",
    "year": 2005,
    "body": "Das Funktions-MRT des diskoligamentären Systems der Lendenwirbelsäule - ein Betrag zur Prävention chronischer Rückenschmerzsyndrome. In: R Grieshaber, M Stadeler, HC Scholle, editor. 11. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 289-300."
  },
  {
    "authors": "Wagner H, Anders C, Puta C, Petrovitch A, Morl F, Schilling N, Witte H, Blickhan R",
    "year": 2005,
    "body": "Musculoskeletal support of lumbar spine stability. Pathophysiology 12: 257-265.",
    "linkText": "doi: 10.1016/j.pathophys.2005.09.007",
    "url": "https://doi.org/10.1016/j.pathophys.2005.09.007"
  },
  {
    "authors": "Wagner H, Puta C, Anders C, Petrovitch A, Blickhan R",
    "year": 2005,
    "body": "Reaktionsmuster der Rumpfmuskulatur bei plötzlichen Störungen des Oberkörpers. In: R Grieshaber, M Stadeler, HC Scholle, editor. 11. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Jena: Dr. Bussert & Stadeler. pp. 317-324."
  },
  {
    "authors": "Anders C, Puta C, Graßme R, Wagner H",
    "year": 2004,
    "body": "Individualspezifische Kennzeichnung muskulärer Koordiantion im Rumpf/ Rückenbereich während Lokomotion als Grundlage gezielter Präventionsmaßnahmen. In: R Grieshaber, M Stadeler, HC Scholle, editor. 10. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Leipzig: monade agentur für kommunikation GmbH. pp. 393-401."
  },
  {
    "authors": "Gabriel H, Puta C, Wick C, Lang K, Schellenberger B, Neumann A",
    "year": 2004,
    "body": "Ausbildungsmaterialien für Übungsleiter/innen \"Sport in der Prävention\". Deutscher Sportbund."
  },
  {
    "authors": "Petrovitch A, Reichenbach JR, Malich A, Böttcher J, Behrendt W, Puta C, Wagner H, Anders C, Wisch S, Kaiser W",
    "year": 2004,
    "body": "Entwicklung eines Algorithmus zur Beurteilung belastungsabhängiger Bandscheibenveränderungen im Funktions-MRT der LWS. In: R Grieshaber, M Stadeler, HC Scholle, editor. 10. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Leipzig: monade agentur für kommunikation GmbH. pp. 359-374."
  },
  {
    "authors": "Puta C, Wagner H, Anders C, Petrovitch A, Gabriel HHW",
    "year": 2004,
    "body": "Individuelle Reaktionen auf Störungen der aufrechten Körperhaltung. In: R Grieshaber, M Stadeler, HC Scholle, editor. 10. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Leipzig: monade agentur für kommunikation GmbH. pp. 403-413."
  },
  {
    "authors": "Türk-Noack U, Puta C, Puta S, Zahn M",
    "year": 2004,
    "body": "Gesundheit und Fitness, Teil 2. Thüringer Institut für Lehrerfortbildung LuMT, editor. Bad Berka."
  },
  {
    "authors": "Wagner H, Puta C, Anders C, Petrovitch A, Blickhan R",
    "year": 2004,
    "body": "Betrachtungen zur Selbsstabilität der lumbalen Wirbelsäule - Korrelation zu experimetell gewonnen Daten. In: R Grieshaber, M Stadeler, HC Scholle, editor. 10. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Leipzig: monade agentur für kommunikation GmbH. pp. 415-427."
  },
  {
    "authors": "Anders C, Puta C, Graßme R, Wagner H",
    "year": 2003,
    "body": "Funktionelle Beanspruchungsprofile im Bereich des Rumpfes und der Extremitäten: Abhängigkeit vom muskulären Ermüdungszustand und Gruppenspezifik. In: R Grieshaber, M Stadeler, HC Scholle, editor. 9 Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Leipzig: monade agentur für kommunikation GmbH. pp. 401-415."
  },
  {
    "authors": "Hilberg T, Herbsleb M, Koch C, Puta C, Schramm W",
    "year": 2003,
    "body": "Sportcamp für Hämophile: Möglichkeiten der Sporttherapie. Deutsche Zeitschrift für Sportmedizin 54: S96."
  },
  {
    "authors": "Hilberg T, Herbsleb M, Puta C, Gabriel HH, Schramm W",
    "year": 2003,
    "body": "Physical training increases isometric muscular strength and proprioceptive performance in haemophilic subjects. Haemophilia 9(1): 86-93.",
    "linkText": "doi: 10.1046/j.1365-2516.2003.00679.x",
    "url": "https://doi.org/10.1046/j.1365-2516.2003.00679.x"
  },
  {
    "authors": "Petrovitch A, Reichenbach JR, Anders C, Puta C, Wagner H, Malich A, Böttcher J, Behrendt W, Pfleiderer SOR, Kaiser W",
    "year": 2003,
    "body": "Das belastungsabhängige Funktions-MRT der Bandscheiben - ein Beitrag zur Prävention und Prädiktion berufsbedingter Wirbelsäulenerkrankungen. In: R Grieshaber, M Stadeler, HC Scholle, editor. 9 Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Leipzig: monade agentur für kommunikation GmbH. pp. 359-368."
  },
  {
    "authors": "Puta C, Anders C, Wagner H, Graßme R, Petrovitch A, Gabriel HHW",
    "year": 2003,
    "body": "Der aufrechte Stand und seine Provokation: Funktionelle Beanspruchungsprofile im Bereich des Rumpfes bei azyklischer Belastung. In: R Grieshaber, M Stadeler, HC Scholle, editor. 9 Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Leipzig: monade agentur für kommunikation GmbH. pp. 417-435."
  },
  {
    "authors": "Wagner H, Anders C, Puta C, Tjuljumbow A, Petrovitch A, Witte H, Mörl F, Blickhan R",
    "year": 2003,
    "body": "Modellierung des Einflusses unterschiedlicher Muskeleigenschaften auf die Stabilität der lumbalen Wirbelsäule: Korrelation zu experimetell gewonnenen Daten. In: R Grieshaber, M Stadeler, HC Scholle, editor. 9. Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Leipzig: monade agentur für kommunikation GmbH. pp. 491-502."
  },
  {
    "authors": "Anders C, Puta C, Graßme R, Wagner H",
    "year": 2002,
    "body": "Trunk muscle activity during treadmill walking - dependency on back pain, defined loading and professional experience in carrying objects. Pflügers Archiv: European Journal of Physiology 443: S361."
  },
  {
    "authors": "Hilberg T, Herbsleb M, Puta C, Gabriel H, Schramm W",
    "year": 2002,
    "body": "Körperliches Training steigert die isometrische Muskelkraft und sensomotorische Fähigkeiten bei hämophilen Personen. Deutsche Zeitschrift für Sportmedizin 53: 281-287."
  },
  {
    "authors": "Puta C, Anders C, Wagner H, Gabriel HHW",
    "year": 2002,
    "body": "Der aufrechte Stand und seine Provokation: Abhängigkeit vom muskulären Ermüdungszustand und Gruppenspezifik. In: R Grieshaber, M Stadeler, HC Scholle, editor. 9 Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Leipzig: monade agentur für kommunikation GmbH. pp. 327-337."
  },
  {
    "authors": "Puta C, Anders C, Wagner H, Gabriel HHW",
    "year": 2002,
    "body": "Trunk muscle activity during acyclic external sensomotor provocation of the postural system. Pflügers Archiv: European Journal of Physiology 443: S361."
  },
  {
    "authors": "Wagner H, Anders C, Puta C, Blickhan R",
    "year": 2002,
    "body": "Der Einfluss des Muskel-Skelett-Systems auf die Stabilität der lumbalen Wirbelsäule. In: R Grieshaber, M Stadeler, HC Scholle, editor. 8 Erfurter Tage Prävention von arbeitsbedingten Gesundheitsgefahren und Erkrankungen. Leipzig: monade agentur für kommunikation GmbH. pp. 259-272."
  },
  {
    "authors": "Anders C, Puta C",
    "year": 2001,
    "body": "Ermüdungsabhängige Veränderungen am Skelettmuskel nach definierten Belastungen: Erste Ergebnisse. In: HC Scholle NS, editor. 4 ArbeitsTagung Motodiagnostik - Mototherapie, Referate. Friedrich-Schiller-Universität Jena. pp. 89-102."
  },
  {
    "authors": "Hilberg T, Herbsleb M, Gabriel HH, Jeschke D, Schramm W",
    "year": 2001,
    "body": "Proprioception and isometric muscular strength in haemophilic subjects. Haemophilia 7(6): 582-588.",
    "linkText": "doi: 10.1046/j.1365-2516.2001.00563.x",
    "url": "https://doi.org/10.1046/j.1365-2516.2001.00563.x"
  },
  {
    "authors": "Hilberg T, Herbsleb M, Puta C, Gabriel HHW, Schramm W",
    "year": 2001,
    "body": "Proprioception in subjects with and without hemophilia -Hemophilia & Exercise Project. Annals of Hematology 80: A26."
  },
  {
    "authors": "Hübscher J, Puta C",
    "year": 2001,
    "body": "Sport in der Prävention und Rehabilitation aus Sicht der Sportmedizin: Osteoporose - Koordinationsschulung. Thüringen Sport 2: 8."
  },
  {
    "authors": "Puta C, Ort T, Zweiling K, Messer F",
    "year": 2001,
    "body": "Gesund und Fit im Berufsalltag. Materialien Nr. 88. Thüringer Institut für Lehrerfortbildung Lehrplanentwicklung und Medien (Thillm)."
  },
  {
    "authors": "Puta C, Türk-Noack U",
    "year": 2001,
    "body": "Gleichgewichtsregulation in unterschiedlichen Standpositionen unter lokaler Muskelermüdung - posturographische und elektromyoraphische Studie. In: HA Thorhauer KC, U Türck-Noack, editor. Bundesinstitut für Sportwissenschaft Wissenschaftliche Berichte und Materialien Muskel-Ermüdung Forschungsansätze in der Trainingswissenschaft: Sport & Buch Strauß. pp. 127-137."
  },
  {
    "authors": "Türk-Noack U, Puta C, Puta S, Schille E, Zweiling K, Messer F",
    "year": 2000,
    "body": "Gesundheit und Fitness. Materialien Nr. 54. Thüringer Institut für Lehrerfortbildung Lehrplanentwicklung und Medien (Thillm)."
  },
  {
    "authors": "Hübscher J, Puta C",
    "year": 1999,
    "body": "Ambulante bewegungstherapeutische Betreuung von Patienten nach Schlaganfall. Ingelheim am Rhein: Boehringer Ingelheim."
  },
  {
    "authors": "Wick C, Stanek FD, Puta C",
    "year": 1999,
    "body": "Differenzierte Rückenschule: Sekundär - und Tertiärprävention. In: Kempf H, editor. Rückenschule Grundlagen, Konzepte- und Übungen. München Jena: Verlag Urban & Fischer. pp. 142-152."
  }
];
