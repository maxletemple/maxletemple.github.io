+++
authors = ["Maxime Letemple"]
title = "Phase-locked Loops"
date = 2023-03-19
[taxonomies]
tags = ["analogue electronics"]
+++

A PLL is an electronic circuit that can be used to generate an output signal that is synchronized in frequency and phase with an input signal.
The main function of a PLL is to track and synchronize the frequency and phase of a reference signal with an output signal.

<figure>
{{ image(url="pll.svg", alt="Analog phase locked loop" no_hover=true transparent=true) }}
<figcaption>Analog phase locked loop</figcaption>
</figure>

Phase Detector
==============

The phase detector receives in input two signals $v1(t)$ and $v2(t)$ and returns a signal $v(t)=K_d.f(\Phi_{ref}-\Phi_{osc})$.

Usual phase detectors are the Balanced Mixer(for sinusoid signals) or XOR comparator(for digital signals).

Low-pass filter
===============

The main objective of the low-pass filter is to generate the voltage used for the VCO.
Usually, the transfer function is $F(p)=\frac{1}{1+\tau P}$ with $\tau = RC$ for a RC filter.

VCO
===

The VCO aims to generate the output signal. The output signal is linear around its working pulsation.
Indeed, $\omega_{VCO} = \omega_{1} + K_0(U_{VCO} - U_1)$, with $K_0$ the gain of the VCO.

***

Extension for frequency synthesizers
====================================

In order to synthesize higher frequencies, a frequency divider can be added on the feedback branch. By this way,
$f_{VCO}=N.f_{ref}$. $f_{ref}$ is the reference signal, is is called step of synthesis. Indeed, for $N = N+1$.
$f_{VCO}=N.f_{ref} + f_{ref}$

***

Reminder
====

Useful functions and values:

Transfert function of a linearized PLL without divider:

$$H(p)=\frac{K_d K_0 F(p)}{p + K_d K_0 F(p)} = \frac{\omega _n ²}{\omega _n ² + 2\xi \omega _n p + p²}$$

$$\omega _n = \sqrt{\frac{K_0 K_d}{\tau}} \ \xi = \frac{1}{2} \frac{\omega _n}{K_0 K_d}$$