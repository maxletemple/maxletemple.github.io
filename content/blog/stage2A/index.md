+++
authors = ["Maxime Letemple"]
title = "Portage d'une infrastructure de mesure de réseau sur un unikernel"
date = 2023-09-10
description = "Stage de deuxième année à l'Université de Liège"
[taxonomies]
tags = ["stages"]
+++

L'objectif principal de ce stage était le portage d'une infrastructure de mesure de réseau sur un unikernel, nommé [Scamper](https://www.caida.org/catalog/software/scamper/). Un unikernel est une machine virtuelle spécialisée, légère et à usage unique qui combine une application et le minimum de composants du système d'exploitation (OS) nécessaires pour l'exécuter. Contrairement aux systèmes d'exploitation traditionnels, conçus pour prendre en charge plusieurs applications et utilisateurs, un unikernel est conçu pour exécuter une seule application, incluant uniquement les parties nécessaires de l'OS dans sa construction. L'unikernel utilisé ici est [Unikraft](https://unikraft.org/).

<figure>
{{ image(url="unikernel_vs_vm.png", alt="Comparaison entre unikernels et VMs") }}
<figcaption>Comparaison entre unikernels et VMs</figcaption>
</figure>

Résultats
===

Comparé aux solutions traditionnelles comme les machines virtuelles et les conteneurs Docker, uTNT a démontré des performances nettement meilleures. Ce stage a mis en évidence le potentiel des unikernels en tant que plateforme pour des applications de mesure de réseau haute performance et légères.
<figure>
{{ image(url="ram_unikernel.png", alt="Utilisation de la RAM de mon travail comparée à Debian sur une VM") }}
<figcaption>Utilisation de la RAM de mon travail comparée à Debian sur une VM</figcaption>
</figure>

Plus d'infos
===

Vous pouvez trouver le dépôt [ici](https://github.com/maxletemple/uTNT), et mon rapport [ici](rapport.pdf).