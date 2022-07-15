import React from 'react';
import { BiBookReader } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { IoMdCodeWorking } from 'react-icons/io';
import { IoLogoHtml5 } from 'react-icons/io';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { DiSass } from 'react-icons/di';
import { SiTestinglibrary } from 'react-icons/si';
import { GoLocation } from 'react-icons/go';
import { MdSchool } from 'react-icons/md';
import { MdOutlineLanguage } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { BsPhoneFill } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const [num, unit] = handleExperience();

const myData = {
  exp: {
    num: num,
    unit: unit,
    icon: <BiBookReader className="info-icon" />,
  },
  clients: {
    num: 0,
    icon: <FiUsers className="info-icon" />,
  },
  skills: [
    {
      name: 'Html 5',
      lvl: 'Intermediate',
      percentage: 75,
      icon: <IoLogoHtml5 className="info-icon" data-testid="skill-icon" />,
    },
    {
      name: 'Css 3',
      lvl: 'Intermediate',
      percentage: 70,
      icon: <IoLogoCss3 className="info-icon" data-testid="skill-icon" />,
    },
    {
      name: 'Sass',
      lvl: 'Beginner',
      percentage: 65,
      icon: <DiSass className="info-icon" data-testid="skill-icon" />,
    },
    {
      name: 'Javascript',
      lvl: 'Intermediate',
      percentage: 75,
      icon: <SiJavascript className="info-icon" data-testid="skill-icon" />,
    },
    {
      name: 'React',
      lvl: 'Intermediate',
      percentage: 70,
      icon: <FaReact className="info-icon" data-testid="skill-icon" />,
    },
    {
      name: 'React Testing Library',
      lvl: 'Beginner',
      percentage: 65,
      icon: <SiTestinglibrary className="info-icon" data-testid="skill-icon" />,
    },
  ],
  projects: {
    icon: <IoMdCodeWorking className="info-icon" />,
    array: [
      {
        id: 'p1',
        title: 'Blackjack',
        liveDeom: 'https://deiahamad.github.io/Project-1-BlackJack/',
        github: 'https://github.com/DeiaHamad/Project-1-BlackJack',
        technology: [
          {
            lang: 'Html',
            icon: <IoLogoHtml5 className="project-icon" />,
            codeLines: 92,
          },
          {
            lang: 'Css',
            icon: <IoLogoCss3 className="project-icon" />,
            codeLines: 261,
          },
          {
            lang: 'Javascript',
            icon: <SiJavascript className="project-icon" />,
            codeLines: 507,
          },
        ],
        startingDate: 'Mar 27, 2022',
        finishingDate: 'Apr 2, 2022',
        duration: handleProjects('Mar 27, 2022', 'Apr 2, 2022'),
      },
      {
        id: 'p2',
        title: 'Chrome Extension',
        github:
          'https://github.com/DeiaHamad/Project-2-Chrome-Save-Url-Extension',
        technology: [
          {
            lang: 'Html',
            icon: <IoLogoHtml5 className="project-icon" />,
            codeLines: 21,
          },
          {
            lang: 'Css',
            icon: <IoLogoCss3 className="project-icon" />,
            codeLines: 68,
          },
          {
            lang: 'Javascript',
            icon: <SiJavascript className="project-icon" />,
            codeLines: 80,
          },
        ],
        startingDate: 'Apr 2, 2022',
        finishingDate: 'Apr 3, 2022',
        duration: handleProjects('Apr 2, 2022', 'Apr 3, 2022'),
      },
      {
        id: 'p3',
        title: 'CourseTube-V1',
        liveDeom: 'https://deiahamad.github.io/Project-3-CourseTube-Version-1/',
        github: 'https://github.com/DeiaHamad/Project-3-CourseTube-Version-1',
        technology: [
          {
            lang: 'Html',
            icon: <IoLogoHtml5 className="project-icon" />,
            codeLines: 196,
          },
          {
            lang: 'Css',
            icon: <IoLogoCss3 className="project-icon" />,
            codeLines: 780,
          },
          {
            lang: 'Javascript',
            icon: <SiJavascript className="project-icon" />,
            codeLines: 604,
          },
        ],
        startingDate: 'Apr 9, 2022',
        finishingDate: 'Apr 16, 2022',
        duration: handleProjects('Apr 9, 2022', 'Apr 16, 2022'),
      },
      {
        id: 'p4',
        title: 'CourseTube-V2',
        liveDeom: 'https://deiahamad.github.io/Project-4-CourseTube-Version-2/',
        github: 'https://github.com/DeiaHamad/Project-4-CourseTube-Version-2',
        technology: [
          {
            lang: 'Html',
            icon: <IoLogoHtml5 className="project-icon" />,
            codeLines: 20,
          },
          {
            lang: 'Sass',
            icon: <DiSass className="project-icon" />,
            codeLines: 1134,
          },
          {
            lang: 'React',
            icon: <FaReact className="project-icon" />,
            codeLines: 2678,
          },
          {
            lang: 'Test',
            icon: <SiTestinglibrary className="project-icon" />,
            codeLines: 3304,
          },
        ],
        startingDate: 'May 5, 2022',
        finishingDate: 'June 19, 2022',
        duration: handleProjects('May 5, 2022', 'June 19, 2022'),
      },
      {
        id: 'p5',
        title: 'Portfolio',
        github: 'https://github.com/DeiaHamad/Project-5-Portfolio-Version-1/',
        technology: [
          {
            lang: 'Html',
            icon: <IoLogoHtml5 className="project-icon" />,
            codeLines: 16,
          },
          {
            lang: 'Sass',
            icon: <DiSass className="project-icon" />,
            codeLines: 1205,
          },
          {
            lang: 'React',
            icon: <FaReact className="project-icon" />,
            codeLines: 1257,
          },
          {
            lang: 'Test',
            icon: <SiTestinglibrary className="project-icon" />,
            codeLines: 1076,
          },
        ],
        startingDate: 'June 28, 2022',
        finishingDate: 'July 5, 2022',
        duration: handleProjects('June 28, 2022', 'July 5, 2022'),
      },
    ],
  },
  jobs: [
    {
      id: 'j1',
      jobTitle: 'Sales',
      company: 'Mg Group',
      startDate: 'Oct / 2012',
      endDate: 'Dec / 2012',
      description: 'Tele-Sales & Outdoor Sales.',
      country: 'Egypt',
    },
    {
      id: 'j2',
      jobTitle: 'Technical Support',
      company: 'TE Data',
      startDate: '2013',
      endDate: '2016',
      description: 'Internet technical support by phone.',
      country: 'Egypt',
    },
    {
      id: 'j3',
      jobTitle: 'Customer Service (Enterprise)',
      company: 'Vodafone UK',
      startDate: 'Dec / 2016',
      endDate: 'Jan / 2017',
      description: 'Internet technical support by phone (British Customers).',
      country: 'Egypt',
    },
    {
      id: 'j4',
      jobTitle: 'Foreman',
      company: 'Nazih Blacksmith & Welding Workshop',
      startDate: '2017',
      endDate: '2018',
      description:
        'Managing the work and ensuring delivery on time with good quality.',
      country: 'UAE',
    },
    {
      id: 'j5',
      jobTitle: 'Safety Engineer',
      company: 'ICAD Residential City',
      startDate: '2018',
      endDate: '2019',
      description: 'Handling the safety issues regarding the workers/shops.',
      country: 'UAE',
    },
    {
      id: 'j6',
      jobTitle: 'Designer',
      company: 'Nazih Blacksmith & Welding Workshop',
      startDate: '2019',
      endDate: 'now',
      description:
        'Provide an Autocad designs (2D & 3D) and manging the work regarding the quality and time.',
      country: 'UAE',
    },
  ],
  contacts: {
    details: [
      {
        id: 'location',
        icon: <GoLocation className="contact-icon" />,
        title: 'Location:',
        text: 'Abu Dhabi - United Arab Emirates',
      },
      {
        id: 'education',
        icon: <MdSchool className="contact-icon" />,
        title: 'Education:',
        text: 'Institute of Aviation Engineering & Technology - Egypt',
      },
      {
        id: 'language',
        icon: <MdOutlineLanguage className="contact-icon" />,
        title: 'Language:',
        text: 'English, Arabic',
      },
      {
        id: 'email',
        icon: <MdEmail className="contact-icon" />,
        title: 'Email:',
        text: 'EngDeiaaEldin@gmail.com',
      },
      {
        id: 'phoneNumber',
        icon: <BsPhoneFill className="contact-icon" />,
        title: 'Phone Number:',
        text: '+97150 789 0072',
      },
    ],
    socialMedia: [
      {
        id: 'linkedin',
        link: 'https://www.linkedin.com/in/deia-hamad-577a1814a/',
        icon: (
          <AiFillLinkedin className="media-icon" data-testid="linkedin-icon" />
        ),
      },
      {
        id: 'github',
        link: 'https://www.github.com/DeiaHamad',
        icon: <AiFillGithub className="media-icon" data-testid="github-icon" />,
      },
    ],
  },
};

function handleExperience() {
  let unit;
  let num;

  function convertDateForIos(date) {
    let arr = date.split(/[- :]/);
    date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
    return date;
  }

  const startingDate = convertDateForIos('2021-11-1 00:00:00').getTime();
  const currentDate = new Date().getTime();

  const expInMonths = Math.floor(
    (currentDate - startingDate) / 1000 / 30 / 60 / 60 / 24
  );

  if (expInMonths > 12) {
    const expInYears = expInMonths / 12;
    num = Math.ceil(expInYears);
    if (expInYears < 2) {
      unit = 'Year';
    } else {
      unit = 'Years';
    }
  } else {
    num = expInMonths;
    unit = 'Months';
  }

  return [num, unit];
}

function handleProjects(startingDate, finishingDate) {
  const date1 = new Date(startingDate);
  const date2 = new Date(finishingDate);
  return (date2 - date1) / (1000 * 60 * 60 * 24);
}

export default myData;
