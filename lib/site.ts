export interface Speaker {
  name: string;
  institution: string;
  image: string;
}

export interface LeadershipPerson {
  name: string;
  role: string;
  designation: string;
  image: string;
}

export interface CommitteeMember {
  name: string;
  role: string;
}

export interface Volunteer {
  name: string;
  role: string;
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
  fullTitle: "QUANTUM SPIKE – 2026",
  subtitle: "International Conference on Contemporary Physics, Optics and Emerging Technologies",
  dates: "08–09 October 2026",
  isoStartDate: "2026-10-08T09:30:00+05:30",
  isoEndDate: "2026-10-09T17:30:00+05:30",
  themeQuote: "Exploring Frontiers : From Fundamental Physics to Real-World Technologies",
  motto: "Ideas Today | Innovations Tomorrow",
  pillars: "SCIENCE | COLLABORATION | SOCIETY",
  creatorCredit: "Made & Maintained by Mrinmoy Pal",

  logo: "/images/quantum-spike-logo.jpg",

  funding: {
    agency: "ANUSANDHAN NATIONAL RESEARCH FOUNDATION (ANRF)",
    scheme: "(SERB-DST) Core Research Grant Funded",
    tagline: "Science for A Brighter Tomorrow",
    logo: "/images/anrf-logo.jpg",
  },

  institution: {
    college: "Bankura Sammilani College",
    established: "1948",
    department: "Department of Physics",
    accreditation: "NAAC Accredited B++ (CGPA - 2.97)",
    iqac: "IQAC, Bankura Sammilani College",
    affiliation: "Affiliated to Bankura University",
    address: "Kenduadihi, Bankura, West Bengal - 722102, India",
    campusImage: "/images/venue-college.jpg",
    logo: "/images/college-logo.png",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.834456561141!2d87.06734157589255!3d23.23847770857319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7af4d306b6183%3A0x6b63ca0c6ec6fe3e!2sBankura%20Sammilani%20College!5e0!3m2!1sen!2sin!4v1727521000000!5m2!1sen!2sin",
    mapDirectLink: "https://maps.google.com/?q=Bankura+Sammilani+College",
  },

  deadlines: [
    { label: "Registration Opens", date: "10th September, 2026", active: true },
    { label: "Abstract Submission Deadline", date: "25th September, 2026", active: true },
    { label: "Acceptance Intimation", date: "30th September, 2026", active: true },
    { label: "Registration Closes", date: "05th October, 2026", active: true },
    { label: "Conference Dates", date: "October 08 – 09, 2026", active: true, highlight: true },
  ] as DeadlineItem[],

  registrationOpen: "10th September, 2026",
  registrationClose: "05th October, 2026",
  email: "quantumspike2026@gmail.com",

  links: {
    officialSite: "https://sites.google.com/view/quantum-spike-2026/home",
    registrationForm: "https://forms.gle/zaWp8YDKWejV6tVi9",
    altRegistrationForm: "https://forms.gle/maMGGFNcUTv7ndWf8",
    brochureDrive: "https://drive.google.com/file/d/188MdHMWJyt0rl3WkPwFVOqAWAK3YEUsr/view?usp=sharing",
    brochurePoster: "/conference-brochure.jpg",
  },

  fees: [
    {
      category: "Students",
      amount: "300",
      symbol: "₹",
      description: "Undergraduate and postgraduate students in physical & allied sciences.",
      perks: [
        "Conference delegate kit & official badge",
        "Participation certificate",
        "Access to all keynote & technical sessions",
        "Lunch and refreshments for both days",
      ],
      popular: true,
    },
    {
      category: "PhD / Research Scholar",
      amount: "500",
      symbol: "₹",
      description: "Research scholars and doctoral candidates actively pursuing research.",
      perks: [
        "Oral or poster paper presentation slot",
        "Presentation certificate & abstract publication",
        "Delegate kit & abstract proceeding volume",
        "Direct networking with national & international experts",
        "Lunch and refreshments for both days",
      ],
      popular: false,
    },
    {
      category: "Faculty Members",
      amount: "1000",
      symbol: "₹",
      description: "Faculty members, educators, professors, and scientists.",
      perks: [
        "Full conference kit & official abstract proceedings",
        "Oral presentation & session chairing opportunity",
        "Faculty certificate of participation / presentation",
        "Special High Tea & VIP networking luncheon",
        "Institutional recognition & networking",
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
    note: "After making the payment via UPI QR Code or Bank Transfer, please keep the Transaction ID / Payment Screenshot ready to upload while filling out the Google Form registration.",
  },

  topics: [
    "Ultracold atomic Gases",
    "Quantum Information",
    "Quantum Optics",
    "Condensed Matter Physics",
    "Nanomaterials",
    "Quantum Devices",
    "Nuclear Physics",
    "Optics & Photonics",
    "Fibre Optics",
    "Emerging Technologies",
  ],

  // Exactly as present on the official Google Site without extra fabricated text
  speakers: [
    {
      name: "Prof. Prasanta K. Panigrahi",
      institution: "Siksha 'O' Anusandhan (SoA) University",
      image: "/images/speaker-panigrahi.jpg",
    },
    {
      name: "Dr. Tanmoy Sarkar",
      institution: "National Center for Nuclear Research, Poland",
      image: "/images/speaker-tanmoy.jpg",
    },
    {
      name: "Prof. Utpal Roy",
      institution: "IIT, Patna",
      image: "/images/speaker-utpal.jpg",
    },
    {
      name: "Prof. Ardhendu Shekhar Patra",
      institution: "Sidho Kanho Birsha University",
      image: "/images/speaker-ardhendu.jpg",
    },
    {
      name: "Prof. Ayan Khan",
      institution: "Bennett University",
      image: "/images/speaker-ayan.jpg",
    },
    {
      name: "Dr. Raka Dasgupta",
      institution: "Calcutta University",
      image: "/images/speaker-raka.jpg",
    },
    {
      name: "Dr. Biswajit Sen",
      institution: "VTT College",
      image: "/images/speaker-biswajit.jpg",
    },
    {
      name: "Dr. Nasir Alam",
      institution: "Bankura University",
      image: "/images/speaker-nasir.jpg",
    },
    {
      name: "Dr. Baibaswata Bhattacharjee",
      institution: "Ramananda College",
      image: "/images/speaker-baibaswata.jpg",
    },
  ] as Speaker[],

  people: {
    // Exactly 3 core leaders: Patron, Chairperson, Convenor (Treasurer removed as requested)
    core: [
      {
        name: "Dr. Narugopal Mukherjee",
        designation: "Patron",
        role: "Principal, Bankura Sammilani College",
        image: "/images/patron-narugopal.jpg",
      },
      {
        name: "Dr. Arunava Chattopadhyay",
        designation: "Chairperson",
        role: "Coordinator, IQAC Bankura Sammilani College",
        image: "/images/chairperson-arunava.jpg",
      },
      {
        name: "Dr. Priyam Das",
        designation: "Convenor",
        role: "Assistant Professor, Department of Physics Bankura Sammilani College",
        image: "/images/convenor-priyam.jpg",
      },
    ] as LeadershipPerson[],

    advisory: [
      {
        name: "Prof. Prasanta K. Panigrahi",
        role: "Founding Director, Center for Quantum Science and Technology (CQST) at Siksha 'O' Anusandhan (SOA) University, India",
      },
      {
        name: "Prof. Krishnendu Sengupta",
        role: "Professor, Indian Association for the Cultivation of Science, West Bengal, India",
      },
      {
        name: "Prof. Anirban Pathak",
        role: "Professor, Jaypee Institute of Information Technology, Uttar Pradesh, India",
      },
      {
        name: "Prof. Utpal Roy",
        role: "Professor, Indian Institute of Technology (IIT), Patna, Bihar, India",
      },
      {
        name: "Prof. Ardhendu Shekhar Patra",
        role: "Professor, Sidhu-Kanho Birsha University, West Bengal, India",
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
        role: "Head & Associate Professor",
      },
      {
        name: "Dr. Uttam Mondal",
        role: "Associate Professor",
      },
      {
        name: "Dr. Pradipta Chakraborty",
        role: "State Aided College Teacher",
      },
      {
        name: "Dr. Surajit Bosu",
        role: "State Aided College Teacher",
      },
      {
        name: "Mr. Narendranath Pal",
        role: "State Aided College Teacher",
      },
      {
        name: "Dr. Swapnadip Roy",
        role: "Member, IQAC",
      },
    ] as CommitteeMember[],

    volunteers: [
      { name: "Mrinmoy Pal", role: "Student Volunteer / Web Lead" },
      { name: "Saswata Chakraborty", role: "Student Volunteer" },
      { name: "Arin Ghoshal", role: "Student Volunteer" },
      { name: "Pramit Mukhuti", role: "Student Volunteer" },
    ] as Volunteer[],
  },

  schedule: {
    day1: {
      date: "October 08, 2026",
      title: "Day 1: Inauguration & Sessions",
      items: [
        {
          time: "08:30 AM – 09:30 AM",
          title: "Registration & Welcome Kit Distribution",
          details: "Participant check-in and documentation at the venue desk.",
          badge: "Check-in",
        },
        {
          time: "09:30 AM – 10:30 AM",
          title: "Inaugural Ceremony",
          details: "Lamp lighting, welcome address by Principal Dr. Narugopal Mukherjee and Dignitaries.",
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
          title: "Keynote Session I",
          details: "Invited talks by eminent resource persons on Quantum Information and Optics.",
          badge: "Keynote",
        },
        {
          time: "12:30 PM – 01:30 PM",
          title: "Technical Session I & Oral Presentations",
          details: "Research paper presentations by scholars and interactive discussions.",
          badge: "Oral Presentations",
        },
        {
          time: "01:30 PM – 02:30 PM",
          title: "Conference Lunch & Poster Preview",
          details: "Buffet lunch for all registered participants.",
          badge: "Lunch",
        },
        {
          time: "02:30 PM – 04:00 PM",
          title: "Poster Presentation Session",
          details: "Interactive poster presentations judged by expert jury panel.",
          badge: "Posters",
        },
        {
          time: "04:00 PM – 05:00 PM",
          title: "Interactive Open Forum",
          details: "Discussion on emerging opportunities under India's National Quantum Mission.",
          badge: "Discussion",
        },
      ],
    },
    day2: {
      date: "October 09, 2026",
      title: "Day 2: Advanced Talks & Valedictory",
      items: [
        {
          time: "09:30 AM – 11:00 AM",
          title: "Keynote Session II",
          details: "Advanced lectures on Ultracold Atomic Gases and Emerging Technologies.",
          badge: "Keynote",
        },
        {
          time: "11:00 AM – 11:30 AM",
          title: "Tea Break & Discussion",
          details: "Morning refreshments and technical consultations.",
          badge: "Break",
        },
        {
          time: "11:30 AM – 01:00 PM",
          title: "Technical Session II",
          details: "Specialized sessions on Condensed Matter Physics and Nanomaterials.",
          badge: "Technical",
        },
        {
          time: "01:00 PM – 02:00 PM",
          title: "Conference Lunch",
          details: "Networking lunch at the dining hall.",
          badge: "Lunch",
        },
        {
          time: "02:00 PM – 03:30 PM",
          title: "Young Researchers Session",
          details: "Short oral presentations highlighting innovative student research.",
          badge: "Presentations",
        },
        {
          time: "03:30 PM – 05:00 PM",
          title: "Valedictory & Certificate Distribution",
          details: "Feedback session, distribution of certificates to participants, and concluding remarks.",
          badge: "Valedictory",
        },
      ],
    },
  },

  travel: [
    {
      mode: "By Plane",
      icon: "Plane",
      title: "Durgapur Airport (Kazi Nazrul Islam Airport, RDP)",
      description: "Durgapur Airport (RDP) is the closest airport to Bankura. Dedicated conference pick-ups will be arranged directly from there upon prior intimation.",
      tag: "Conference Pick-ups Arranged",
    },
    {
      mode: "By Train",
      icon: "Train",
      title: "Bankura Railway Station (BQA)",
      description: "Well-connected to Kolkata/Howrah (approx. 200–210 km, taking 4-5 hours). The college is only 3 km away from Bankura station. Durgapur (DGR) is also 50 km away.",
      tag: "3 km from College",
    },
    {
      mode: "By Bus",
      icon: "Bus",
      title: "Express Buses from Kolkata",
      description: "AC and Non-AC buses run frequently from Kolkata (Esplanade/Karunamoyee) to Bankura via Durgapur. The journey covers around 200-220 km and takes roughly 5-6 hours.",
      tag: "Frequent Services",
    },
  ],

  faqs: [
    {
      q: "Who can attend Quantum Spike 2026?",
      a: "Students (UG/PG), PhD/research scholars, faculty members, early-career researchers, and scientists interested in contemporary physics and emerging technologies are welcome.",
    },
    {
      q: "What are the registration dates?",
      a: "Registration opens on 10th September, 2026 and closes on 05th October, 2026.",
    },
    {
      q: "Where is the conference held?",
      a: "The event will be hosted by the Department of Physics, Bankura Sammilani College, Kenduadihi, Bankura, West Bengal - 722102.",
    },
    {
      q: "How do I complete the registration after payment?",
      a: "After paying the registration fee via UPI QR Code or Bank Transfer, save the Transaction ID / receipt screenshot, and submit it on the official Google Form (forms.gle/zaWp8YDKWejV6tVi9).",
    },
    {
      q: "Will certificates and kits be provided?",
      a: "Yes, all registered delegates will receive an official delegate kit, abstract proceedings volume, and signed certificates.",
    },
  ],
} as const;
