type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Raghuveer',
    fullName: 'Raghuveer',
    email: 'raghuveer.k24@iiits.in',
  },
  hero: {
    name: 'Raghuveer',
    p: [
      'I engineer robust full-stack web applications,',
      'scalable architectures, and intelligent AI solutions.',
    ],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `Aspiring Software Development Engineer with a strong foundation in Data Structures & Algorithms and a problem-solving mindset shaped through consistent LeetCode practice. Passionate about backend engineering and scalable system design, with a focus on building reliable, high-performance systems under real-world constraints. Interested in distributed systems, API architecture, optimization, and writing clean, production-grade code. Continuously learning to design robust, scalable software that balances efficiency, maintainability, and user impact.`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    works: {
      p: 'My work',
      h2: 'My Work.',
      content: `I build across the full spectrum of software engineering — from production-grade full-stack web applications to intelligent AI & Machine Learning systems. Below are projects that showcase my versatility, problem-solving ability, and passion for building impactful solutions across both domains.`,
    },
  },
};
