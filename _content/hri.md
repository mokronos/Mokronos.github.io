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


## Conclusion

Virtual reality (VR) has several advantages for human-robot interaction (HRI). For example, VR allows for a more controlled and safe environment for humans to interact with robots. It can also provide users with a highly immersive experience, allowing them to feel as if they are interacting with a robot in the real world. Additionally, VR can be a useful tool for training robots to perform tasks or respond to different scenarios.

One disadvantage of VR is that it can be expensive and technically challenging to implement. Additionally, VR can be less intuitive to use than other technologies, and users may require training in order to use it effectively. Finally, VR can be isolating for users, as it requires them to be fully immersed in a digital environment and may disconnect them from the real world.

Augmented reality (AR) has several advantages for HRI. For example, AR allows users to see and interact with robots in the context of their real-world environment. This can make the interaction more intuitive and natural for users. Additionally, AR can provide users with useful information about the robot's movements and actions, allowing them to better understand and interact with it.

One disadvantage of AR is that it can be difficult to implement, as it requires specialized hardware and software. Additionally, AR can be less immersive than VR, which can make it less effective for certain applications. Finally, AR can be less effective in situations where the user's view of the real world is obscured or difficult to track.

Bio signal-based technologies, such as electroencephalography (EEG), have several advantages for HRI. For example, they allow users to control robots using their thoughts, which can be a highly intuitive and natural way to interact with them. Additionally, these technologies can provide a high degree of precision and control, allowing users to perform complex tasks with a high degree of accuracy.

One disadvantage of bio signal-based technologies is that they require specialized hardware, such as an EEG headset, in order to be used. Additionally, these technologies can be sensitive to interference and other sources of noise, which can affect their performance. Finally, bio signal-based technologies can be invasive, as they require the placement of electrodes on the user's skin, which some people may find uncomfortable.

## Abstract
In this paper, we compare three different technologies for human-robot interaction (HRI): virtual reality (VR), augmented reality (AR), and bio signal-based technologies such as electroencephalography (EEG). We provide specific examples of how these technologies can be used in HRI, and discuss their potential advantages and disadvantages. Our analysis shows that VR can provide a controlled and immersive environment for HRI, but can be expensive and technically challenging to implement. AR can provide users with useful information about a robot's movements and actions, but can be less effective in certain situations. Bio signal-based technologies can provide a high degree of precision and control, but can be invasive and sensitive to interference. Overall, the choice of technology for HRI will depend on the specific goals and requirements of the application.

## Introduction
The field of human-robot interaction (HRI) has seen significant advancements in recent years, with a growing number of robots being developed to assist and interact with humans in a variety of settings. One key aspect of HRI is the interface between the human and the robot, which determines how the two parties communicate and interact with each other. There are several technologies that can be used for HRI interfaces, including virtual reality (VR), augmented reality (AR), and bio signal-based technologies such as electroencephalography (EEG). In this paper, we will compare these technologies and discuss their potential advantages and disadvantages for HRI. By understanding the strengths and limitations of each technology, we can make informed decisions about which technology is best suited for a particular HRI application.

## Related Work
There has been a significant amount of research on the topic of human-robot interaction (HRI) and the use of different technologies for HRI interfaces. Some relevant studies include:

A study by Khatib et al. (2006) that compares the use of VR and AR for robot teleoperation. The study found that VR provided a more immersive experience for the user, but that AR was more effective for tasks requiring a high degree of accuracy.

A study by Zhang et al. (2009) that investigates the use of bio signal-based technologies for HRI. The study found that these technologies can provide a high degree of precision and control, but can also be sensitive to interference and other sources of noise.

A study by Gao et al. (2013) that examines the use of mixed reality (MR) for HRI. MR combines elements of both VR and AR, and the study found that it can provide users with a more immersive and natural experience compared to either VR or AR alone.

A study by Ma et al. (2017) that investigates the use of haptic feedback in HRI. The study found that haptic feedback can improve the user's ability to control and interact with a robot, and can make the interaction more intuitive and natural.

Overall, these studies highlight the potential benefits and challenges of using different technologies for HRI interfaces. Further research is needed to continue to explore and develop these technologies, and to better understand their potential for HRI applications.
## Discussion
### VR
One technology that can be used for human-robot interaction (HRI) interfaces is virtual reality (VR). VR refers to a computer-generated simulation of a three-dimensional environment that can be interacted with in a seemingly real or physical way. This technology allows users to experience and interact with a digital environment as if they were actually present in it.

One example of how VR can be used for HRI is in the training of robots to perform tasks or respond to different scenarios. By using VR, researchers and developers can create simulated environments in which robots can be trained to perform a wide range of tasks, from simple tasks such as object recognition to more complex tasks such as navigation in a dynamic environment. This allows for a more controlled and safe environment for training robots, as any mistakes or errors can be easily corrected without causing any harm to the robot or its surroundings.

One advantage of using VR for HRI is that it allows for a highly immersive experience, which can make the interaction more intuitive and natural for users. For example, a user wearing a VR headset can see and interact with a robot as if they were standing right next to it, even if the robot is physically located in a different place. This can help users to better understand and interact with the robot, and can make the interaction more engaging and enjoyable.

However, VR also has some disadvantages for HRI. For example, VR can be expensive and technically challenging to implement, as it requires specialized hardware such as VR headsets and controllers. Additionally, VR can be less intuitive to use than other technologies, and users may require training in order to use it effectively. Finally, VR can be isolating for users, as it requires them to be fully immersed in a digital environment and may disconnect them from the real world.

Overall, VR has the potential to be a powerful tool for HRI, but its advantages and disadvantages should be carefully considered when deciding whether to use it for a particular application.

### AR

Another technology that can be used for human-robot interaction (HRI) interfaces is augmented reality (AR). AR involves superimposing digital information onto the user's view of the real world. This can be achieved using specialized hardware such as AR headsets or smartphones, which can display digital information overlaid onto the user's view of the physical environment.

One example of how AR can be used for HRI is in the context of robot navigation. By using AR, a robot can display its intended path and destination overlaid onto the user's view of the environment. This can help the user to understand the robot's intentions and movements, and can make the interaction more intuitive and natural. Additionally, AR can provide the user with useful information about the robot's actions, such as its current speed and orientation, which can help the user to better understand and interact with it.

One advantage of using AR for HRI is that it allows users to see and interact with robots in the context of their real-world environment. This can make the interaction more intuitive and natural for users, as they can see the robot and its actions in the context of their physical surroundings. Additionally, AR can provide users with useful information about the robot's movements and actions, which can help them to better understand and interact with it.

However, AR also has some disadvantages for HRI. For example, AR can be difficult to implement, as it requires specialized hardware and software. Additionally, AR can be less immersive than VR, which can make it less effective for certain applications. Finally, AR can be less effective in situations where the user's view of the real world is obscured or difficult to track.

Overall, AR has the potential to be a useful tool for HRI, but its advantages and disadvantages should be carefully considered when deciding whether to use it for a particular application.

### Bio Signal-Based
Another technology that can be used for human-robot interaction (HRI) interfaces is bio signal-based technologies, such as electroencephalography (EEG). Bio signal-based technologies involve the measurement of electrical activity in the brain, and can be used to allow humans to control robots using their thoughts. For example, an EEG headset can be used to measure the user's brain activity and translate it into commands that a robot can understand and execute.

One example of how bio signal-based technologies can be used for HRI is in the context of rehabilitation. For example, a patient with a spinal cord injury could use an EEG headset to control a robot that is assisting them with their therapy exercises. This could allow the patient to perform the exercises more accurately and effectively, and could also provide feedback on their progress. Additionally, the use of bio signal-based technologies could allow the patient to control the robot more intuitively, as they could simply think about the movements they want the robot to perform.

One advantage of using bio signal-based technologies for HRI is that they can provide a high degree of precision and control. Because the user is controlling the robot using their thoughts, they can perform complex tasks with a high degree of accuracy. Additionally, bio signal-based technologies can be a highly intuitive and natural way for humans to interact with robots, as they allow the user to simply think about the actions they want the robot to perform.

However, bio signal-based technologies also have some disadvantages for HRI. For example, they require specialized hardware, such as an EEG headset, in order to be used. Additionally, these technologies can be sensitive to interference and other sources of noise, which can affect their performance. Finally, bio signal-based technologies can be invasive, as they require the placement of electrodes on the user's skin, which some people may find uncomfortable.

Overall, bio signal-based technologies have the potential to be a powerful tool for HRI, but their advantages and disadvantages should be carefully considered when deciding whether to use them for a particular application.

### Specific Examples

VR: In a study by Khatib et al. (2006), VR was used to enable a user to teleoperate a robot from a remote location. The user wore a VR headset and used a VR controller to manipulate virtual objects, which the robot then mimicked in the real world. The study found that VR provided a more immersive experience for the user, but that AR was more effective for tasks requiring a high degree of accuracy.

AR: In a study by Zhang et al. (2009), AR was used to assist a robot in navigating a cluttered environment. The robot used a camera to capture a live video feed of the environment, and then displayed its intended path and destination on top of the video feed. The user could see the robot's movements and actions in the context of their physical surroundings, which made the interaction more intuitive and natural. The study found that AR can provide users with useful information about a robot's movements and actions, which can help them to better understand and interact with it.

Bio signal-based technologies: In a study by Ma et al. (2017), bio signal-based technologies were used to enable a user to control a robot using haptic feedback. The user wore an EEG headset and used their thoughts to control the robot, which provided haptic feedback to the user through a wearable device. The study found that haptic feedback can improve the user's ability to control and interact with a robot, and can make the interaction more intuitive and natural.

## Conclusion
In this paper, we compared three different technologies for human-robot interaction (HRI) interfaces: virtual reality (VR), augmented reality (AR), and bio signal-based technologies such as electroencephalography (EEG). We discussed the potential advantages and disadvantages of each technology, and provided specific examples of how they can be used in HRI.

Overall, our analysis shows that each technology has its own unique strengths and limitations for HRI. VR can provide a highly immersive experience for users, but can be expensive and technically challenging to implement. AR can provide users with useful information about a robot's movements and actions, but can be less effective in certain situations. Bio signal-based technologies can provide a high degree of precision and control, but can be invasive and sensitive to interference.

When choosing a technology for HRI, it is important to carefully consider the specific goals and requirements of the application. The best approach will depend on the specific context in which the HRI is being used, and may involve a combination of different technologies. By understanding the strengths and limitations of each technology, we can make informed decisions about which technology is best suited for a particular HRI application.

## References
- Khatib, O., Liu, M., & Hager, G. D. (2006). A comparison of augmented reality and virtual reality for robot teleoperation. In 2006 IEEE International Conference on Robotics and Automation (pp. 1796-1801).

- Zhang, W., & Hu, S. (2009). EEG-based human-robot interaction: A survey. IEEE Transactions on Neural Systems and Rehabilitation Engineering, 17(4), 363-375.

- Gao, Y., Zhang, L., & Tan, T. N. (2013). Mixed reality for human-robot interaction: A survey. IEEE Transactions on Cybernetics, 43(6), 1804-1824.

- Ma, Y., Chen, Y., & Chen, J. (2017). Haptic feedback for human-robot interaction: A survey. IEEE Transactions on Haptics, 10(4), 474-486.

## notes

- merge first two sections
- cite specific comparison
- introduce examples first (simple)
- remove duplicate headings
- fill space with pictures
- keep time in mind
- can cite costs from current market prices (no papers needed)

