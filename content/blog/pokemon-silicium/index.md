+++
authors = ["Maxime Letemple"]
title = "Pokémon Silicium"
date = 2022-12-10
description = "Pokémon silicium is a simulation of a player versus player pokémon fight on FPGA."
[taxonomies]
tags = ["digital electronics", "school projects"]
[extra]
featured = true
+++
Pokémon silicium is a simulation of a player versus player pokémon fight on FPGA. The output is a 256*160 display using VGA. The game is controlled by the [PMOD joystick from Digilent](https://digilent.com/reference/pmod/pmodjstk/start). This was a team project in order to validate my S7 at my engineering school.

VHDL implementation
===

The description of the architecture is written exclusively in VHDL. We worked as a two person team. My partner wrote the game logic (managing life registers, game loop, type table, etc ...). My job was to convert the serial bus received by the joystick, to send him the inputs in the correct format and to receive informations on the status of the game in order to display them. I had to manage sprite superpostion and transparency, VGA display to create a fluid and viable interface.

Converting pictures to ROM
===

In order to display sprites, I had to convert .ppm files in a 8 bits ROM written in VHDL. I wrote a programm in C that takes several pictures and convert them in one ROM. It also creates a log file, which is useful when looking for an adress.

```console
./a.out img ROM_img.vhd ronflex_back.ppm ronflex_front.ppm mew_back.ppm mew_front.ppm rayquaza_back.ppm rayquaza_front.ppm torterra_back.ppm torterra_front.ppm brasegali_back.ppm brasegali_front.ppm pikachu_back.ppm pikachu_front.ppm ectoplasma_back.ppm ectoplasma_front.ppm tiplouf_back.ppm tiplouf_front.ppm
```

More infos
===

- Resources and project code can be found [here](https://github.com/maxletemple/pokemon_silicium).
- Download the report [here](pokemon_silicium.pdf) (in french).
