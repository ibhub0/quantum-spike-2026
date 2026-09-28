export interface Speaker {
  name: string;
  institution: string;
  designation?: string;
  topic?: string;
  image: string;
}

export interface LeadershipPerson {
  name: string;
  role: string;
  designation: string;
  image?: string;
  department?: string;
}

export interface CommitteeMember {
  name: string;
  role: string;
  institution?: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  details: string;
  speaker?: string;
  badge?: string;
}

export interface DeadlineItem {
  label: string;
  date: string;
  active?: boolean;
  highlight?: boolean;
}

export const site = {
  name: "Quantum Spike",
  edition: "2026",
  fullTitle: "QUANTUM SPIKE - 2026",
  subtitle: "International Conference on Contemporary Physics, Optics and Emerging Technologies",
  dates: "08–09 October 2026",
  isoStartDate: "2026-10-08T09:30:00+05:30",
  isoEndDate: "2026-10-09T17:30:00+05:30",

  funding: {
    agency: "ANUSANDHAN NATIONAL RESEARCH FOUNDATION (ANRF)",
    scheme: "(SERB-DST) Core Research Grant Funded",
    tagline: "Science for A Brighter Tomorrow",
    grantNotice: "CRG / ANRF Project Sanctioned",
    logo: "/images/anrf-logo.jpg",
  },

  institution: {
    college: "Bankura Sammilani College",
    established: "1948",
    department: "Department of Physics",
    accreditation: "NAAC Accredited B++ (CGPA - 2.97)",
    iqac: "Internal Quality Assurance Cell (IQAC)",
    affiliation: "Affiliated to Bankura University",
    address: "Kenduadihi, Bankura, West Bengal - 722102, India",
    campusImage: "/images/venue-college.jpg",
    logo: "/images/college-logo.jpg",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.834456561141!2d87.06734157589255!3d23.23847770857319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7af4d306b6183%3A0x6b63ca0c6ec6fe3e!2sBankura%20Sammilani%20College!5e0!3m2!1sen!2sin!4v1727521000000!5m2!1sen!2sin",
    mapDirectLink: "https://maps.google.com/?q=Bankura+Sammilani+College",
  },

  deadlines: [
    { label: "Registration Opens", date: "10 September 2026", active: true },
    { label: "Abstract Submission Deadline", date: "25 September 2026", active: true },
    { label: "Acceptance Intimation", date: "30 September 2026", active: true },
    { label: "Registration Closes", date: "05 October 2026", active: true },
    { label: "Conference Dates", date: "08–09 October 2026", active: true, highlight: true },
  ] as DeadlineItem[],

  registrationOpen: "10 September 2026",
  registrationClose: "05 October 2026",
  email: "quantumspike2026@gmail.com",
  logo: "/images/quantum-spike-logo.jpg",
  themeQuote: "Exploring Frontiers : From Fundamental Physics to Real-World Technologies",
  motto: "Ideas Today | Innovations Tomorrow",
  pillars: "SCIENCE | COLLABORATION | SOCIETY",

  links: {
    officialSite: "https://sites.google.com/view/quantum-spike-2026/home",
    registrationForm: "https://forms.gle/zaWp8YDKWejV6tVi9",
    altRegistrationForm: "https://forms.gle/maMGGFNcUTv7ndWf8",
    brochureDrive: "https://drive.google.com/file/d/188MdHMWJyt0rl3WkPwFVOqAWAK3YEUsr/view?usp=sharing",
    brochurePoster: "/conference-brochure.jpg",
  },

  fees: [
    {
      category: "Students (UG / PG)",
      amount: "₹300",
      inr: 300,
      description: "For undergraduate and post-graduate students in physical sciences.",
      perks: [
        "Full conference kit & delegate bag",
        "Participation certificate",
        "Access to all keynote lectures & oral sessions",
        "Lunch & refreshments for both days",
      ],
      popular: true,
    },
    {
      category: "PhD / Research Scholars",
      amount: "₹500",
      inr: 500,
      description: "For active research scholars & doctoral candidates.",
      perks: [
        "Oral or poster presentation slot",
        "Presentation certificate",
        "Conference kit & abstract proceedings",
        "Interactive networking sessions with scientists",
        "Lunch & refreshments for both days",
      ],
      popular: false,
    },
    {
      category: "Faculty Members / Scientists",
      amount: "₹1000",
      inr: 1000,
      description: "For faculty, professors, post-docs, and institutional scientists.",
      perks: [
        "Invited delegate privilege & kit",
        "Oral presentation & chairing consideration",
        "Certificate of participation / presentation",
        "Special High Tea & VIP networking luncheon",
        "Complimentary abstract volume",
      ],
      popular: false,
    },
  ],

  payment: {
    qrImage: "/images/payment-qr.jpg",
    beneficiary: "BANKURA SAMMILANI COLLEGE",
    accountNumber: "21349076603",
    bank: "INDIAN BANK",
    branch: "BANKURA BRANCH",
    ifsc: "IDIB000B624",
    branchCode: "04410",
    upiNote: "Scan the QR code with GPay, PhonePe, Paytm, BHIM or any UPI app. Take a screenshot of the payment receipt with UTR / Transaction Reference ID.",
  },

  topics: [
    {
      title: "Ultracold Atomic Gases",
      desc: "Bose-Einstein Condensation (BEC), optical lattices, Fermi gases, topological states, and quantum superfluidity.",
      icon: "Atom",
    },
    {
      title: "Quantum Information",
      desc: "Quantum algorithms, quantum cryptography (QKD), quantum error correction, and entanglement theory.",
      icon: "Cpu",
    },
    {
      title: "Quantum Optics",
      desc: "Non-classical states of light, cavity quantum electrodynamics, photon entanglement, and quantum metrology.",
      icon: "Sparkles",
    },
    {
      title: "Condensed Matter Physics",
      desc: "Strongly correlated electron systems, high-Tc superconductors, 2D materials, and topological insulators.",
      icon: "Layers",
    },
    {
      title: "Nanomaterials",
      desc: "Synthesis, characterization, functional 2D/3D nanostructures, quantum dots, and green energy applications.",
      icon: "Microscope",
    },
    {
      title: "Quantum Devices",
      desc: "Superconducting circuits, solid-state qubits, single photon detectors, and spintronics architectures.",
      icon: "Zap",
    },
    {
      title: "Nuclear Physics",
      desc: "Nuclear reaction dynamics, nuclear structure, nucleosynthesis, and high-energy physics probes.",
      icon: "Radioactive",
    },
    {
      title: "Optics & Photonics",
      desc: "Nonlinear optics, ultrafast laser spectroscopy, plasmonics, and integrated photonic circuits.",
      icon: "Sun",
    },
    {
      title: "Fibre Optics",
      desc: "Photonic crystal fibers, optical communication systems, distributed optical sensors, and dispersion control.",
      icon: "Activity",
    },
    {
      title: "Emerging Technologies",
      desc: "Quantum sensors, AI & machine learning in physical sciences, sustainable clean energy devices, and quantum materials.",
      icon: "Compass",
    },
  ],

  speakers: [
    {
      name: "Prof. Prasanta K. Panigrahi",
      institution: "Siksha 'O' Anusandhan (SoA) University",
      designation: "Founding Director, Center for Quantum Science and Technology (CQST)",
      topic: "Quantum Information & Optics",
      image: "/images/speaker-panigrahi.jpg",
    },
    {
      name: "Dr. Tanmoy Sarkar",
      institution: "National Center for Nuclear Research, Poland",
      designation: "Assistant Professor",
      topic: "High Energy & Nuclear Physics",
      image: "/images/speaker-tanmoy.jpg",
    },
    {
      name: "Prof. Utpal Roy",
      institution: "Indian Institute of Technology (IIT), Patna",
      designation: "Professor, Department of Physics",
      topic: "Ultracold Atoms & Non-linear Optics",
      image: "/images/speaker-utpal.jpg",
    },
    {
      name: "Prof. Ardhendu Shekhar Patra",
      institution: "Sidho-Kanho-Birsha University (SKBU)",
      designation: "Professor",
      topic: "Condensed Matter Physics",
      image: "/images/speaker-ardhendu.jpg",
    },
    {
      name: "Prof. Ayan Khan",
      institution: "Bennett University",
      designation: "Professor",
      topic: "Quantum Simulation & Devices",
      image: "/images/speaker-ayan.jpg",
    },
    {
      name: "Dr. Raka Dasgupta",
      institution: "Calcutta University",
      designation: "Associate Professor",
      topic: "Quantum Many-Body Physics",
      image: "/images/speaker-raka.jpg",
    },
    {
      name: "Dr. Biswajit Sen",
      institution: "VTT College",
      designation: "Assistant Professor",
      topic: "Optics & Information Dynamics",
      image: "/images/speaker-biswajit.jpg",
    },
    {
      name: "Dr. Nasir Alam",
      institution: "Bankura University",
      designation: "Assistant Professor",
      topic: "Nanomaterials & Emerging Tech",
      image: "/images/speaker-nasir.jpg",
    },
    {
      name: "Dr. Baibaswata Bhattacharjee",
      institution: "Ramananda College",
      designation: "Associate Professor",
      topic: "Photonics & Material Science",
      image: "/images/speaker-baibaswata.jpg",
    },
  ] as Speaker[],

  people: {
    core: [
      {
        name: "Dr. Narugopal Mukherjee",
        designation: "Patron",
        role: "Principal, Bankura Sammilani College",
        image: "/images/patron-narugopal.jpg",
        department: "Administration",
      },
      {
        name: "Dr. Arunava Chattopadhyay",
        designation: "Chairperson",
        role: "Coordinator, IQAC, Bankura Sammilani College",
        image: "/images/chairperson-arunava.jpg",
        department: "IQAC & Department of Chemistry",
      },
      {
        name: "Dr. Priyam Das",
        designation: "Convenor",
        role: "Assistant Professor, Department of Physics, Bankura Sammilani College",
        image: "/images/convenor-priyam.jpg",
        department: "Department of Physics",
      },
      {
        name: "Dr. Pradipta Chakraborty",
        designation: "Treasurer",
        role: "State Aided College Teacher (SACT), Department of Physics",
        department: "Department of Physics",
      },
    ] as LeadershipPerson[],

    advisory: [
      {
        name: "Prof. Prasanta K. Panigrahi",
        role: "Founding Director, Center for Quantum Science and Technology (CQST) at Siksha 'O' Anusandhan (SOA) University, India",
      },
      {
        name: "Prof. Krishnendu Sengupta",
        role: "Professor, Indian Association for the Cultivation of Science (IACS), West Bengal, India",
      },
      {
        name: "Prof. Anirban Pathak",
        role: "Professor, Jaypee Institute of Information Technology (JIIT), Uttar Pradesh, India",
      },
      {
        name: "Prof. Utpal Roy",
        role: "Professor, Indian Institute of Technology (IIT), Patna, Bihar, India",
      },
      {
        name: "Prof. Ardhendu Shekhar Patra",
        role: "Professor, Sidho-Kanho-Birsha University (SKBU), West Bengal, India",
      },
      {
        name: "Prof. Ayan Khan",
        role: "Professor, Bennett University, Uttar Pradesh, India",
      },
      {
        name: "Dr. Tanmay Sarkar",
        role: "Assistant Professor, National Center for Nuclear Research, Poland",
      },
    ] as CommitteeMember[],

    organizing: [
      {
        name: "Dr. Chakradhar Rajowar",
        role: "Head & Associate Professor, Department of Physics",
      },
      {
        name: "Dr. Uttam Mondal",
        role: "Associate Professor, Department of Physics",
      },
      {
        name: "Dr. Pradipta Chakraborty",
        role: "State Aided College Teacher (SACT), Department of Physics",
      },
      {
        name: "Dr. Surajit Bosu",
        role: "State Aided College Teacher (SACT), Department of Physics",
      },
      {
        name: "Mr. Narenranath Pal",
        role: "State Aided College Teacher (SACT), Department of Physics",
      },
      {
        name: "Dr. Swapnadip Roy",
        role: "Member, IQAC, Bankura Sammilani College",
      },
    ] as CommitteeMember[],
  },

  schedule: {
    day1: {
      date: "08 October 2026 (Thursday)",
      title: "Inauguration, Keynote Lectures & Technical Sessions",
      items: [
        {
          time: "08:30 AM – 09:30 AM",
          title: "Registration & Welcome Kit Distribution",
          details: "Delegate reporting, badge verification, kit collection, and welcome breakfast at the Physics Foyer.",
          badge: "Check-in",
        },
        {
          time: "09:30 AM – 10:30 AM",
          title: "Inaugural Ceremony & Lamp Lighting",
          details: "Ceremonial lamp lighting, Welcome address by Principal Dr. Narugopal Mukherjee, IQAC address by Dr. Arunava Chattopadhyay, and conference orientation by Convenor Dr. Priyam Das.",
          badge: "Inaugural",
        },
        {
          time: "10:30 AM – 11:00 AM",
          title: "High Tea & Scientific Networking",
          details: "Informal exchange between delegates, students, and invited resource persons.",
          badge: "Networking",
        },
        {
          time: "11:00 AM – 12:30 PM",
          title: "Keynote Session I: Quantum Foundations & Optics",
          details: "Plenary lectures on quantum information, quantum cryptography, and non-classical light states by invited experts.",
          badge: "Keynote",
        },
        {
          time: "12:30 PM – 01:30 PM",
          title: "Technical Session I: Oral Paper Presentations",
          details: "Contributed research paper presentations by registered PhD scholars and early-career researchers.",
          badge: "Oral",
        },
        {
          time: "01:30 PM – 02:30 PM",
          title: "Conference Lunch & Exhibition",
          details: "Buffet lunch for all registered delegates and poster display preview.",
          badge: "Lunch",
        },
        {
          time: "02:30 PM – 04:00 PM",
          title: "Poster Presentation Session & Evaluation",
          details: "Interactive poster presentations judged by an eminent scientific jury. Best Poster Awards evaluated.",
          badge: "Posters",
        },
        {
          time: "04:00 PM – 05:00 PM",
          title: "Panel Discussion: Opportunities in India’s National Quantum Mission",
          details: "Interactive open forum for students and scholars on careers, funding, and higher research in quantum tech.",
          badge: "Panel",
        },
      ],
    },
    day2: {
      date: "09 October 2026 (Friday)",
      title: "Advanced Frontiers, Emerging Tech & Valedictory",
      items: [
        {
          time: "09:30 AM – 11:00 AM",
          title: "Keynote Session II: Ultracold Atoms & Condensed Matter",
          details: "Lectures on Bose-Einstein Condensation, degenerate quantum gases, topological materials, and quantum devices.",
          badge: "Keynote",
        },
        {
          time: "11:00 AM – 11:30 AM",
          title: "Tea & Discussion Break",
          details: "Morning refreshments in the conference lawn.",
          badge: "Break",
        },
        {
          time: "11:30 AM – 01:00 PM",
          title: "Technical Session II: Nanomaterials, Photonics & Nuclear Physics",
          details: "Contributed research talks spanning nano-scale devices, optical fibers, and nuclear physics.",
          badge: "Oral",
        },
        {
          time: "01:00 PM – 02:00 PM",
          title: "Conference Lunch",
          details: "Networking lunch at the dining hall.",
          badge: "Lunch",
        },
        {
          time: "02:00 PM – 03:30 PM",
          title: "Young Scientist Forum & Rapid Presentations",
          details: "Short oral presentations highlighting innovative student ideas and interdisciplinary research.",
          badge: "Forum",
        },
        {
          time: "03:30 PM – 05:00 PM",
          title: "Valedictory Ceremony, Awards & Certificate Distribution",
          details: "Announcement of Best Oral and Poster Presentation Awards, feedback from delegates, certificate handover, and concluding remarks by the Organizing Committee.",
          badge: "Valedictory",
        },
      ],
    },
  },

  travel: [
    {
      mode: "By Air",
      icon: "Plane",
      title: "Kazi Nazrul Islam Airport (RDP), Durgapur",
      description: "Closest airport to Bankura (~70 km). Recommended airport for national & international delegates. Dedicated conference pick-up shuttles will be scheduled directly from Durgapur Airport upon advance intimation.",
      tag: "Conference Pick-up Arranged",
    },
    {
      mode: "By Train",
      icon: "Train",
      title: "Bankura Railway Station (BQA)",
      description: "Direct, frequent trains from Howrah & Kolkata (e.g. Rupashi Bangla Express, Aranyak Express, Howrah-Purulia Express, taking 4 to 4.5 hours). The college campus is only ~3 km from Bankura station (e-rickshaws and cabs available round-the-clock). Durgapur Junction (DGR) is 50 km away.",
      tag: "3 km from Venue",
    },
    {
      mode: "By Road / Bus",
      icon: "Bus",
      title: "State & Highway Network",
      description: "Frequent deluxe AC and Non-AC express buses run from Kolkata (Esplanade and Karunamoyee terminus) to Bankura via Durgapur Expressway (approx. 200–220 km, 4.5 to 5.5 hours drive).",
      tag: "Frequent Services",
    },
  ],

  faqs: [
    {
      q: "Who is eligible to participate in Quantum Spike 2026?",
      a: "Undergraduate (UG) and Postgraduate (PG) students, PhD scholars, postdoctoral researchers, faculty members, and industry scientists working in Physics, Chemistry, Material Science, Electronics, and allied engineering disciplines are cordially invited.",
    },
    {
      q: "How do I register and pay the registration fee?",
      a: "1) Pay the applicable registration fee via UPI QR code or direct Indian Bank transfer. 2) Save the transaction reference number / screenshot. 3) Fill out the official Google Form with your details and upload the payment proof. You will receive an email confirmation once verified.",
    },
    {
      q: "Can I submit an abstract for oral or poster presentation?",
      a: "Yes! Scholars and faculty wishing to present can submit an abstract (up to 300 words with 1 figure/table) aligned with any of our 10 conference themes. You can specify whether you prefer an Oral Presentation or Poster Presentation in the registration form.",
    },
    {
      q: "Are accommodation and local travel assistance available?",
      a: "Limited accommodation assistance is available in guest houses and nearby partner hotels on a paid, first-come first-served basis. Dedicated pickup shuttles will be coordinated from Durgapur Airport (RDP) and Bankura Railway Station (BQA). Please mention your travel details in advance.",
    },
    {
      q: "Will certificates and kits be provided to all attendees?",
      a: "Yes, all registered delegates will receive a formal delegate kit, abstract proceedings booklet, food passes for both days, and a signed Certificate of Participation or Presentation (as applicable).",
    },
  ],
} as const;
