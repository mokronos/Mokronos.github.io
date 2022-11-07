---
title: Human Robot Interaction
layout: base
---

# Comparison of Human Robot Interaction Interfaces
## Task
HRI interface comparisons with examples (VR, AR, bio-signal-based)

## Comparison VR, AR, Bio-signal-based

Advantage of all of them is that the user can often interact with the robot in a natural way through hand and body gestures. This makes it possible for users without the technical knowledge of controlling the robot traditionally, to control the robot.

### Virtual reality(VR)
Virtual reality puts a human into a virtual world to interact with a robot. The human can see the robot and the robot can see the human. The human can interact with the robot by using a controller or by using their hands. 
One important aspect is ability to get almost instant feedback from the robot motion. This is important for the human to be able to learn how to control the robot.
VR headsets can often be uncomfortable to wear for long periods of time. Newer headsets have batteries instead of cable connections, which can be better or worse depending on the use case.
VR could technically do the save as AR does, by just recording the world around the human and displaying parts of it in VR. However the technology isn't there yet to perfectly display reality, so there is still clearly a difference.
Could pre-render the actions given to the robot, before executing them.

### Augmented reality(AR)
Augmented reality enhances the real world around the human with digital information to better interact with a robot. The human can see the robot and the robot can see the human. The human can interact with the robot by using a controller or by using their hands.
One difference to VR is the ability to also see and better interact with the real world around the human.

### Bio-signal-based

Bio-signal-based devices can be used to control robots. Many different types of bio-signal-based devices exist, such as EEG, EOG, EMG, ECG, ERG, EGG, GSR and EDA.

- Electroencephalography (EEG): Measures electrical activity of the brain.
- Electrooculography (EOG): Measures electrical activity of the eye.
- Electromyography (EMG): Measures electrical activity of the muscles.
- Electrocardiography (ECG): Measures electrical activity of the heart.
- Electroretinography (ERG): Measures electrical activity of the retina.
- Electroglottography (EGG): Measures electrical activity of the vocal cords.
- Galvanic skin response (GSR)/Electrodermal activity (EDA): Measures electrical activity of the skin.

These devices can be used to control robots in many different ways. For example, a person can control a robot by thinking about moving it, or by moving their eyes to look at different parts of the robot. Bio-signal-based devices can also be used to control robots by measuring the person's heart rate, or by measuring the person's sweat levels.


- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8540117/
    - summary of different bio-signal-based devices
    - a lot of links to other papers with examples

- https://static.aminer.org/pdf/PDF/000/329/658/emg_based_human_machine_interface_system.pdf
    - example of using EMG to control a robot
    - really old paper

- https://link.springer.com/content/pdf/10.1007/s43154-020-00005-6.pdf
    - overview of different HRI interfaces

- https://graphics.cs.wisc.edu/Papers/2017/LRMG17/roman-vr-2017.pdf
    - general paper about VR as a HRI interface

- https://reader.elsevier.com/reader/sd/pii/S2212827120314815?token=674B622691122E381C72A6FD9A55D0F0163342C7E2F3F3785601BAECC912EB05ED29318E11A2834A7D0B9019B9EE27A6&originRegion=eu-west-1&originCreation=20221104125245
    - Review of VR/AR solutions for HRI

- http://ti.rutgers.edu/publications/papers/1999_ieee_tra.pdf
    - paper about using VR for HRI
    - decent overview of VR

- https://robotics.mit.edu/teleoperating-robots-virtual-reality
    - MIT article

- https://www.allerin.com/blog/ar-vr-and-other-ways-of-controlling-robots
    - article about different HRI interfaces
    - might be perfect overview

- https://cs.brown.edu/people/er35/publications/SIEDS_2020.pdf
    - comparison of different VR approaches
    - positional control (waypoint navigation)
    - trajectory control (click and drag)

- https://www.mdpi.com/1424-8220/21/20/6863
    - huge summary/survey of bio-signal-based solutions
    - for assistance/rehabilitation

- https://arxiv.org/pdf/2203.03254.pdf
    - AR summary
    - 2022 paper

### get at least one paper with an example for every interface type (VR, AR, bio-signal-based)

#### VR
- https://h2r.cs.brown.edu/wp-content/uploads/whitney18.pdf
- https://cs.brown.edu/people/gdk/pubs/vr_teleop.pdf
    - controlling robots over the internet with VR (teleoperation)
    - created interface to be used by other researchers
    - can be used with consumer-grade headsets
    - testing approach: https://cs.brown.edu/people/er35/publications/testing.pdf
        - establishes baseline for other research
- https://arxiv.org/pdf/1903.10064.pdf
    - controlling a swarm of robots with VR
    - manipulating the environment in VR, zooming in and out
    - placing walls in the environment to block the robots
    - highlights intuitiveness of VR
- https://arxiv.org/pdf/1703.01270.pdf
    - control of robot arms in VR
    - VR Control Room
    - highlights collocation capabilities of VR
    - pick, place, assembly, manufacturing tasks

#### AR
- https://www.frontiersin.org/articles/10.3389/frobt.2017.00020/full
    - uses tablet
    - displays information about the robots motion on the tablet
    - uses the tablet to control the robot
    - article about it: https://thenewstack.io/smartphone-app-can-control-robots-augmented-reality/

#### Bio-signal-based
- https://link.springer.com/article/10.1007/s10514-020-09916-x
    - Uses EMG + EEG to give swift feedback to robot
    - earlier work used only EEG: http://groups.csail.mit.edu/drl/wiki/images/e/ec/Correcting_Robot_Mistakes_in_Real_Time_Using_EEG_Signals.pdf
- https://www.jmir.org/2019/10/e16194/
    - neuralink whitepaper
    - uses brain signals to control a robot
    - might be interesting, but not used on humans yet
    - don't know if it "counts" as an example
    - mainly describes a way to get information out of the human brain, not however how to interpret it or control a robot.
    - but really important


## Comparison

AR is the cheapest of the three, as no special hardware is needed most of the time. VR however has huge upside of remote operation, by emerging the user in the distant environment. Additionally VR can be more intuitive because the user can be "in the skin" of the robot. Bio-signal-based solutions are in the early stages but offer huge potential for swift intuitive interaction with robots.

|                  | Example use cases | Example devices | ease of use | unique functions | cost | future potential |
| ---------------- | ----------------- | --------------- | ----------- |------------------| ---- | ---------------- |
| VR               |control robot motion over internet by moving controllers and observing results|Oculus rift, Meta quest pro, smartphone| special equipment necessary (headset and controllers), often uncomfortable for long periods of time, either battery (limited work time) or cables (limited motion range)| teleoperation, see whole environment of the robot from somewhere else; ego perspective and feel of robot (step into skin of robot, more hands on), but strong stable internet connection necessary|expensive special equipment, getting cheaper when consumer grade equipment can be used|might become important to remotely help out "almost fully" autonomous systems in difficult situations; need better form factors|
| AR               |display important robot information about the robot(range of motion, wear and tear, pre-rendering of action)|google glasses, tablet, smartphone|really simple|no special equipment required|pretty low, no special equipment|integration into normal glasses, or contact lenses|
| Bio-signal-based |signal if robot did right or wrong action directly with ones mind, control of prosthesis via muscle signals(EMG)|implants (Neuralink), EEG, EMG, etc.|some special equipment needed, sometimes easy to use (wrist bands), sometimes permanent augment (implant)|if implemented well, can read the humans mind and make robot smooth extension of human|ranges from cheap(wrist bands) to expensive(implants)|huge potential to merge with robots and full control of a robot with a humans thoughts|
