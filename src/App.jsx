import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import All from "./components/All";
import FullStack from "./components/FullStack";
import Career from "./components/Career";
import CyberSecurity from "./components/CyberSecurity";
import DataScience from "./components/DataScience";
import Navbar from "./components/Navbar";

function App() {
  let data = [
    {
      image:
        "https://img.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_575670-1159.jpg?w=996&t=st=1708007736~exp=1708008336~hmac=d397ac4a8c57cdeda5cd1694c7ff82d4172babd05a0da3e187aea7aba024670e",
      field: "fullstack",
      content:
        "Join a vibrant community of learners and professionals passionate about web development. Network with industry experts and stay updated with the latest trends.",
      date: "15",
      month: "September",
    },
    {
      image:
        "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-2519.jpg?w=740&t=st=1708017294~exp=1708017894~hmac=b74cd955224188125f059a5da6a30905f4ba4672261dc7aea7afe65437e5f2a7",
      field: "dataScience",
      content:
        "Learn advanced topics such as deep learning, natural language processing, and computer vision. Build and deploy machine learning models in production environments.",
      date: "20",
      month: "May",
    },
    {
      image:
        "https://img.freepik.com/free-vector/hacker-activity-concept-with-man_23-2148526847.jpg?w=740&t=st=1708017926~exp=1708018526~hmac=dbb85001346372bddefcfe11923ea5d5dddf63e7a1825db61da17813c90bb6da",
      field: "cybersecurity",
      content:
        "Learn about common cyber threats and attacks such as malware, phishing, and social engineering. Understand how to detect and respond to security incidents.",
      date: "10",
      month: "March",
    },

    {
      image:
        "https://img.freepik.com/free-vector/illustration-data-analysis-graph_53876-18131.jpg?w=740&t=st=1708018199~exp=1708018799~hmac=fda63cf11d6e821ebd047f45ffd07f07f384d433c0a02584d55622dfaed2a468",
      field: "dataScience",
      content:
        "Receive mentorship and guidance from industry experts. Get support with building a strong portfolio and preparing for data science job interviews.",
      date: "5",
      month: "July",
    },
    {
      image:
        "https://img.freepik.com/free-vector/privacy-engineer-laptop-with-shield-improving-level-systems-privacy-privacy-engineering-privacy-centric-model-personal-data-defence-concept_335657-2426.jpg?w=740&t=st=1708017968~exp=1708018568~hmac=ea0657dd521af33d075219730d432404268b404feafb76509f2c4700358c8722",
      field: "Cyber Security",
      content:
        "Explore techniques for securing computer systems and networks, including access controls, firewalls, intrusion detection systems, and VPNs.",
      date: "15",
      month: "April",
    },
    {
      image:
        "https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-250.jpg?w=996&t=st=1708007630~exp=1708008230~hmac=6e0d783f311fc5868e58db669ec02768b3fe4a214842fad3901566bef8c15436",
      field: "fullstack",
      content:
        "Explore modern development tools and methodologies including version control with Git, Agile and Scrum methodologies, continuous integration, and automated testing.",
      date: "20",
      month: "May",
    },
    {
      image:
        "https://img.freepik.com/free-vector/goal-achievement-career-promotion-school-graduation-educational-trajectory-educational-capital-strategy-determine-your-educational-way-concept-pinkish-coral-bluevector-isolated-illustration_335657-1255.jpg?w=740&t=st=1708018606~exp=1708019206~hmac=482debc737ee825d59128acfd5815b2857a280ba119eb3fe6a879e009d5b2400",
      field: "career",
      content:
        "Acquire digital literacy skills and stay updated with emerging technologies relevant to your field of interest.",
      date: "20",
      month: "May",
    },
    {
      image:
        "https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4766.jpg?w=740&t=st=1708018264~exp=1708018864~hmac=9dab0ac9a26552a4759135803bfb96f5ea3ca22385ab6c3801f286abeae6262d",
      field: "dataScience",
      content:
        "Master statistical analysis techniques such as hypothesis testing, regression analysis, and machine learning algorithms. Apply these techniques to real-world datasets.",
      date: "10",
      month: "March",
    },
    {
      image:
        "https://img.freepik.com/free-vector/professional-programmers-configuring-software-colorful-flat-illustration_1284-60230.jpg?w=360&t=st=1708008654~exp=1708009254~hmac=b23d42d261d75b54c1a65e9e9953368d7cfe7864b80a64022a6d3c579c6b9e2c",
      field: "fullstack",
      content:
        "Work on real-world projects and collaborate with peers in a hands-on learning environment. Build a comprehensive portfolio showcasing your skills and projects.",
      date: "5",
      month: "July",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/programmer-analyzing-data-with-laptop_18660-884.jpg?w=360",
      field: "dataScience",
      content:
        "Explore data manipulation and transformation methods, including data preprocessing, feature engineering, and dimensionality reduction techniques.",
      date: "15",
      month: "April",
    },
    {
      image:
        "https://img.freepik.com/free-vector/businessmen-work-with-laptops-graph-columns-business-hierarchy-hierarchical-organization-levels-hierarchy-concept-white-background_335657-2031.jpg?w=740&t=st=1708018735~exp=1708019335~hmac=eba717b8859c358d130077c67512d9891f2e780b0f4d0af33f44372718115cea",
      field: "career",
      content:
        "Receive personalized career coaching and guidance from industry professionals. Get support with setting career goals and creating a career development plan.",
      date: "25",
      month: "June",
    },
    {
      image:
        "https://img.freepik.com/free-vector/businessman-jumps-graph-columns-way-success-positive-thinking-success-achievement-self-confidence-concept_335657-266.jpg?w=740&t=st=1708017666~exp=1708018266~hmac=af4f106a236e39003de0014320d9dcf09ba9056991176dfe126fad5384511d96",
      field: "career",
      content:
        "Access resources and tools for continuous learning and professional growth, including online courses, webinars, and industry conferences.",
      date: "5",
      month: "July",
    },
    {
      image:
        "https://img.freepik.com/free-vector/progress-concept-illustration_114360-1522.jpg?w=740&t=st=1708017620~exp=1708018220~hmac=1504ce7de3b32b8932bfd7fd8ad9d0ba8730085a93254ce90f15eccd532fbc55",
      field: "career",
      content:
        "Enhance your leadership and management abilities, including conflict resolution, time management, and decision-making skills.",
      date: "15",
      month: "April",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/analyzing-business-using-laptop-concept-trending-flat-illustration_720185-173.jpg?w=360",
      field: "dataScience",
      content:
        "Gain practical experience through hands-on projects and case studies. Work with real-world datasets to solve business problems and make data-driven decisions.",
      date: "25",
      month: "June",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/programming-courses-web-design-concept-with-people-characters-illustration_9209-4586.jpg?w=740",
      field: "fullstack",
      content:
        "Specialize in areas such as web security, performance optimization, responsive design, and cross-platform compatibility to create robust and user-friendly web applications.",
      date: "25",
      month: "June",
    },
    {
      image:
        "https://img.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1438.jpg?w=740&t=st=1708018478~exp=1708019078~hmac=51306856ea64540287fef9631fe3dcbb621d5198c093877c5042fdf5601934d6",
      field: "dataScience",
      content:
        "Learn the fundamentals of data analysis, including data cleaning, exploration, and visualization. Gain proficiency in Python and R programming languages.",
      date: "5",
      month: "February",
    },
    {
      image:
        "https://img.freepik.com/free-vector/business-people-working-laptop-development_1262-18907.jpg?w=360&t=st=1708019178~exp=1708019778~hmac=0d6635624de16182fd84b7951897c192be5e226c124063926b4795bbabd03602",
      field: "fullstack",
      content:
        "Prepare for a successful career as a full-stack developer with comprehensive hands-on training and practical experience. Launch your career in tech!",
      date: "20",
      month: "October",
    },
    {
      image:
        "https://img.freepik.com/free-vector/flat-safer-internet-day-background_23-2151163157.jpg?w=740&t=st=1708018062~exp=1708018662~hmac=e9ffced3a5f69a2a0fa9476707880b1a513f0b1aaaccec487547c48aa28fa30f",
      field: "Cyber Security",
      content:
        "Get hands-on experience with cybersecurity tools and technologies. Work on lab exercises and simulations to reinforce learning and practical skills.",
      date: "25",
      month: "June",
    },
    {
      image:
        "https://img.freepik.com/free-vector/data-protection-law-illustration-concept_114360-971.jpg?w=740&t=st=1708017836~exp=1708018436~hmac=8013af7fb221f9d58f19fc4ae802e51f970f4d1fceb0121b49f8ec59afc7f89b",
      field: "Cyber Security",
      content:
        "Gain foundational knowledge in cybersecurity principles, including risk management, cryptography, and network security protocols.",
      date: "5",
      month: "February",
    },
    {
      image:
        "https://img.freepik.com/free-vector/businessmen-work-with-laptops-graph-columns-business-hierarchy-hierarchical-organization-levels-hierarchy-concept-white-background_335657-2031.jpg?w=740&t=st=1708018735~exp=1708019335~hmac=eba717b8859c358d130077c67512d9891f2e780b0f4d0af33f44372718115cea",
      field: "career",
      content:
        "Develop effective communication and interpersonal skills necessary for professional success, including networking and public speaking.",
      date: "10",
      month: "March",
    },
    {
      image:
        "https://img.freepik.com/free-vector/flat-safer-internet-day-background_52683-154505.jpg?w=1380&t=st=1708029710~exp=1708030310~hmac=ac1907a1e8e82faa60f3fcc62327861bf6bfdccb2a5c76b583a3f995d7792c74",
      field: "Cyber Security",
      content:
        "Master ethical hacking techniques and tools to identify vulnerabilities and weaknesses in systems. Learn how to conduct penetration tests and security audits.",
      date: "20",
      month: "May",
    },
    {
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_52683-84602.jpg?w=360&t=st=1708018937~exp=1708019537~hmac=6f97b32c82e1bf4d9ced9c40ddde9917e4fbe9c8b846b888c1a2c0cc4a09806a",
      field: "dataScience",
      content:
        "Receive mentorship and guidance from industry experts. Get support with building a strong portfolio and preparing for data science job interviews.",
      date: "5",
      month: "July",
    },
    {
      image:
        "https://img.freepik.com/free-vector/engineer-developer-with-laptop-tablet-code-cross-platform-development-cross-platform-operating-systems-software-environments-concept-pinkish-coral-bluevector-isolated-illustration_335657-2524.jpg?w=740&t=st=1708022723~exp=1708023323~hmac=dd057ff14d35512c61c35c066e353154ba87860fda3a252fb4f61b9fdc71f2ec",
      field: "fullstack",
      content:
        "Master both frontend and backend technologies including HTML, CSS, JavaScript, Node.js, React, and more. Learn to build dynamic web applications from scratch.",
      date: "5",
      month: "February",
    },
    {
      image:
        "https://img.freepik.com/free-vector/safe-concept-illustration_114360-5200.jpg?w=740&t=st=1708018097~exp=1708018697~hmac=b6f51e079d96b25f554150eb10d635f0048331e96d027abbd005419143c4fcea",
      field: "Cyber Security",
      content:
        "Explore techniques for securing computer systems and networks, including access controls, firewalls, intrusion detection systems, and VPNs.",
      date: "15",
      month: "April",
    },
    {
      image:
        "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=996&t=st=1708007534~exp=1708008134~hmac=74159ff13dad2ad0a1b8048859e56785bf97feb851685cf112819df482ac5010",
      field: "fullstack",
      content:
        "Learn advanced concepts like RESTful APIs, authentication and authorization, deployment strategies, and cloud technologies like AWS, Azure, or Google Cloud Platform.",
      date: "15",
      month: "April",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/upskilling-learn-as-work-educational-qualification-rise-tiny-person-concept-mentorship-upskills_166005-1004.jpg?w=740",
      field: "career",
      content:
        "Learn essential skills for career advancement, including resume writing, job search strategies, and interview preparation.",
      date: "5",
      month: "February",
    },
    {
      image:
        "https://img.freepik.com/free-vector/programmer-working-with-css_52683-24172.jpg?w=996&t=st=1708007481~exp=1708008081~hmac=b3f78c497fc8bfebc104343a086c39f7c9880b6772f745dbb2b9d8bcd937cc58",
      field: "fullstack",
      content:
        "Receive personalized mentorship and guidance from experienced industry professionals. Get support with resume building, interview preparation, and career guidance.",
      date: "10",
      month: "August",
    },
  ];

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/fullstack" element={<FullStack data={data} />} />
          <Route path="/career" element={<Career data={data} />} />
          <Route
            path="/cybersecurity"
            element={<CyberSecurity data={data} />}
          />
          <Route path="/datascience" element={<DataScience data={data} />} />
          <Route path="/" element={<All data={data} />} />å
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
