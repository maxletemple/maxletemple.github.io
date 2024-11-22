+++
authors = ["Maxime Letemple"]
title = "Boucles à verrouillage de phase"
date = 2023-03-19
[taxonomies]
tags = ["électronique analogique"]
+++

Une boucle à verrouillage de phase (PLL) est un circuit électronique qui peut être utilisé pour générer un signal de sortie synchronisé en fréquence et en phase avec un signal d'entrée.
La fonction principale d'une PLL est de suivre et de synchroniser la fréquence et la phase d'un signal de référence avec un signal de sortie.

<figure>
{{ image(url="pll.svg", alt="Boucle à verrouillage de phase analogique" no_hover=true transparent=true) }}
<figcaption>Boucle à verrouillage de phase analogique</figcaption>
</figure>

Détecteur de phase
==================

Le détecteur de phase reçoit en entrée deux signaux $v1(t)$ et $v2(t)$ et renvoie un signal $v(t)=K_d.f(\Phi_{ref}-\Phi_{osc})$.

Les détecteurs de phase usuels sont le mélangeur équilibré (pour les signaux sinusoïdaux) ou le comparateur XOR (pour les signaux numériques).

Filtre passe-bas
================

L'objectif principal du filtre passe-bas est de générer la tension utilisée pour le VCO.
Habituellement, la fonction de transfert est $F(p)=\frac{1}{1+\tau P}$ avec $\tau = RC$ pour un filtre RC.

VCO
===

Le VCO vise à générer le signal de sortie. Le signal de sortie est linéaire autour de sa pulsation de travail.
En effet, $\omega_{VCO} = \omega_{1} + K_0(U_{VCO} - U_1)$, avec $K_0$ le gain du VCO.

***

Extension pour les synthétiseurs de fréquence
=============================================

Afin de synthétiser des fréquences plus élevées, un diviseur de fréquence peut être ajouté sur la branche de rétroaction. De cette manière,
$f_{VCO}=N.f_{ref}$. $f_{ref}$ est le signal de référence, il est appelé pas de synthèse. En effet, pour $N = N+1$.
$f_{VCO}=N.f_{ref} + f_{ref}$

***

Rappel
======

Fonctions et valeurs utiles :

Fonction de transfert d'une PLL linéarisée sans diviseur :

$$H(p)=\frac{K_d K_0 F(p)}{p + K_d K_0 F(p)} = \frac{\omega _n ²}{\omega _n ² + 2\xi \omega _n p + p²}$$

$$\omega _n = \sqrt{\frac{K_0 K_d}{\tau}} \ \xi = \frac{1}{2} \frac{\omega _n}{K_0 K_d}$$