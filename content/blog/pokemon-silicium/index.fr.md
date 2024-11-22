+++
authors = ["Maxime Letemple"]
title = "Pokémon Silicium"
date = 2022-12-10
description = "Pokémon silicium est une simulation d'un combat pokémon joueur contre joueur sur FPGA."
[taxonomies]
tags = ["électronique numérique", "projets scolaires"]
[extra]
featured = true
+++
Pokémon silicium est une simulation d'un combat pokémon joueur contre joueur sur FPGA. La sortie est un affichage 256*160 utilisant VGA. Le jeu est contrôlé par le [joystick PMOD de Digilent](https://digilent.com/reference/pmod/pmodjstk/start). C'était un projet d'équipe pour valider mon S7 à mon école d'ingénieurs.

Implémentation VHDL
===

La description de l'architecture est écrite exclusivement en VHDL. Nous avons travaillé en équipe de deux personnes. Mon partenaire a écrit la logique du jeu (gestion des registres de vie, boucle de jeu, table des types, etc ...). Mon travail consistait à convertir le bus série reçu par le joystick, à lui envoyer les entrées au format correct et à recevoir des informations sur l'état du jeu afin de les afficher. Je devais gérer la superposition et la transparence des sprites, l'affichage VGA pour créer une interface fluide et viable.

Conversion des images en ROM
===

Pour afficher les sprites, j'ai dû convertir des fichiers .ppm en une ROM 8 bits écrite en VHDL. J'ai écrit un programme en C qui prend plusieurs images et les convertit en une seule ROM. Il crée également un fichier log, utile pour rechercher une adresse.

```console
./a.out img ROM_img.vhd ronflex_back.ppm ronflex_front.ppm mew_back.ppm mew_front.ppm rayquaza_back.ppm rayquaza_front.ppm torterra_back.ppm torterra_front.ppm brasegali_back.ppm brasegali_front.ppm pikachu_back.ppm pikachu_front.ppm ectoplasma_back.ppm ectoplasma_front.ppm tiplouf_back.ppm tiplouf_front.ppm
```

Plus d'infos
===

- Les ressources et le code du projet peuvent être trouvés [ici](https://github.com/maxletemple/pokemon_silicium).
- Téléchargez le rapport [ici](pokemon_silicium.pdf).
