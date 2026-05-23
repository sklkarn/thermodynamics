var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-basics",
  "level": "1",
  "url": "sec-basics.html",
  "type": "Section",
  "number": "1.1",
  "title": "Basic Concepts (Zeroth Law)",
  "body": " Basic Concepts (Zeroth Law)    Thermodynamic Properties The properties of a substance are the characteristics that describe its physical and chemical behavior. It only depends on the state of the system and is independent of the history of the system. The extensive properties of a substance depend on the amount of substance present, while the intensive properties do not. Examples of extensive properties include mass, volume, energy, entropy S, and enthalpy H while examples of intensive properties include temperature, pressure, density, specific volume v, and molar concentration.   State Functions vs. Path Functions The state of a substance is defined by its properties at a given instant. The state refers to the specific condition of a system at a given moment, uniquely defined by its thermodynamic properties. To define a state, a set of independent properties such as pressure (P), volume (V), temperature (T), and internal energy (U) must be defined. A system is in thermodynamic equilibrium in any perticular state.   State Functions (Point Functions): Depend only on the current state of the system, not on how the system reached that state. They are exact differentials. Examples: Internal energy U, enthalpy H, entropy S, temperature T, pressure P, volume V. Change: (independent of path).    Path Functions: Depend on the path or process followed between states. They are inexact differentials. Examples: Heat Q and Work W. The value of or changes with the path taken on a P-V diagram.   If even one property changes, the system moves to a different state. The phase of a substance is also an important aspect of its state, as it can exist in different phases (solid, liquid, gas) depending on the temperature and pressure conditions. A phase is a quantity of matter that is homogeneous throughout, and has a definite chemical composition and physically distinct properties. An example of a single phase is a pure substance like ice, while an example of a multi-phase system is a mixture of ice and water. A phase boundary is the interface between two phases, and it can have unique properties that differ from those of the individual phases. For example, in a glass of ice water, the solid ice is one phase and the liquid water is another.    Thermodynamic Equilibrium  A system is in thermodynamic equilibrium when its macroscopic properties are unchanging in time and there are no net flows of matter or energy. In this state, the system is at its lowest possible energy and is stable. The properties of a system in thermodynamic equilibrium can be described by a set of state variables, such as temperature, pressure, and volume. These variables are related to each other through the equations of state, which describe the behavior of the system under different conditions. There are several types of thermodynamic equilibrium, including    Thermal equilibrium: No temperature gradient; temperature is uniform (T constant throughout). Zeroth Law of Thermodynamics. (Temperature is uniform throughout the system or when it is in simultaneous mechanical, thermal, and chemical equilibrium (no net changes occur)),     Mechanical equilibrium No unbalanced forces; pressure is uniform (no net force or acceleration), and     Chemical equilibrium No net chemical reactions or diffusion; composition remains constant. (where the chemical potentials of all species are equal throughout the system).   If any one is missing, the system is in a non-equilibrium state.     Quasi-static (Reversible) Process: A process carried out infinitely slowly, so the system remains in equilibrium at every stage. Idealized for maximum efficiency calculations.    State Postulate: For a simple compressible system, two independent intensive properties fix the thermodynamic state (e.g., P and T fix the state of an ideal gas).      Equilibrium System: A state in which a system is in balance and there are no net changes occurring with respect to time. Non Equilibrium System: A state in which a system is not in balance and there are net changes occurring with respect to time.  In the state of thermal equilibrium, where is the internal energy of the system, which is a function of temperature (T), volume (V), and the number of particles of each species (N_k). The values of extensive variables, where is the entropy of the system, which is also a function of temperature (T), volume (V), and the number of particles of each species (N_k). The state of thermodynamic equilibrium is characterized by the fact that the internal energy and entropy of the system are at their minimum values for a given set of conditions. In this state, the system is stable and there are no net changes occurring with respect to time.  Intensive variables can also be written as derivatives of one extensive variable with respect to another. For example, temperature can be written as the derivative of internal energy with respect to entropy, and pressure can be written as the derivative of enthalpy with respect to volume.    In non-equilibrium state, irreversible process takes place, which drives the system towards equilibrium state. For non-equilibrium systems, the internal energy and entropy can be expressed as functions of time (t) and is defined locally at every point at . Hence, the energy density at point is given by and the entropy density at point is given by . and Also, and also, where is the total internal energy of the system at time , is the total entropy of the system at time , and the integrals are taken over the entire volume of the system. The internal energy and entropy of a non-equilibrium system can change with time as the system evolves towards equilibrium. The rate of change of internal energy and entropy can be described by the laws of thermodynamics, which govern the behavior of energy and entropy in non-equilibrium systems. The first law of thermodynamics states that the change in internal energy of a system is equal to the heat added to the system minus the work done by the system. The second law of thermodynamics states that the entropy of an isolated system will always increase over time, and it can be used to determine the direction of spontaneous processes in non-equilibrium systems.  In non-equilibrium system, total energy is no longer a function of other extensive variables such as as in equation and and system can not have a single tempreture for the entire system. That is, and are no longer a function of the toher three variables as in and .  The term is the rate of change of entropy due to chemical reactions, diffusion, heat conduction, and other irreversible processes that occur within the system. Here is always positive, which means that the entropy of a non-equilibrium system will always increase over time as it evolves towards equilibrium. In an open system, the change in entropy can also be influenced by the exchange of matter and energy with the surroundings, which can lead to a decrease in entropy if the system is losing energy or matter to the surroundings. can either be positive or negative, depending on the direction of energy and matter exchange between the system and its surroundings.  In non-equilibrium thermodynamics, the total entropy change of a system, , is decomposed into two distinct parts: the entropy flow from the environment and the entropy production within the system itself. For any system, the rate of change of entropy is expressed as:       Entropy Flow from the Environment: This term, denoted as , represents the rate at which entropy is exchanged between the system and its surroundings. It can be positive or negative, depending on whether the system is gaining or losing entropy to the environment.     Entropy Production within the System: This term, denoted as , represents the rate at which entropy is produced within the system due to irreversible processes such as chemical reactions, diffusion, and heat conduction. It is always positive, indicating that the entropy of a non-equilibrium system will always increase over time as it evolves towards equilibrium.      In a Non-Equilibrium Steady State: In a steady state, the total entropy of the system remains constant ( ), but the system is still active and irreversible. In this case, the entropy flow from the environment is exactly balanced by the entropy production within the system, such that . This means that the system is continuously producing entropy due to irreversible processes, but it is also exchanging entropy with the environment in such a way that the total entropy remains constant. Non-equilibrium steady states are common in many natural and engineered systems, such as chemical reactors, biological systems, and atmospheric processes. They are characterized by a constant flow of energy and matter through the system, which allows it to maintain a steady state despite being out of equilibrium.    process and Cycles   Change of State: implies one or more properties of the system has changed. Process: a succession of changes of state. A process can be represented on a graph, such as a pressure-volume diagram, where the path of the process is shown as a curve connecting the initial and final states. The area under the curve on a P-V diagram represents the work done by or on the system during the process. The change in internal energy of the system during a process can be calculated using the first law of thermodynamics, which states that the change in internal energy is equal to the heat added to the system minus the work done by the system.   Isothermal Process: A process that occurs at constant temperature. In an isothermal process, the internal energy of the system remains constant, and the heat added to the system is equal to the work done by the system. Adiabatic Process: A process that occurs without any heat exchange with the surroundings. In an adiabatic process, the change in internal energy of the system is equal to the work done by the system. Isobaric Process: A process that occurs at constant pressure. In an isobaric process, the work done by the system is equal to the change in volume of the system multiplied by the constant pressure. Isochoric Process: A process that occurs at constant volume. In an isochoric process, the work done by the system is zero, and the change in internal energy of the system is equal to the heat added to the system.   Cycle: a process that returns a system to its initial state. It is a thermodynamic “round trip.”  In a cycle, the system undergoes a series of processes that eventually return it to its original state. The net work done by the system over one complete cycle is equal to the net heat added to the system, as stated by the first law of thermodynamics. Cycles are important in thermodynamics because they can be used to analyze the performance of engines and other devices that convert heat into work. Examples of cycles include the Carnot cycle, which is an idealized cycle that represents the maximum efficiency of a heat engine, and the Rankine cycle, which is commonly used in power plants to generate electricity.  A cycle can be represented on a graph, such as a pressure-volume (P-V) diagram, where the path of the cycle is shown as a closed curve. The area enclosed by the curve on a P-V diagram represents the net work done by the system during one complete cycle. The efficiency of a cycle can be calculated by dividing the net work done by the system by the heat added to the system during the cycle. The efficiency of a cycle is always less than 100% due to irreversibilities and losses in real systems.  In summary, a process is a succession of changes of state, while a cycle is a process that returns a system to its initial state. Both processes and cycles are important concepts in thermodynamics, as they help us understand how energy is transferred and transformed in different systems.           "
},
{
  "id": "subsec-them_equil-2",
  "level": "2",
  "url": "sec-basics.html#subsec-them_equil-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "thermodynamic equilibrium Thermal equilibrium: Mechanical equilibrium Chemical equilibrium "
},
{
  "id": "subsec-them_equil-11",
  "level": "2",
  "url": "sec-basics.html#subsec-them_equil-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Entropy Flow from the Environment: Entropy Production within the System: "
},
{
  "id": "subsec-them_equil-12",
  "level": "2",
  "url": "sec-basics.html#subsec-them_equil-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "In a Non-Equilibrium Steady State: "
},
{
  "id": "subsec-process-2",
  "level": "2",
  "url": "sec-basics.html#subsec-process-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Change of State: Process: "
},
{
  "id": "subsec-process-3",
  "level": "2",
  "url": "sec-basics.html#subsec-process-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Isothermal Process: Adiabatic Process: Isobaric Process: Isochoric Process: "
},
{
  "id": "subsec-process-4",
  "level": "2",
  "url": "sec-basics.html#subsec-process-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cycle: "
},
{
  "id": "sec-heat",
  "level": "1",
  "url": "sec-heat.html",
  "type": "Section",
  "number": "1.2",
  "title": "Heat and Temperature",
  "body": " Heat and Temperature   Heat is a form of energy that is transferred between systems due to a temperature difference. Temperature is a measure of the average kinetic energy of the particles in a substance. Temperature is an intensive property, while heat is an extensive property. Heat can be transferred through three main mechanisms: conduction, convection, and radiation. Conduction is the transfer of heat through direct contact between particles, where energy is transferred from the hotter region to the cooler region. Convection is the transfer of heat through the movement of a fluid, where the warmer fluid rises and the cooler fluid sinks, creating a circulation pattern. Radiation is the transfer of heat through electromagnetic waves, where energy is emitted by a hot object and absorbed by a cooler object without the need for a medium. The amount of heat transferred can be calculated using the equation , where is the heat transferred, is the mass of the substance, is the specific heat capacity, and is the change in temperature.   Specific heat capacity,  is the amount of heat required to raise the temperature of one unit mass of a substance by one degree Celsius. It is an intensive property that varies with the type of substance and its phase. The specific heat capacity of a substance can be used to calculate the amount of heat required to change the temperature of a given mass of the substance, as well as to determine the amount of heat released or absorbed during a phase change. It is a heat absorbing property of a substance, and it is important in many applications, such as in the design of heating and cooling systems, as well as in the study of thermodynamics and energy transfer. The amount of heat absorbed by the system can be calculated using the equation , where is the heat absorbed, is the mass of the substance, is the specific heat capacity, and is the change in temperature. In differential form, the equation can be expressed as If we take then it is called a heat capacity of the substance, and the equation can be written as or, Heat capacity at constant volume and pressure are denoted as and respectively, and heat capacities are generally function of temperature. Heat capacity for a mole of substance is called molar heat capacity, and it is denoted as . The and are related to each other by the equation , where is the ideal gas constant.   Latent heat,  is the amount of heat required to change the phase of a substance without changing its temperature. It is an important concept in thermodynamics, as it explains the energy required for phase transitions such as melting, boiling, and condensation. The latent heat of fusion is the amount of heat required to change a substance from a solid to a liquid, while the latent heat of vaporization is the amount of heat required to change a substance from a liquid to a gas. The latent heat of a substance can be calculated using the equation , where is the heat transferred, is the mass of the substance, and is the latent heat of the substance.  Heat is different from work as it is a form of energy transfer that occurs due to a temperature difference, while work is a form of energy transfer that occurs due to a force acting over a distance. Both Heat and work are path functions, meaning that the amount of heat transferred depends on the specific path taken during the process. The first law of thermodynamics states that the change in internal energy of a system is equal to the heat added to the system minus the work done by the system . This means that heat and work are both forms of energy transfer that can change the internal energy of a system, and they are related to each other through the first law of thermodynamics.    Laws of Thermodynamics  The laws of thermodynamics are fundamental principles that govern the behavior of energy and matter in the universe. The first law of thermodynamics, also known as the law of energy conservation, states that energy cannot be created or destroyed, only transferred or converted from one form to another. This means that the total energy of an isolated system remains constant over time. The second law of thermodynamics states that the total entropy of an isolated system can never decrease over time, and it can only increase or remain constant. This means that natural processes tend to move towards a state of greater disorder or randomness. The third law of thermodynamics states that as the temperature of a system approaches absolute zero, the entropy of the system approaches a minimum value. This means that it is impossible to reach absolute zero in a finite number of steps. zeroth law of thermodynamics states that if two systems are in thermal equilibrium with a third system, then they are in thermal equilibrium with each other. This means that if two systems have the same temperature, they are in thermal equilibrium with each other. That is temperatures of all the substances in contact with each other will evantually reach a state of equilibrium.    The Gas Laws  The gas laws are a set of mathematical relationships that describe the behavior of gases under different conditions. The Boyle's law states that the pressure of a gas is inversely proportional to its volume at constant temperature. This means that if the volume of a gas decreases, the pressure increases, and vice versa. The Charles's law states that the volume of a gas is directly proportional to its temperature at constant pressure. This means that if the temperature of a gas increases, the volume increases, and vice versa. The Gay-Lussac's law states that the pressure of a gas is directly proportional to its temperature at constant volume. This means that if the temperature of a gas increases, the pressure increases, and vice versa. The ideal gas law combines these three laws into a single equation, , where is the pressure of the gas, is the volume of the gas, is the number of moles of the gas, is the ideal gas constant, and is the temperature of the gas. The ideal gas law is a useful tool for predicting the behavior of gases under a wide range of conditions, although it is important to note that it is an approximation and may not accurately describe the behavior of real gases under certain conditions, such as high pressure or low temperature.   "
},
{
  "id": "subsec-laws_thermdynamics-2",
  "level": "2",
  "url": "sec-heat.html#subsec-laws_thermdynamics-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first law second law third law zeroth law "
},
{
  "id": "subsec-gas_laws-2",
  "level": "2",
  "url": "sec-heat.html#subsec-gas_laws-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Boyle's law Charles's law Gay-Lussac's law ideal gas law "
},
{
  "id": "sec-vander",
  "level": "1",
  "url": "sec-vander.html",
  "type": "Section",
  "number": "1.3",
  "title": "Van der Waals Equation",
  "body": " Van der Waals Equation    Limitations of the Ideal Gas Law The ideal gas law assumes:   Molecules have zero volume.    No intermolecular forces except during perfectly elastic collisions.      Real gases deviate significantly at high pressure (molecules are close together) and low temperature (kinetic energy is low, attractions dominate). The compressibility factor   Van der Waals equation is a thermodynamic equation of state that describes the behavior of real gases. It is an improvement over the ideal gas law by accounting for the finite size of gas molecules and the intermolecular forces between them. The equation is given by: where are number moles of gas, the observed pressure pressure, absolute temperature, total volume of the container, and universal gas constant, respectively. Also, is van der Waals constant for attractive forces (units: or ) and is van der Waals constant for finite molecular volume (units: or )  In kinetic theory of gases, we neglect the volume of the gas molecules and the intermolecular forces between them. As a result, the ideal gas law does not holds good for real gases, especially at high pressures and low temperatures. The van der Waals equation accounts for these factors by introducing two parameters, and , which represent the strength of the intermolecular forces and the volume occupied by the gas molecules, respectively.   Correction for finite size: The term in the equation accounts for the finite size of gas molecules. It represents the volume occupied by the gas molecules themselves, which reduces the available volume for the gas to occupy. This correction is important at high pressures where the gas molecules are closely packed together.  Evaluation of V: Let r be the radius of a molecule, then the volume occupied by a molecule is . If there are n molecules, then the total volume occupied by the molecules is . Hence, the available volume for the gas to occupy is given by . The correction term in the van der Waals equation accounts for this reduction in available volume and allows us to calculate the actual volume of the gas using the equation. Here, is a constant that represents the effective volume occupied by each gas molecule (also called excluded volume or co-volume ), and it is determined experimentally for each gas.  Correction for intermolecular forces: The term in the equation accounts for the intermolecular forces between gas molecules. It represents the attractive forces between gas molecules, which reduce the pressure exerted by the gas on the walls of the container. This correction is important at low temperatures where the gas molecules are moving more slowly and are more likely to interact with each other.   Evaluation of P: Inward pull reduces the momentum with which molecules strike the walls of the container, leading to a decrease in pressure compared to the ideal gas law. Hence, where is the pressure predicted by the ideal gas law and is the actual pressure of the gas. The correction term accounts for this difference and allows us to calculate the actual pressure of the gas using the van der Waals equation.  Force on a molecule is to the number of attracting molecules, and number of attracting molecules is number density. Hence, force on a molecule Molecules striking the unit surface area is to the number density of molecules, which is . Hence, pressure is to the product of the force on a molecule and the number of molecules striking the unit surface area, which is . The correction term in the van der Waals equation accounts for the attractive forces between gas molecules, which reduces the pressure exerted by the gas on the walls of the container.  The van der Waals equation is a more accurate representation of the behavior of real gases compared to the ideal gas law. It is particularly useful for describing the behavior of gases at high pressures and low temperatures, where the ideal gas law fails to provide accurate predictions. However, it is important to note that the van der Waals equation is still an approximation and may not accurately describe the behavior of all real gases under all conditions.    Critical Point  Critical point is the point at which the liquid and gas phases of a substance become indistinguishable. At the critical point, the properties of the liquid and gas phases become identical, and the substance exists in a supercritical state. The critical point is characterized by a critical temperature (Tc), critical pressure (Pc), and critical volume (Vc).  The critical point can be determined using the van der Waals equation by setting the first and second derivatives of pressure with respect to volume to zero. This leads to the following equations:  Solving these equations gives the critical temperature, critical pressure, and critical volume in terms of the van der Waals constants a and b.   To plot the critical points for a van der Waals gas, we look for the point on a diagram where the liquid and gas phases become indistinguishable. Mathematically, this is the inflection point of the critical isotherm ( ), where both the first and second derivatives of pressure with respect to volume are zero.The van der Waals equation of state is:    Characteristics of the Plot: The critical point is represented by a specific point on the diagram where the isotherm corresponding to the critical temperature ( ) exhibits an inflection point. At this point, the curve changes from being concave to convex, indicating that the liquid and gas phases are indistinguishable. The critical point is marked on the diagram with a dot to highlight its significance.   Below Critical Temperature ( ): The isotherms show a \"dip\" and \"hump\" known as the van der Waals loops. In a real system, these are replaced by a horizontal line (the tie-line) representing the phase transition where gas and liquid coexist.    At Critical Temperature ( ): The isotherm has an inflection point, and the liquid and gas phases become indistinguishable. The curve does not show a distinct phase transition, and the properties of the substance are the same in both phases.    Above Critical Temperature ( ): The isotherms are smooth and do not show any phase transition. The substance exists in a supercritical state where it exhibits properties of both liquids and gases.       The Compressibility Factor ( ): The compressibility factor at the critical point is defined as: Note: For an ideal gas, the compressibility factor is always equal to 1. However, for a van der Waals gas at the critical point, the compressibility factor is less than 1, indicating that the gas is more compressible than an ideal gas at the critical point.     Solving van der Waals equation at critical points yields:   Critical volume: or ( for 1 mole)    Critical temperature:     Critical pressure:    The Compressibility Factor ( ): (same for all van der Waals gases; real gases vary slightly around 0.27-0.3).  Above , no amount of pressure can liquefy the gas (supercritical fluid).  Reduced Equation of State (Law of Corresponding States) Define reduced variables: , , .  The van der Waals equation becomes universal (independent of specific and ): Gases at the same reduced conditions behave similarly (useful for scaling properties across different substances).    Molecular (Intermolecular) Forces in Real Gases  Real gases consist of molecules that occupy finite volume and exert attractive and repulsive forces on each other. These forces, collectively called van der Waals forces, become significant at high pressure (molecules close together) or low temperature (low kinetic energy).   Types of Intermolecular Forces    London Dispersion Forces (Induced Dipole-Induced Dipole): Present in all molecules. Arise from temporary fluctuations in electron distribution creating instantaneous dipoles, which induce dipoles in neighboring molecules. Strength increases with molecular size\/polarizability (larger electron clouds).    Dipole-Dipole Forces: Between polar molecules with permanent dipoles.    Dipole-Induced Dipole Forces: A permanent dipole induces a dipole in a nonpolar molecule.    Hydrogen Bonding: A strong type of dipole-dipole interaction (e.g., in H₂O, NH₃), though less dominant in simple gases.   At very short distances, repulsive forces (due to electron cloud overlap and Pauli exclusion principle) dominate, preventing molecules from collapsing.    Lennard-Jones Potential The net interaction is described by the Lennard-Jones potential: where Depth of the potential well (measure of attractive strength), Finite distance at which (related to molecular diameter), Repulsive term ( ): Steep at short range, Attractive term ( ): Longer range (London dispersion).   The minimum of the curve occurs at equilibrium separation , with potential energy . These forces explain the corrections in the van der Waals equation:   Parameter : Accounts for attractive forces (reduces observed pressure).    Parameter : Accounts for repulsive forces \/ finite molecular volume (reduces available volume).       "
},
{
  "id": "subsec-intermol_force-3",
  "level": "2",
  "url": "sec-vander.html#subsec-intermol_force-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Types of Intermolecular Forces "
},
{
  "id": "subsec-intermol_force-5",
  "level": "2",
  "url": "sec-vander.html#subsec-intermol_force-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lennard-Jones Potential "
},
{
  "id": "sec-mbvd",
  "level": "1",
  "url": "sec-mbvd.html",
  "type": "Section",
  "number": "1.4",
  "title": "Maxwell-Boltzmann Velocity Distribution",
  "body": " Maxwell-Boltzmann Velocity Distribution   The Maxwell-Boltzmann distribution describes the distribution of speeds of particles in an ideal gas at a given temperature. It is based on the following assumptions:   The gas consists of a large number of identical non-interacting particles, moving with a speed much less than the speed of light.    The motion of the particles is random, and the system is in thermal equilibrium at temperature T.    The gas is in a three- dimensional space.    It tells us what fraction of molecules have velocities with a particular magnitude and direction. In classical statistical mechanics, the probability of a particle having a certain energy in a system is given by the Boltzmann factor: where is the Boltzmann constant and is the absolute temperature. For a single particle in an ideal gas, the only energy is kinetic: where is the mass of the particle and is its velocity. So the joint probability density is: Because the exponent is a sum of independent terms, the joint distribution factors: where , with . To normalize one component (e.g., ): gives us the normalization constant . This is a standard Gaussian integral. Let a = m\/(2kT): So the normalized distribution for one component is: and the joint distribution is: The speed distribution (the distribution of the magnitude of the velocity) can be found by converting to spherical coordinates in velocity space and integrating over the angles. The speed is given by . The speed distribution is: This distribution is known as the Maxwell-Boltzmann speed distribution. It describes how the speeds of particles in an ideal gas are distributed at a given temperature. The most probable speed, mean speed, and root-mean-square speed can be derived from this distribution.  The shape of the Maxwell-Boltzmann distribution depends on the temperature and the mass of the particles. As the temperature increases, the distribution becomes broader and shifts to higher speeds. As the mass of the particles increases, the distribution becomes narrower and shifts to lower speeds.   With this probability distribution, we can calculate various properties of the gas, such as the average speed, the most probable speed, and the root-mean-square speed. The average speed is given by: The most probable speed is given by: The root-mean-square speed is given by: These speeds are related by the following inequalities: The Maxwell-Boltzmann distribution is a fundamental result in statistical mechanics and provides a link between the microscopic properties of particles and the macroscopic properties of gases. It is used to derive the ideal gas law and to understand various phenomena in gases, such as diffusion, effusion, and viscosity. It also serves as a basis for more advanced theories of gases, such as quantum statistics and the kinetic theory of gases.  Since molar mass and gas constant , we can also write the Maxwell-Boltzmann speed distribution in terms of the molar mass and the gas constant : This form is often used in chemistry and engineering applications.  The average speed can also be expressed in terms of the molar mass and the gas constant: The average kinetic energy of a gas molecule depends only on the temperature and is independent of its mass. It is given by: This is a consequence of the equipartition theorem, which states that each degree of freedom contributes an average energy of to the total energy of the system. For a monatomic gas, there are three translational degrees of freedom, so the average kinetic energy is . For a diatomic gas, there are additional rotational and vibrational degrees of freedom, which contribute to the total energy of the system, so the average kinetic energy per mole is . The Maxwell-Boltzmann distribution is a fundamental result in statistical mechanics and provides a link between the microscopic properties of particles and the macroscopic properties of gases. It is used to derive the ideal gas law and to understand various phenomena in gases, such as diffusion, effusion, and viscosity. It also serves as a basis for more advanced theories of gases, such as quantum statistics and the kinetic theory of gases.    Maxwell Speed Distribution   The direction of velocity are equally probable hence the average velocity of a molecule is zero but the average of the square of the velocity is not zero. However, the average speed, which depends only on the magnitude of the velocity, is not zero. The probability of speed in the range of a molecule regardless of direction is given by where the volume element is in spherical coordinates and the probability is written as . The quantity is the probability density for the molecular speed. The probability distribution for molecular speeds can be written explicitly as This graphs show that there are a few molecules with very low speeds and a few with large speeds at any perticular temperature; we can also see that f(v) becomes broader as T increases. The speed at which reaches its maximum is the most probable speed.    "
},
{
  "id": "sec_i-example",
  "level": "1",
  "url": "sec_i-example.html",
  "type": "Section",
  "number": "1.5",
  "title": "Examples",
  "body": " Examples    Estimate the total internal energy of of nitrogen ( ) gas at and if its temperature is increased by at constant pressure. What is the energy required to heat of nitrogen gas from to at constant pressure?    To estimate the total internal energy of 1.00 L of gas at and , we can use the ideal gas law to find the number of moles of nitrogen gas. we then calculate the internal energy by From Ideal gas equation, we can find the number of moles of nitrogen gas: or, The energy required to heat 1.00 mol of nitrogen gas from 0 K to 298 K at constant pressure can be calculated using the same formula:       At , of occupies a volume of . Calculate the pressures given by the ideal gas equation and the van der Waals equation. Given: and     Amount of gas ; Temperature , Volume , Ideal gas constant , van der Waals constant , and van der Waals constant . Ideal gas equation: van der Waal's equations        The density of dry air at and is . Assuming that it consists entirely of and and using the ideal gas law, determine the amount of each gas in moles in a volume of and their mole fractions.    Pressure , Temperature , Density , Total Volume , Molar Mass of ( Molar Mass of Gas Constant   From ideal gas equation, Total mass of the sample is simply: The mole fraction is the ratio of the number of moles of a specific component to the total number of moles:    on solving and , we get and    and       The molecule density of interstellar gas clouds is about molecules\/mL. The temperature is approximately . Calculate the pressure. Given: (or )    The number density of cloud is From ideal gas equation:           Calculate the amount of gas in moles per cubic meter of atmosphere at and using the ideal gas equation.    The atmospheric content of is about (parts per million by volume). Assuming a pressure of , estimate the amount of in a layer of the atmosphere at the surface of the Earth. The radius of the Earth is . (The actual amount of in the atmosphere is about .)     Given:        From ideal gas euqtion:     Since volume fraction equals mole fraction for ideal gases, mole fraction of , Now, the volume of atmosphere,   Also, total moles of the air in this layer,   Moles of .       "
},
{
  "id": "sec_i-example-2",
  "level": "2",
  "url": "sec_i-example.html#sec_i-example-2",
  "type": "Example",
  "number": "1.5.1",
  "title": "",
  "body": "  Estimate the total internal energy of of nitrogen ( ) gas at and if its temperature is increased by at constant pressure. What is the energy required to heat of nitrogen gas from to at constant pressure?    To estimate the total internal energy of 1.00 L of gas at and , we can use the ideal gas law to find the number of moles of nitrogen gas. we then calculate the internal energy by From Ideal gas equation, we can find the number of moles of nitrogen gas: or, The energy required to heat 1.00 mol of nitrogen gas from 0 K to 298 K at constant pressure can be calculated using the same formula:    "
},
{
  "id": "sec_i-example-3",
  "level": "2",
  "url": "sec_i-example.html#sec_i-example-3",
  "type": "Example",
  "number": "1.5.2",
  "title": "",
  "body": "  At , of occupies a volume of . Calculate the pressures given by the ideal gas equation and the van der Waals equation. Given: and     Amount of gas ; Temperature , Volume , Ideal gas constant , van der Waals constant , and van der Waals constant . Ideal gas equation: van der Waal's equations     "
},
{
  "id": "sec_i-example-4",
  "level": "2",
  "url": "sec_i-example.html#sec_i-example-4",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": "  The density of dry air at and is . Assuming that it consists entirely of and and using the ideal gas law, determine the amount of each gas in moles in a volume of and their mole fractions.    Pressure , Temperature , Density , Total Volume , Molar Mass of ( Molar Mass of Gas Constant   From ideal gas equation, Total mass of the sample is simply: The mole fraction is the ratio of the number of moles of a specific component to the total number of moles:    on solving and , we get and    and    "
},
{
  "id": "sec_i-example-5",
  "level": "2",
  "url": "sec_i-example.html#sec_i-example-5",
  "type": "Example",
  "number": "1.5.4",
  "title": "",
  "body": "  The molecule density of interstellar gas clouds is about molecules\/mL. The temperature is approximately . Calculate the pressure. Given: (or )    The number density of cloud is From ideal gas equation:     "
},
{
  "id": "sec_i-example-6",
  "level": "2",
  "url": "sec_i-example.html#sec_i-example-6",
  "type": "Example",
  "number": "1.5.5",
  "title": "",
  "body": "     Calculate the amount of gas in moles per cubic meter of atmosphere at and using the ideal gas equation.    The atmospheric content of is about (parts per million by volume). Assuming a pressure of , estimate the amount of in a layer of the atmosphere at the surface of the Earth. The radius of the Earth is . (The actual amount of in the atmosphere is about .)     Given:        From ideal gas euqtion:     Since volume fraction equals mole fraction for ideal gases, mole fraction of , Now, the volume of atmosphere,   Also, total moles of the air in this layer,   Moles of .      "
},
{
  "id": "ex_first",
  "level": "1",
  "url": "ex_first.html",
  "type": "Exercises",
  "number": "1.6",
  "title": "Exercise",
  "body": " Exercise   One mole of at has a volume of a) and b) . Calculate its pressure if it behaves as an ideal gas. Calculate its pressure using van der Waal's gas equation. Given: and    "
},
{
  "id": "ex_first-2",
  "level": "2",
  "url": "ex_first.html#ex_first-2",
  "type": "Exercise",
  "number": "1.6.1",
  "title": "",
  "body": " One mole of at has a volume of a) and b) . Calculate its pressure if it behaves as an ideal gas. Calculate its pressure using van der Waal's gas equation. Given: and   "
},
{
  "id": "sec-I_law",
  "level": "1",
  "url": "sec-I_law.html",
  "type": "Section",
  "number": "2.1",
  "title": "First Law",
  "body": " First Law   The first law of thermodynamics states that the change in internal energy of a system is equal to the heat added to the system minus the work done by the system on its surroundings. When a system undergoes a process, the change in internal energy is given by , where is the heat added to the system and is the work done by the system. This law is a statement of the conservation of energy, which means that energy cannot be created or destroyed, only transferred or converted from one form to another. In another way, in every cyclic process, the net heat absorbed by the system is equal to the net work done by the system. Therefore, the internal energy of the system remains unchanged after a cyclic process, i.e., .  For any system if value of at initial state, O is , the is a fuction of the state, X as For an open system here is additional flow of matter. The total change in internal energy of a system can be expressed as the sum of the changes in internal energy due to heat transfer, work done, and matter flow.  If the system is open and going from state A to state B, the change in internal energy can be expressed as Since is a state function, the change in internal energy depends only on the initial and final states of the system, and not on the path taken to get from one state to the other. In general, the change in total internal energy can be written as the sum of the changes in internal energy due to heat transfer, work done, and matter flow, where is the energy due to transfer of charge , and is the energy due to transfer of polarization , is the change in energy due to change in magnetic dipole moment, , and is the energy due to change in surface area .  For a system undergoing chemical transformations, the total energy can be expressed as where is the change in the number of moles of the -th component.  Since no work is done at constant volume, . Hence,    Mechanical Work due to Change in Volume: When a system undergoes a change in volume under the action of a pressure , the work done by the system is given by . This is known as the mechanical work done by the system. The negative sign indicates, the volume increase as work is done by the system on its surroundings, and positive sign indicates the decrease of volume of the system when the work is done on the system by its surroundings.   Isothermal Volume Change: When a system undergoes an isothermal process, the temperature remains constant. The negative sign indicates that an expanding gas transfers energy to the surroundings, while a compressing gas absorbs energy from the surroundings.    Relation between and   The change in internal energy for one-component substance :    If the gas is heated at constant volume, then no work is done and the change in energy is due to heat supplied to the gas. However, if the gas is heated at constant pressure, then Hence, The right hand term is due to additional heat needed to raise the temperature of a gas at constant pressure to compentsate energy due to volume expansion.  For and ideal gas where is only a function of temperature and is independent of the volume, hence, and for 1 mole of a gas, , we have Therefore, molar heat capacities reduces to     Adiabatic Processes in Ideal Gas   In adiabatic process, the state of a system changes wihout any exchange of heat. Hence from , or, For an ideal gas, since is a function of temperature only at constant volume, we have If volume changes in ideal gas equation during the process of change, then we have   Also,  can be derived from     Sound Propagation  The propagation of sound in nature is also an adiabatic process because sound is pressure wave and propagate in the medium without generating heat. The loudness or internsity level of sound is given by  where kPa,   The velocity of sound is given by where is density of the medium and . Negative sign indicates volume is decreasing with the increase of pressure.  Now from,  and     Hess's law  Hess's Law of Constant Heat Summation states that the total enthalpy change ( ) for a chemical reaction is the same whether the reaction occurs in one step or in a series of steps. This is a direct consequence of the conservation of energy (First Law of Thermodynamics) and the fact that enthalpy is a state function. Because enthalpy depends only on the initial and final states of a system and not the path taken between them. We can manipulate a series of chemical equations like algebraic equations to find the net enthalpy change of a target reaction.  Hess's law refers to the heat evolved in a chemical reaction under constant pressure. Under such conditions, a part of the energy released during the reaction may be converted to work , if there is a change in volume from to . Using the basic equation of the First Law, , the heat evolved during a chemical transformation at a constant pressure can be written as  Since are specified by the state of the system not by the path, we can say is a state function. Hence, the state function, is called the Enthalpy, . The heat released by a chemical reaction at constant pressure and   Since If the system consists of one mole of a substance, and if the change in temperature due to the exchange of heat is , then it follows that     "
},
{
  "id": "subsec-hess_law-3",
  "level": "2",
  "url": "sec-I_law.html#subsec-hess_law-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Enthalpy, "
},
{
  "id": "sec-II_law",
  "level": "1",
  "url": "sec-II_law.html",
  "type": "Section",
  "number": "2.2",
  "title": "Second Law",
  "body": " Second Law   While the First Law is an incredibly powerful tool for tracking energy conservation, it is fundamentally blind to directionality and quality. It tells us that energy cannot be created or destroyed, but it permits countless physical phenomena that never actually happen in the real world. The First Law states that the change in internal energy of a closed system is equal to the heat added minus the work done: This is a strict conservation law. However, it treats heat ( ) and work ( ) as algebraic equivalents in a balancing ledger. It creates several major physical paradoxes that it cannot solve on its own:      The Directionality Problem (Asymmetry of Nature) If a hot cup of coffee sits in a cool room, heat spontaneously transfers from the cup to the air until thermal equilibrium is reached.   The First Law Perspective: If the coffee cup spontaneously absorbed heat from the cool room and became boiling hot while the room grew slightly colder, the First Law would be perfectly satisfied. Energy is still conserved.   The Reality: This reverse process never happens spontaneously. The First Law offers no physical reason why heat must flow from hot to cold rather than cold to hot.     The Conversion Asymmetry (Work vs. Heat) We can easily convert ordered macroscopic work completely into disordered microscopic thermal energy. For example, slamming on a car's brakes converts of the vehicle's kinetic energy into heat within the brake pads.   The First Law Perspective: The First Law implies this process is fully reversible. If the hot brake pads spontaneously cooled down and pushed the car forward, converting that thermal energy back into kinetic energy, the energy ledger would balance perfectly.   The Reality: You can never completely convert random thermal energy back into organized work on a macroscopic scale without leaving permanent changes in the surroundings.      Why We Need the Second Law The Second Law was formulated to patch these exact blind spots. It introduces a brand new state function Entropy, ( ) to establish a rigorous mathematical framework for tracking the arrow of time and the degradation of energy. The Second Law dictates the allowed direction of physical processes. By stating that the total entropy of an isolated system must always increase or remain constant ( ), it provides the definitive criteria for whether a process is spontaneous, reversible, or physically impossible.  The First Law treats all energy equally (1 J of work = 1 J of heat). The Second Law introduces the concept of energy degradation.   High-Quality Energy: Work (mechanical, electrical) is highly ordered and can be converted into other forms with nearly 100% efficiency.    Low-Quality Energy: Heat is the chaotic, random kinetic energy of trillions of microscopic particles.   The Second Law mathematically proves that whenever energy changes form, its overall usefulness degrades. Without the Second Law, engineers might waste lifetimes trying to build a perpetual motion machine of the second kind a device that runs at 100% thermal efficiency by extracting heat from a single reservoir (like the ocean) and converting it entirely into work. The Second Law sets the absolute thermodynamic ceiling for performance via the Clausius inequality and the Carnot limit: The Second Law of Thermodynamics establishes the direction of physical processes and asserts that macroscopic thermal energy exchanges are inherently irreversible.      Classical Statements     Kelvin-Planck Statement: It is impossible to construct a device that operates in a cycle and produces no other effect than the extraction of heat from a single reservoir and the performance of an equivalent amount of work.   Implication: A 100% efficient heat engine cannot exist.     Clausius Statement: It is impossible to construct a device that operates in a cycle and whose sole effect is to transfer heat from a cooler body to a hotter body. ◦   Implication: Heat flows spontaneously from high temperature to low temperature; active refrigeration requires external work input.        Thermodynamic Definition (The State Function, )    Clausius theorem states that for any closed cyclic process, the cyclic integral of the heat transfer divided by the temperature at the boundary is less than or equal to zero:     For a reversible cycle, this inequality becomes an equality implying that the integrand is an exact differential of a state function, Entropy (S):   For an irreversible process in an isolated system, the entropy must increase. This leads to the overarching differential statement of the Second Law: For a completely isolated system ( ), the global entropy change satisfies:         Statistical Formulation (Boltzmann Perspective) In statistical mechanics, entropy quantifies the number of accessible microstates ( ) corresponding to a given macroscopic thermodynamic state (macrostate): Where is the Boltzmann constant ( ). The Second Law Statistically: An isolated system will spontaneously evolve toward the macrostate with the largest multiplicity ( ). Because scales exponentially with particle number ( ), the probability of a macroscopic fluctuations decreasing entropy is vanishingly small, converting a statistical certainty into a deterministic law at the macroscopic scale.      Fundamental Consequences The Fundamental Thermodynamic Relation:  By combining the First Law ( ) with the reversible definitions and , we obtain the fundamental relation for a simple compressible system: This explicitly shows that entropy and volume are the natural variables of the internal energy .  Carnot Efficiency Limit: No heat engine operating between two thermal reservoirs ( and ) can be more efficient than a reversible Carnot engine operating between those same reservoirs:     Entropy   What is Entropy? At its core, entropy is a measure of how spread out or dispersed energy becomes at a specific temperature. It is often described casually as \"disorder,but it is much more accurate to think of it as a measure of probabilistic microstate multiplicity.   The Statistical Reality: Boltzmann's Perspective Every macroscopic system (a macrostate defined by pressure, volume, and temperature) has a specific number of unique quantum and positional arrangements its individual atoms can take (microstates, denoted by ).  Low Entropy: Energy is concentrated, localized, or highly organized. There are relatively few ways (small ) to arrange particles to keep energy trapped in one small spot. High Entropy: Energy is widely distributed and shared among as many particles and spatial locations as possible. There are an astronomical number of ways (large ) to arrange particles into a dispersed state.   The Ink Drop Analogy: When you drop purple ink into water, it starts as a concentrated spot (low entropy). Over time, random molecular collisions cause the ink molecules to spread out evenly through the glass (high entropy). The ink spreads not because of a physical force pushing it apart, but because there are trillions of times more ways for the molecules to be mixed than for them to stay packed tightly together in a neat little sphere. It is pure probability. Because the universe is composed of roughly particles, the probability of energy spontaneously un-spreading itself is so close to zero that it becomes a deterministic macroscopic impossibility.   What is \"Heat Death\"? Heat Death (also known as the Big Freeze) is the ultimate thermodynamic conclusion of our universe, directly dictated by the Second Law of Thermodynamics. If the universe is treated as a massive, isolated system, its total entropy must strictly increase over time. Energy naturally and irreversibly flows from highly concentrated regions (like stars and galaxies) out into the cold, empty expanse of space.   The Lifecycle of Cosmic Degradation Currently, our universe is in a state of relatively low entropy. Energy is highly localized. Gravitational potential energy collapses matter into stars, where nuclear fusion converts mass into high-energy photons, which are then radiated into cold space. This massive temperature gradient ( ) is exactly what allows work to be done, planets to form, and life to exist. However, this cannot last forever. The universe is projected to transition through distinct phases over trillions of years:    The Stelliferous Era ends: Galaxies run out of hydrogen gas. Star formation ceases, and existing stars slowly burn out, leaving behind white dwarfs, neutron stars, and black holes.     The Degenerate Era: Matter itself begins to degrade. If grand unified theories hold true, protons will slowly decay over a timescale of roughly to years, dissolving dead stars into fundamental particles.     The Black Hole Era: The only macro-structures left will be supermassive black holes. Over incomprehensibly long timescales ( to years), even these will slowly leak mass-energy back into the universe via Hawking Radiation.      Once the final black holes evaporate, the universe reaches its state of maximum possible entropy:    Thermal Equilibrium: The temperature of the entire universe becomes completely uniform, hovering just a tiny fraction above absolute zero ( ).     Zero Thermodynamic Work: Because there are no longer any temperature differences ( ) or density gradients anywhere in existence, no heat engine can operate, and no work can be performed.     The Death of Time: At this point, no macroscopic changes can ever occur. The universe becomes a thin, homogeneous soup of ultra-low-energy photons and leptons expanding infinitely into the dark.     The name \"Heat Death\" is often confusing because the universe will be incredibly cold. It is called heat death because all energy will have degraded into completely random, disordered thermal energy (heat) from which no useful work can ever be extracted again.   "
},
{
  "id": "sec-II_law-2-2",
  "level": "2",
  "url": "sec-II_law.html#sec-II_law-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Directionality Problem (Asymmetry of Nature) The Conversion Asymmetry (Work vs. Heat) "
},
{
  "id": "sec-II_law-2-3",
  "level": "2",
  "url": "sec-II_law.html#sec-II_law-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Why We Need the Second Law "
},
{
  "id": "sec-II_law-2-5",
  "level": "2",
  "url": "sec-II_law.html#sec-II_law-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Classical Statements Thermodynamic Definition (The State Function, ) Statistical Formulation (Boltzmann Perspective) "
},
{
  "id": "sec-II_law-2-6",
  "level": "2",
  "url": "sec-II_law.html#sec-II_law-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fundamental Consequences "
},
{
  "id": "subsec-entropy-2",
  "level": "2",
  "url": "sec-II_law.html#subsec-entropy-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "What is Entropy? "
},
{
  "id": "subsec-entropy-3",
  "level": "2",
  "url": "sec-II_law.html#subsec-entropy-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Statistical Reality: Boltzmann's Perspective "
},
{
  "id": "subsec-entropy-5",
  "level": "2",
  "url": "sec-II_law.html#subsec-entropy-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "What is \"Heat Death\"? "
},
{
  "id": "subsec-entropy-6",
  "level": "2",
  "url": "sec-II_law.html#subsec-entropy-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The Lifecycle of Cosmic Degradation "
},
{
  "id": "sec-III_law",
  "level": "1",
  "url": "sec-III_law.html",
  "type": "Section",
  "number": "2.3",
  "title": "Third Law",
  "body": " Third Law  Text of section.  "
},
{
  "id": "sec-III",
  "level": "1",
  "url": "sec-III.html",
  "type": "Section",
  "number": "3.1",
  "title": "Chapter III",
  "body": " Chapter III  Text of section.  "
},
{
  "id": "sec-IV",
  "level": "1",
  "url": "sec-IV.html",
  "type": "Section",
  "number": "3.2",
  "title": "Chapter IV",
  "body": " Chapter IV  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
