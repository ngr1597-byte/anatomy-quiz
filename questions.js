const METADATA = {
  "description": "Anatomy MCQ dataset from Indian medical PG entrance exams (AIIMS, NEET, INI-CET)",
  "source": "Marrow Anatomy Question Bank",
  "total_exams": 15,
  "exams_extracted": 2,
  "schema_version": "1.0",
  "image_directory": "images/",
  "topic_categories": [
    "Embryology",
    "Neuroanatomy",
    "Head & Neck",
    "Thorax",
    "Abdomen & Pelvis",
    "Upper Limb",
    "Lower Limb",
    "Histology",
    "General Anatomy",
    "Osteology",
    "Back & Vertebral Column"
  ]
};

const QUESTIONS = [
  {
    "id": "AIIMS_2017_Q01",
    "exam": "AIIMS 2017",
    "question_number": 1,
    "topic": "Embryology",
    "question_text": "Nucleus pulposus is derived from ____________.",
    "has_image": true,
    "image_file": "AIIMS_2017_Q01.png",
    "image_description": "Diagram of embryonic disc showing labeled structures: 1 (notochord), 2 (ectoderm), 3 (endoderm), 4 (intraembryonic mesoderm)",
    "options": {
      "a": "1",
      "b": "2",
      "c": "3",
      "d": "4"
    },
    "correct_answer": "a",
    "explanation": "Nucleus pulposus is derived from the notochord (marked as 1). The other labelled structures are: 2 - Ectoderm, 3 - Endoderm, 4 - Intraembryonic mesoderm."
  },
  {
    "id": "AIIMS_2017_Q02",
    "exam": "AIIMS 2017",
    "question_number": 2,
    "topic": "Neuroanatomy",
    "question_text": "What is the origin of the fibers marked by the arrow?",
    "has_image": true,
    "image_file": "AIIMS_2017_Q02.png",
    "image_description": "Sagittal section of the brain with a yellow arrow pointing to a white fiber tract (fornix)",
    "options": {
      "a": "Hippocampus",
      "b": "Habenular",
      "c": "Mamillary body",
      "d": "Amygdala"
    },
    "correct_answer": "a",
    "explanation": "The arrow indicates the fornix. It arises from the hippocampus and ends in the mamillary body of the hypothalamus. Fornix is an example of an association fiber. It is supplied by the anterior cerebral artery."
  },
  {
    "id": "AIIMS_2017_Q03",
    "exam": "AIIMS 2017",
    "question_number": 3,
    "topic": "Head & Neck",
    "question_text": "Among the following, what is the function of the marked muscles?",
    "has_image": true,
    "image_file": "AIIMS_2017_Q03.png",
    "image_description": "Diagram of the mandible showing pterygoid muscles with arrows pointing to the lateral pterygoid muscle",
    "options": {
      "a": "Depression",
      "b": "Protrusion",
      "c": "Elevation",
      "d": "Retraction"
    },
    "correct_answer": "a",
    "explanation": "The muscle marked in the above image is the lateral pterygoid muscle and its primary function is depression of the mandible (opening of the mouth). Bilateral contraction of the lateral pterygoid alone causes depression of the mandible (making it the primary function) whereas protrusion is the result of bilateral contraction of both the medial and lateral pterygoid muscles. The lateral pterygoid has the following actions: Opening of the jaw (depression), protrusion (pulling the mandibular condyle forwards and slightly downwards), and side-to-side movement (grinding food between teeth)."
  },
  {
    "id": "AIIMS_2017_Q04",
    "exam": "AIIMS 2017",
    "question_number": 4,
    "topic": "Head & Neck",
    "question_text": "Which of the marked foramen does the mandibular division of the trigeminal nerve pass through?",
    "has_image": true,
    "image_file": "AIIMS_2017_Q04.png",
    "image_description": "Superior view of the internal surface of the skull base with four foramina labeled A, B, C, D",
    "options": {
      "a": "A",
      "b": "B",
      "c": "C",
      "d": "D"
    },
    "correct_answer": "a",
    "explanation": "The mandibular nerve passes through the foramen ovale which is marked as A in the above image. Other foramina marked: B - Foramen spinosum, C - Internal acoustic meatus, D - Jugular foramen."
  },
  {
    "id": "AIIMS_2017_Q05",
    "exam": "AIIMS 2017",
    "question_number": 5,
    "topic": "Histology",
    "question_text": "The structure marked with the asterisk in the electron micrograph indicates ____________.",
    "has_image": true,
    "image_file": "AIIMS_2017_Q05.png",
    "image_description": "Electron micrograph of a synapse showing structures marked with asterisk (*) and arrowhead",
    "options": {
      "a": "Mitochondria",
      "b": "Golgi bodies",
      "c": "Secretory vesicles",
      "d": "Ribosomes"
    },
    "correct_answer": "c",
    "explanation": "The structure marked with the asterisk in the electron micrograph indicates presynaptic secretory vesicles. The structure marked with the arrowhead is postsynaptic density. The secretory vesicles are synthesized by the neurons and are involved in electrochemical signalling in the brain and neuromuscular junctions. On electron microscopy: Mitochondria appear as round or elliptical bodies of 0.5-2.0 micron long. Golgi bodies appear as stacks of flattened membranous cisternae surrounded by clusters of vesicles. Ribosomes may be attached to the membrane of the rough endoplasmic reticulum, or exist as monosomes or polyribosomes associated with mRNA."
  },
  {
    "id": "AIIMS_2017_Q06",
    "exam": "AIIMS 2017",
    "question_number": 6,
    "topic": "Head & Neck",
    "question_text": "In the image given below, identify the muscle responsible for the opening of the mouth.",
    "has_image": true,
    "image_file": "AIIMS_2017_Q06.png",
    "image_description": "Two diagrams showing chewing muscles (superficial and deep views) with structures labeled A, B, C, D",
    "options": {
      "a": "A",
      "b": "B",
      "c": "C",
      "d": "D"
    },
    "correct_answer": "b",
    "explanation": "In the given image the structure marked B represents the lateral pterygoid muscle which is responsible for the opening of the mouth. Origin - Upper head: Infratemporal surface and infratemporal crest of the greater wing of the sphenoid bone. Lower head: Lateral surface of the lateral pterygoid plate. Insertion: Pterygoid fovea, capsule of the temporomandibular joint, and the articular disc. Nerve supply: Lateral pterygoid nerve (branch of trigeminal nerve). Other structures: A - Temporalis, C - Masseter, D - Medial pterygoid."
  },
  {
    "id": "AIIMS_2017_Q07",
    "exam": "AIIMS 2017",
    "question_number": 7,
    "topic": "Head & Neck",
    "question_text": "Identify the structure passing through the foramen marked.",
    "has_image": true,
    "image_file": "AIIMS_2017_Q07.png",
    "image_description": "Superior view of skull base with an arrow and question mark pointing to a foramen (superior orbital fissure region)",
    "options": {
      "a": "Abducens nerve",
      "b": "Spinal accessory nerve",
      "c": "Ophthalmic artery",
      "d": "Middle meningeal artery"
    },
    "correct_answer": "a",
    "explanation": "The marked foramen is the superior orbital fissure and the abducens nerve passes through it. The abducens nerve is the 6th cranial nerve and arises from the brainstem at the pontomedullary junction. It runs through Dorello's canal, enters the cavernous sinus where it lies lateral to the internal carotid artery, and enters the orbit through the superior orbital fissure within the common tendinous ring to supply the lateral rectus. Other options: Spinal accessory nerve passes through foramen magnum. Ophthalmic artery passes through optic canal. Middle meningeal artery passes through foramen spinosum."
  },
  {
    "id": "AIIMS_2017_Q08",
    "exam": "AIIMS 2017",
    "question_number": 8,
    "topic": "Lower Limb",
    "question_text": "The talocalcaneonavicular joint is a ________ type of joint.",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Ball and Socket",
      "b": "Saddle type",
      "c": "Plane",
      "d": "Ellipsoid"
    },
    "correct_answer": "a",
    "explanation": "The talocalcaneonavicular joint is a ball and socket joint. The ball part is formed by the rounded head of the talus. The socket is formed by 3 structures: Posterior surface of the navicular, Anterior articular surface of the calcaneus, and Upper surface of the plantar calcaneonavicular ligament (spring ligament)."
  },
  {
    "id": "AIIMS_2017_Q09",
    "exam": "AIIMS 2017",
    "question_number": 9,
    "topic": "Neuroanatomy",
    "question_text": "Which of the following is connected to the structure marked as A in the image below?",
    "has_image": true,
    "image_file": "AIIMS_2017_Q09.png",
    "image_description": "Sagittal section of brain with structure A marked by a blue arrow at the posterior end of the corpus callosum (splenium)",
    "options": {
      "a": "Orbital cortex",
      "b": "Hippocampus",
      "c": "Striate cortex",
      "d": "Optic chiasma"
    },
    "correct_answer": "c",
    "explanation": "The structure marked A is the splenium of the corpus callosum and it is connected to the striate cortex. The body of the corpus callosum arches posteriorly and ends as the thickened posterior portion called the splenium. The fibers from the splenium form the forceps major and arch backward into the occipital lobe (striate cortex). The hippocampus is not connected directly to the splenium, but situated inferior to the splenium."
  },
  {
    "id": "AIIMS_2017_Q10",
    "exam": "AIIMS 2017",
    "question_number": 10,
    "topic": "Thorax",
    "question_text": "The structure passing through the central tendon of the diaphragm is:",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Oesophagus",
      "b": "Aorta",
      "c": "Inferior vena cava",
      "d": "Sympathetic Chain"
    },
    "correct_answer": "c",
    "explanation": "The inferior vena cava passes through the central tendon of the diaphragm."
  },
  {
    "id": "AIIMS_2017_Q11",
    "exam": "AIIMS 2017",
    "question_number": 11,
    "topic": "Back & Vertebral Column",
    "question_text": "Shape of Trapezius muscle is ________________",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Triangular",
      "b": "Quadrilateral",
      "c": "Pentagonal",
      "d": "Linear"
    },
    "correct_answer": "a",
    "explanation": "The trapezius is a broad, flat and triangular muscle. Considering left or right side - triangular shape; considering both sides together - diamond shaped, hence named 'trapezius'."
  },
  {
    "id": "AIIMS_2017_Q12",
    "exam": "AIIMS 2017",
    "question_number": 12,
    "topic": "General Anatomy",
    "question_text": "All of the following are true about grey rami communicantes except:",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Unmyelinated",
      "b": "Connected to spinal nerve",
      "c": "Preganglionic",
      "d": "Present medial to white rami communicantes"
    },
    "correct_answer": "c",
    "explanation": "The grey rami communicantes are not preganglionic fibers. They are postganglionic fibers. The sympathetic trunks consist of a series of ganglia connected to spinal nerves by white and grey rami communicantes. Preganglionic sympathetic neurons are in the lateral horn of spinal grey matter. They exit via ventral nerve roots and enter the sympathetic trunk in white rami communicantes (preganglionic, myelinated, acetylcholine). They synapse with postganglionic neurons whose axons return to the spinal nerve through grey rami communicantes (postganglionic, unmyelinated, noradrenaline)."
  },
  {
    "id": "AIIMS_2017_Q13",
    "exam": "AIIMS 2017",
    "question_number": 13,
    "topic": "Histology",
    "question_text": "Which of the following represents a holocrine gland?",
    "has_image": true,
    "image_file": "AIIMS_2017_Q13.png",
    "image_description": "Four histopathological images labeled A, B, C, D showing different types of glands",
    "options": {
      "a": "A",
      "b": "B",
      "c": "C",
      "d": "D"
    },
    "correct_answer": "b",
    "explanation": "Image B represents the sebaceous gland, which is a holocrine gland. Holocrine secretions are produced in the cytoplasm and released by rupture of the plasma membrane, destroying the cell. Examples: Sebaceous glands of skin and Meibomian glands of eyelid. Image A: Sweat glands (Eccrine/merocrine). Image C: Mammary gland (Apocrine). Image D: Ceruminous gland (Apocrine)."
  },
  {
    "id": "AIIMS_2017_Q14",
    "exam": "AIIMS 2017",
    "question_number": 14,
    "topic": "Embryology",
    "question_text": "Which of the following structures marked in the below image gives rise to the heart in an adult?",
    "has_image": true,
    "image_file": "AIIMS_2017_Q14.png",
    "image_description": "Photograph of a human embryo with structures labeled A, B, C, D",
    "options": {
      "a": "A",
      "b": "C",
      "c": "B",
      "d": "D"
    },
    "correct_answer": "b",
    "explanation": "The structure marked 'C' in the above image depicts the heart bulge (developing heart)."
  },
  {
    "id": "AIIMS_2017_Q15",
    "exam": "AIIMS 2017",
    "question_number": 15,
    "topic": "Abdomen & Pelvis",
    "question_text": "A 58-year-old woman was undergoing cholecystectomy. During the procedure, the resident accidentally advanced the scissors along the superior border of the epiploic foramen causing injury. Which of the following structures is likely to be injured?",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Right lobe of liver",
      "b": "Quadrate lobe of liver",
      "c": "Caudate lobe of liver",
      "d": "Fundus of gall bladder"
    },
    "correct_answer": "c",
    "explanation": "The superior border of the epiploic foramen (foramen of Winslow) is formed by the caudate lobe of the liver. Epiploic foramen is a vertical slit of about 3 cm behind the free right border of the lesser omentum connecting the lesser sac to the greater sac. Clinical note: Pringle maneuver is a technique where the free margin of the lesser omentum is compressed to obtain rapid control of bleeding from the hepatic artery and portal vein in liver trauma and surgery."
  },
  {
    "id": "AIIMS_2017_Q16",
    "exam": "AIIMS 2017",
    "question_number": 16,
    "topic": "Neuroanatomy",
    "question_text": "Which of the following structures does the cell pointed in arrow inhibit?",
    "has_image": true,
    "image_file": "AIIMS_2017_Q16.png",
    "image_description": "Histopathological section of the cerebellum with an arrow pointing to large cells (Purkinje cells)",
    "options": {
      "a": "Vestibular nuclei",
      "b": "Anterior horn of spinal",
      "c": "Basal ganglia",
      "d": "Deep nuclei of cerebellum"
    },
    "correct_answer": "d",
    "explanation": "The image shows a histopathological section of the cerebellum. The cells marked with the arrow are Purkinje cells and they inhibit deep nuclei of the cerebellum."
  },
  {
    "id": "AIIMS_2017_Q17",
    "exam": "AIIMS 2017",
    "question_number": 17,
    "topic": "Abdomen & Pelvis",
    "question_text": "The image below shows the insertion of transversus abdominis muscle. Identify the conjoint tendon:",
    "has_image": true,
    "image_file": "AIIMS_2017_Q17.png",
    "image_description": "Diagram of the anterior abdominal wall showing layers with structures labeled A, B, C, D",
    "options": {
      "a": "A",
      "b": "B",
      "c": "C",
      "d": "D"
    },
    "correct_answer": "c",
    "explanation": "The structure marked C is the conjoint tendon, formed from the lower fibres of internal oblique and the lower part of the aponeurosis of transversus abdominis. It is attached to the pubic crest and extends along the pectineal line. Transversus Abdominis - Origin: internal surface of 7th-12th costal cartilages, thoracolumbar fascia, iliac crest, connective tissue deep to lateral third of inguinal ligament. Insertion: Linea Alba with aponeurosis of internal oblique, pubic crest, and pecten pubis via conjoint tendon. A: Lumbar fascia, B: Transversus Abdominis, D: Inguinal Ligament."
  },
  {
    "id": "AIIMS_2017_Q18",
    "exam": "AIIMS 2017",
    "question_number": 18,
    "topic": "Histology",
    "question_text": "What represents the marked area in the given histology of lymph node?",
    "has_image": true,
    "image_file": "AIIMS_2017_Q18.png",
    "image_description": "Histological section of lymph node with a blue arrow pointing to an area at the periphery of a follicle",
    "options": {
      "a": "Marginal zone",
      "b": "Paracortical zone",
      "c": "Germinal center",
      "d": "Mantle zone"
    },
    "correct_answer": "d",
    "explanation": "The area marked is the mantle zone of a lymph node. The mantle zone is produced as surrounding cells are marginalised by the rapidly growing germinal centre. It is populated by mainly quiescent B cells with condensed heterochromatic nuclei and little cytoplasm. The paracortex lies between cortical follicles and the medulla, populated mainly by T cells not organised into follicles."
  },
  {
    "id": "AIIMS_2017_Q19",
    "exam": "AIIMS 2017",
    "question_number": 19,
    "topic": "Embryology",
    "question_text": "A young patient presented with hypoparathyroidism, absent thymus and tetany. Which of the following marked areas in the picture is defective in this condition?",
    "has_image": true,
    "image_file": "AIIMS_2017_Q19.png",
    "image_description": "Diagram of pharyngeal arches/pouches labeled I, II, III, IV with numbered derivatives 1, 2, 3, 4",
    "options": {
      "a": "1",
      "b": "2",
      "c": "3",
      "d": "4"
    },
    "correct_answer": "c",
    "explanation": "The clinical scenario is suggestive of DiGeorge syndrome, caused by defective development of the third and fourth pharyngeal pouch. In the image, '3' points to the thymus (derivative of 3rd pharyngeal pouch). DiGeorge syndrome is caused by hemizygous interstitial deletion of chromosome 22, characterized by conotruncal defects, hypoparathyroidism, and dysmorphic syndrome (velocardiofacial syndrome). Presentations include: Cleft palate, Abnormal facies, Thymic aplasia (T-cell deficiency), Cardiac defects, Hypocalcemia secondary to parathyroid aplasia (CATCH-22)."
  },
  {
    "id": "AIIMS_2017_Q20",
    "exam": "AIIMS 2017",
    "question_number": 20,
    "topic": "Upper Limb",
    "question_text": "A patient came with complaints of inability to move his 4th and 5th digit, cannot hold a pen and he was not able to hold a paper between fingers. Which of the following sites given below is the probable cause of injury to the nerve in question?",
    "has_image": true,
    "image_file": "AIIMS_2017_Q20.png",
    "image_description": "Diagram of the humerus bone with sites labeled A, B, C, D at different locations",
    "options": {
      "a": "A",
      "b": "B",
      "c": "C",
      "d": "D"
    },
    "correct_answer": "c",
    "explanation": "The clinical situation suggests ulnar nerve injury. The most likely site is medial epicondyle (marked as C). Tests for ulnar nerve lesions: Card test positive, Claw hand deformity, Froment's sign positive, Wartenberg sign, Palmaris brevis sign. Positive card test is due to weakness of palmar interrosei causing loss of adduction. Option A: Radial groove (radial nerve). Option D: Neck of humerus (axillary nerve). Option B: Lateral epicondyle (may lead to tardy ulnar nerve palsy but incidence is less)."
  },
  {
    "id": "AIIMS_2017_Q21",
    "exam": "AIIMS 2017",
    "question_number": 21,
    "topic": "Osteology",
    "question_text": "Which of the following structures of the scapula is palpable in the infraclavicular fossa?",
    "has_image": true,
    "image_file": "AIIMS_2017_Q21.png",
    "image_description": "Posterior view of the scapula with structures labeled A, B, C, D",
    "options": {
      "a": "A",
      "b": "B",
      "c": "C",
      "d": "D"
    },
    "correct_answer": "a",
    "explanation": "The part marked 'A' is the coracoid process. The apex of the coracoid process lies approximately 2.5cm below the clavicle, immediately lateral to the infraclavicular fossa (deltopectoral triangle). Hence, the coracoid process can be palpated below the clavicle."
  },
  {
    "id": "AIIMS_2017_Q22",
    "exam": "AIIMS 2017",
    "question_number": 22,
    "topic": "Abdomen & Pelvis",
    "question_text": "Identify the pelvic diaphragm in the picture given below.",
    "has_image": true,
    "image_file": "AIIMS_2017_Q22.png",
    "image_description": "Cross-sectional diagram of pelvic anatomy with structures labeled A, B, C, D",
    "options": {
      "a": "A",
      "b": "B",
      "c": "C",
      "d": "D"
    },
    "correct_answer": "a",
    "explanation": "The structure marked 'A' is the levator ani muscle which is part of the pelvic diaphragm. Other structures: B - External anal sphincter, C - Internal anal sphincter, D - Pudendal canal. Levator ani and ischiococcygeus form the pelvic diaphragm, delineating the lower limit of the true pelvis. Levator ani is formed by: Pubococcygeus, Iliococcygeus, and Puborectalis."
  },
  {
    "id": "AIIMS_2017_Q23",
    "exam": "AIIMS 2017",
    "question_number": 23,
    "topic": "Abdomen & Pelvis",
    "question_text": "What is the root value of cremasteric reflex?",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "L1, L2",
      "b": "L3, L4",
      "c": "S1, S2",
      "d": "T8, T9"
    },
    "correct_answer": "a",
    "explanation": "Cremasteric reflex is mediated by L1 and L2. In this reflex, there is ipsilateral elevation of the testicle following stroking of the medial thigh. Afferent: Femoral branch of genitofemoral nerve. Efferent: Genital branch of genitofemoral nerve. Deep reflexes: Biceps C5,C6; Brachioradialis C5,C6; Triceps C6,C7; Finger flexion C8; Knee jerk L3,L4; Ankle S1,S2; Jaw jerk CN V (Pons). Superficial reflexes: Corneal CN V(A)/CN VII(E); Scapular C5,T1; Abdominal T7-T12; Anal S3,S4; Cremasteric L1,L2; Plantar L5,S1."
  },
  {
    "id": "AIIMS_2018_Q01",
    "exam": "AIIMS 2018",
    "question_number": 1,
    "topic": "Histology",
    "question_text": "The structure marked with the asterisk in the electron micrograph indicates ____________.",
    "has_image": true,
    "image_file": "AIIMS_2018_Q01.png",
    "image_description": "Electron micrograph of a synapse showing structures marked with asterisk (*) and arrowhead",
    "options": {
      "a": "Mitochondria",
      "b": "Golgi bodies",
      "c": "Secretory vesicles",
      "d": "Ribosomes"
    },
    "correct_answer": "c",
    "explanation": "The structure marked with the asterisk indicates presynaptic secretory vesicles. The arrowhead marks postsynaptic density. Secretory vesicles are synthesized by neurons and involved in electrochemical signalling in the brain and neuromuscular junctions. On electron microscopy: Mitochondria appear as round or elliptical bodies of 0.5-2.0 micron. Golgi bodies appear as stacks of flattened membranous cisternae. Ribosomes may be attached to rough ER membrane or exist as monosomes/polyribosomes."
  },
  {
    "id": "AIIMS_2018_Q02",
    "exam": "AIIMS 2018",
    "question_number": 2,
    "topic": "Head & Neck",
    "question_text": "Inferior thyroid artery is the branch of which of the following?",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "External carotid artery",
      "b": "Internal carotid artery",
      "c": "Thyrocervical trunk",
      "d": "Lingual artery"
    },
    "correct_answer": "c",
    "explanation": "Inferior thyroid artery is a branch of thyrocervical trunk, which in turn is a branch of the first part of the subclavian artery. The inferior thyroid artery loops upwards anterior to the medial border of the scalenus anterior, turns medially just below the sixth cervical transverse process, and then descends on longus colli to the lower border of the thyroid gland. Relations between the terminal branches and recurrent laryngeal nerve are very variable and of considerable surgical importance."
  },
  {
    "id": "AIIMS_2018_Q03",
    "exam": "AIIMS 2018",
    "question_number": 3,
    "topic": "Lower Limb",
    "question_text": "Neurovascular bundle is absent in which compartment of the leg?",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Lateral compartment",
      "b": "Posterior superficial compartment",
      "c": "Posterior deep compartment",
      "d": "Anterior compartment"
    },
    "correct_answer": "b",
    "explanation": "Posterior superficial compartment of the leg does not contain any neurovascular bundle. The posterior compartment is divided into deep and superficial parts by the transverse intermuscular septum. Contents of the posterior superficial compartment are gastrocnemius, plantaris, and soleus muscle. Neurovascular components: Anterior compartment - Anterior tibial artery and Deep fibular/peroneal nerve. Posterior deep compartment - Tibial nerve and posterior tibial vessels. Lateral compartment - Superficial peroneal/fibular nerve and peroneal/fibular vessel."
  },
  {
    "id": "AIIMS_2018_Q04",
    "exam": "AIIMS 2018",
    "question_number": 4,
    "topic": "Neuroanatomy",
    "question_text": "A patient presents to you with inability to form words but can make noises. He also knows what he wants to say. What area of the brain has been damaged in this patient?",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Wernicke's area",
      "b": "Broca's area",
      "c": "Heschl's gyrus",
      "d": "Striate area"
    },
    "correct_answer": "b",
    "explanation": "The clinical scenario is suggestive of Broca's aphasia in which the Broca's area will be affected. In Broca's aphasia (Motor aphasia / Non-fluent aphasia), areas 44 and 45 in the prefrontal and premotor facial regions of the cerebral cortex are affected. The affected individuals will have difficulty forming verbal or written words. The comprehension aspect of speech is preserved but the person cannot repeat or name the words and lacks fluency. Patients in whom the area is severely affected may have very few words to express all of their emotions."
  },
  {
    "id": "AIIMS_2018_Q05",
    "exam": "AIIMS 2018",
    "question_number": 5,
    "topic": "Neuroanatomy",
    "question_text": "Identify the wrongly marked structure in the diagram",
    "has_image": true,
    "image_file": "AIIMS_2018_Q05.png",
    "image_description": "Midsagittal section of brain with structures labeled: A-Corpus Callosum, B-Fornix, C-Hypothalamus, D-Cerebellum",
    "options": {
      "a": "A-Corpus Callosum",
      "b": "C-Hypothalamus",
      "c": "B-Fornix",
      "d": "D-Cerebellum"
    },
    "correct_answer": "b",
    "explanation": "The image shows the midsagittal section of the brain. The wrongly marked structure is C-Hypothalamus. The structure marked as C corresponds to the pituitary gland."
  },
  {
    "id": "AIIMS_2018_Q06",
    "exam": "AIIMS 2018",
    "question_number": 6,
    "topic": "Upper Limb",
    "question_text": "Loss of flexion at the interphalangeal joint of thumb after supracondylar fracture is due to the involvement of?",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Deep branch of ulnar nerve",
      "b": "Median Nerve",
      "c": "Posterior interosseous nerve",
      "d": "Anterior interosseous nerve"
    },
    "correct_answer": "d",
    "explanation": "Loss of flexion at the interphalangeal (IP) joint of the thumb is due to the involvement of the anterior interosseous nerve (AIN). Flexion of thumb occurs at 2 joints: IP joint - Flexor pollicis longus (FPL) supplied by the anterior interosseous nerve (a branch of the median nerve, C7 and C8). MCP joint - Flexor pollicis brevis (FPB) supplied by the recurrent motor branch of the median nerve. Deep branch of ulnar nerve causes ulnar claw hand."
  },
  {
    "id": "AIIMS_2018_Q07",
    "exam": "AIIMS 2018",
    "question_number": 7,
    "topic": "Neuroanatomy",
    "question_text": "Purkinje cells of cerebellum relay into ________",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Caudate nucleus",
      "b": "Lentiform nucleus",
      "c": "Dentate nucleus",
      "d": "Red nucleus"
    },
    "correct_answer": "c",
    "explanation": "Purkinje cells of the cerebellum relay into the dentate nucleus which is one of the deep cerebellar nuclei. The input to the Purkinje cells come from the climbing fibres. The output of Purkinje cells is inhibitory to the deep cerebellar nuclei. Options A and B: Caudate and lentiform nuclei are part of the basal ganglia. Option D: Red nucleus receives afferents from the cerebellum and plays a role in modulating signals to the upper motor neurons of the cerebral cortex."
  },
  {
    "id": "AIIMS_2018_Q08",
    "exam": "AIIMS 2018",
    "question_number": 8,
    "topic": "Neuroanatomy",
    "question_text": "Which of the following sensations is not perceived by the spinal nucleus of the trigeminal nerve?",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Temperature",
      "b": "Pain",
      "c": "Touch",
      "d": "Proprioception"
    },
    "correct_answer": "d",
    "explanation": "Proprioception is perceived by the mesencephalic nucleus of the trigeminal nerve, not the spinal nucleus. The trigeminal nerve consists of 4 nuclei: 3 sensory (Mesencephalic, Spinal, and Principal sensory nucleus) and 1 motor. Mesencephalic nucleus receives proprioception from muscles of mastication, facial and extraocular muscles. Principal sensory nucleus receives touch and pressure from the face. Spinal nucleus receives pain and temperature and some fibers of touch. Motor nucleus supplies the muscles of mastication, tensor tympani, tensor veli palatini, mylohyoid and anterior belly of digastric."
  },
  {
    "id": "AIIMS_2018_Q09",
    "exam": "AIIMS 2018",
    "question_number": 9,
    "topic": "Neuroanatomy",
    "question_text": "The structure marked in the given picture arises from the ________.",
    "has_image": true,
    "image_file": "AIIMS_2018_Q09.png",
    "image_description": "Coronal section of the brain with an arrow pointing to a white fiber tract (fornix) running between the hemispheres",
    "options": {
      "a": "Mamillary body",
      "b": "Hippocampus",
      "c": "Thalamus",
      "d": "Amygdala"
    },
    "correct_answer": "b",
    "explanation": "This is a coronal section of the brain and the marked structure is the fornix. It arises from the hippocampus and ends in the mammillary body of the hypothalamus."
  },
  {
    "id": "AIIMS_2018_Q10",
    "exam": "AIIMS 2018",
    "question_number": 10,
    "topic": "Head & Neck",
    "question_text": "Which of the following arteries does not supply the corresponding region of the dura mater?",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Middle meningeal artery \u2013 Anterior cranial fossa",
      "b": "Accessory meningeal branch of maxillary artery \u2013 Middle cranial fossa",
      "c": "Meningeal branch of internal carotid artery \u2013 Posterior cranial fossa",
      "d": "Meningeal branch of anterior and posterior ethmoid artery \u2013 Anterior cranial fossa"
    },
    "correct_answer": "c",
    "explanation": "The meningeal branch of the internal carotid artery (ICA) does not supply the posterior cranial fossa. It supplies the anterior cranial fossa. The dura mater is supplied by meningeal arteries that pass along the inner periosteum (endosteum) of the skull. Anterior cranial fossa: Meningeal branches of anterior/posterior ethmoid arteries, internal carotid artery, and middle meningeal artery. Middle cranial fossa: Middle meningeal artery, accessory meningeal branches of maxillary artery, ascending pharyngeal artery, branches of internal carotid artery, recurrent branch of lacrimal artery. Posterior cranial fossa: Meningeal branches of occipital artery, posterior meningeal branches of vertebral artery, dorsal meningeal and tentorial arteries from the meningohypophyseal trunk."
  },
  {
    "id": "AIIMS_2018_Q11",
    "exam": "AIIMS 2018",
    "question_number": 11,
    "topic": "Upper Limb",
    "question_text": "All of the following take part in the formation of the wrist joint, except:",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Scaphoid",
      "b": "Triquetrum",
      "c": "Distal end of radius",
      "d": "Distal end of ulna"
    },
    "correct_answer": "d",
    "explanation": "The distal end of the ulna does not take part in the formation of the radiocarpal joint. The radiocarpal joint (Wrist joint) is a synovial, biaxial, and ellipsoid joint formed by the articulation of: the distal end of the radius, articular disc of the triangular fibrocartilage, and scaphoid, lunate and triquetrum. In the neutral position of the wrist, only the scaphoid and lunate are in contact with the radius and articular disc; the triquetrum comes into apposition with the disc only in full adduction of the wrist joint."
  },
  {
    "id": "AIIMS_2018_Q12",
    "exam": "AIIMS 2018",
    "question_number": 12,
    "topic": "Head & Neck",
    "question_text": "Which of the following nerves is not involved in olfaction?",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Trigeminal nerve",
      "b": "Vagus nerve",
      "c": "Glossopharyngeal nerve",
      "d": "Hypoglossal nerve"
    },
    "correct_answer": "d",
    "explanation": "The hypoglossal nerve is purely motor cranial nerve and is not involved in olfaction. The other three cranial nerves \u2014 trigeminal, glossopharyngeal, and vagus nerves are mixed cranial nerves and contribute to olfaction. Vagal nerve stimulation modifies the electrical activity of the olfactory bulb."
  },
  {
    "id": "AIIMS_2018_Q13",
    "exam": "AIIMS 2018",
    "question_number": 13,
    "topic": "Thorax",
    "question_text": "Which of the following is the most conspicuous sign of breast cancer?",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Peau d'orange",
      "b": "Nipple retraction",
      "c": "Puckering",
      "d": "Both nipple retraction and puckering"
    },
    "correct_answer": "a",
    "explanation": "The most conspicuous sign of breast cancer is Peau d'orange appearance. Peau d'orange (orange peel like texture) is the edematous swollen and pitted breast skin due to obstruction of the subcutaneous lymphatics."
  },
  {
    "id": "AIIMS_2018_Q14",
    "exam": "AIIMS 2018",
    "question_number": 14,
    "topic": "Head & Neck",
    "question_text": "Identify the cranial nerve that passes through the marked foramen marked in the image below.",
    "has_image": true,
    "image_file": "AIIMS_2018_Q14.png",
    "image_description": "Superior view of the skull base with an arrow and question mark pointing to a foramen (superior orbital fissure)",
    "options": {
      "a": "Oculomotor nerve",
      "b": "Olfactory nerve",
      "c": "Optic nerve",
      "d": "Facial nerve"
    },
    "correct_answer": "a",
    "explanation": "The marked structure is the superior orbital fissure and the oculomotor nerve passes through this fissure. Superior orbital fissure is divided into three compartments by the common tendinous ring. The oculomotor nerve passes through its intermediate compartment."
  },
  {
    "id": "AIIMS_2018_Q15",
    "exam": "AIIMS 2018",
    "question_number": 15,
    "topic": "Thorax",
    "question_text": "Which of the following veins drain into brachiocephalic vein?",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Hemiazygous vein",
      "b": "Superior thyroid veins",
      "c": "Right superior intercostal vein",
      "d": "Left superior intercostal vein"
    },
    "correct_answer": "d",
    "explanation": "The left superior intercostal vein drains into the left brachiocephalic vein. Tributaries of the brachiocephalic vein: Left and right internal thoracic veins, left and right inferior thyroid veins, left superior intercostal vein drains into the left brachiocephalic vein. The right superior intercostal vein drains into the azygos vein. Option A: Hemiazygous vein drains into the azygous vein. Option B: Superior thyroid veins drain directly into internal jugular veins."
  },
  {
    "id": "AIIMS_2018_Q16",
    "exam": "AIIMS 2018",
    "question_number": 16,
    "topic": "Head & Neck",
    "question_text": "What is the main action of the muscle marked below?",
    "has_image": true,
    "image_file": "AIIMS_2018_Q16.png",
    "image_description": "Superior view of skull base showing muscles of mastication from above, with an arrow and question mark pointing to a muscle (temporalis)",
    "options": {
      "a": "Elevation",
      "b": "Depression",
      "c": "Protrusion",
      "d": "Retraction"
    },
    "correct_answer": "a",
    "explanation": "The muscle marked in the image is the temporalis and its main action is elevation of the mandible. Other actions: It helps in the side-to-side grinding movements of the mandible. The posterior fibres which are horizontal help in the retraction of the mandible."
  },
  {
    "id": "AIIMS_2018_Q17",
    "exam": "AIIMS 2018",
    "question_number": 17,
    "topic": "Back & Vertebral Column",
    "question_text": "Ligamentum flavum has high levels of:",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Type 1 collagen",
      "b": "Type 2 collagen",
      "c": "Reticular fibres",
      "d": "Elastin fibres"
    },
    "correct_answer": "d",
    "explanation": "Ligamentum flavum has high levels of elastin fibres. The ligamenta flava are a series of ligaments that connect the ventral parts of the laminae of adjacent vertebrae. They predominantly contain elastic tissue and form part of the posterior surface of the vertebral canal. The high content of elastin allows it to be stretched by 80% without damage. The ligamentum flava resist separation of the laminae in flexion and assist in extension back to the anatomical position."
  },
  {
    "id": "AIIMS_2018_Q18",
    "exam": "AIIMS 2018",
    "question_number": 18,
    "topic": "Lower Limb",
    "question_text": "Which muscle is not involved in the inversion of foot?",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Tibialis anterior",
      "b": "Tibialis posterior",
      "c": "Peroneus longus",
      "d": "Extensor hallucis longus"
    },
    "correct_answer": "c",
    "explanation": "Peroneus longus muscle is not involved in the inversion of the foot. It causes eversion and plantar flexion. Inversion of the foot is a movement in which the medial border of the foot is elevated so that the sole faces medially. Tibialis anterior causes dorsiflexion and inversion. Tibialis posterior causes plantar flexion and inversion. Extensor hallucis longus causes extension of the great toe, dorsiflexion, and inversion (minimal action). Eversion involves peroneus longus, peroneus brevis, and peroneus tertius. These movements take place mainly at the talocalcaneal and talocalcaneonavicular joints."
  },
  {
    "id": "AIIMS_2018_Q19",
    "exam": "AIIMS 2018",
    "question_number": 19,
    "topic": "Back & Vertebral Column",
    "question_text": "Which of the following is normally seen in lumbar spine?",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Scoliosis",
      "b": "Kyphosis",
      "c": "Lordosis",
      "d": "Recurvatum"
    },
    "correct_answer": "c",
    "explanation": "Lordosis is normally seen in lumbar spine. In adults: The cervical curve is a lordosis (convex forwards), the thoracic curve is a kyphosis (convex dorsally), the lumbar curve is also a lordosis, and the pelvic curve is concave anteroinferiorly."
  },
  {
    "id": "AIIMS_2018_Q20",
    "exam": "AIIMS 2018",
    "question_number": 20,
    "topic": "Histology",
    "question_text": "Type I collagen is not seen in ________.",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Bone",
      "b": "Ligament",
      "c": "Aponeurosis",
      "d": "Elastic cartilage"
    },
    "correct_answer": "d",
    "explanation": "Cartilage is made up of type II collagen. Type I collagen is found in bone, ligament, tendon, and aponeurosis (mnemonic: B-ONE). Type II collagen is found in hyaline and elastic cartilage (Car-Two-Lage). Type III collagen is in reticular tissue (Re-Three-Cular). Type IV collagen is in basement membrane (Floor-Four). There are nearly 28 types of collagen."
  },
  {
    "id": "AIIMS_2018_Q21",
    "exam": "AIIMS 2018",
    "question_number": 21,
    "topic": "Head & Neck",
    "question_text": "The correct pair of lymph node level in the neck and anatomical boundaries amongst the following are:",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Level 3 - Cricoid to clavicle",
      "b": "Level 4 - Hyoid to cricoid",
      "c": "Level 5 - Base of skull to cricoid",
      "d": "Level 6 - Hyoid to clavicle"
    },
    "correct_answer": "d",
    "explanation": "The correct pair of lymph nodes and levels is Level 6 - Hyoid to clavicle. Levels of lymph nodes in neck: Level 1a - Submental, Level 1b - Submandibular, Level 2 - Upper jugular, Level 3 - Middle jugular, Level 4 - Lower jugular, Level 5 - Posterior triangle, Level 6 - Anterior group (Hyoid to clavicle), Level 7 - Mediastinal."
  },
  {
    "id": "AIIMS_2018_Q22",
    "exam": "AIIMS 2018",
    "question_number": 22,
    "topic": "Histology",
    "question_text": "Meissner corpuscles are present in:",
    "has_image": false,
    "image_file": null,
    "image_description": null,
    "options": {
      "a": "Papillary dermis",
      "b": "Reticular dermis",
      "c": "Basal epidermis",
      "d": "Stratum lucidum"
    },
    "correct_answer": "a",
    "explanation": "Meissner corpuscles are present in the papillary dermis. These corpuscles are rapidly adapting mechanoreceptors particularly sensitive to the movement of objects over the skin's surface and low-frequency vibrations. Their acute sensitivity plays a crucial role in tasks such as reading Braille text. It is an elongated encapsulated nerve ending of a large myelinated sensory nerve fiber (type Abeta). Each corpuscle consists of a connective tissue capsule and a central core composed of stacked modified Schwann cells. Meissner's corpuscles are found in nonhairy areas of the skin, especially in fingertips, lips, and other regions where spatial touch perception is highly developed."
  }
];
