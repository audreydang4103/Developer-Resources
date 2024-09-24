import React from 'react';
import CardContainer from './components/CardContainer';
import './App.css';

const resources = [
  {
    title: 'MDN Web Docs',
    type: 'Website Development',
    description: 'Comprehensive resource for HTML, CSS, JavaScript, and more.',
    link: 'https://developer.mozilla.org',
  },
  {
    title: 'The Odin Project',
    type: 'Website Development',
    description: 'A project-based curriculum teaching web development.',
    link: 'https://www.theodinproject.com/',
  },
  {
    title: 'Trending Color',
    type: 'Website Development',
    description: 'Explore the latest popular color schemes for modern web design.',
    link: 'https://coolors.co/palettes/trending',
  },
  {
    title: 'freeCodeCamp',
    type: 'Tutorial',
    description: 'Interactive coding tutorials for web development and programming.',
    link: 'https://www.freecodecamp.org',
  },
  {
    title: 'LeetCode',
    type: 'Interview Preparation',
    description: 'Prepare for technical interviews with coding problems and job boards.',
    link: 'https://leetcode.com',
  },
  {
    title: 'HackerRank',
    type: 'Interview Preparation',
    description: 'Practice coding and prepare for interviews in many programming languages.',
    link: 'https://www.hackerrank.com',
  },
  {
    title: 'NeetCode',
    type: 'Interview Preparation',
    description: 'Provides coding tutorials, solutions, and interview preparation for algorithms and data structures.',
    link: 'https://neetcode.io/practice',
  },
  {
    title: 'InterviewGuide',
    type: 'Interview Preparation',
    description: 'Coding interview preparation with tips, and guides from a senior software engineer at Microsoft.',
    link: 'https://interviewguide.dev/',
  },
  {
    title: 'GitHub',
    type: 'Tool',
    description: 'Host and review code, manage projects, and build software with millions of developers.',
    link: 'https://github.com',
  },
  {
    title: 'Exercism',
    type: 'Coding Practice',
    description: 'Offers coding exercises in over 50 programming languages with mentor feedback',
    link: 'https://exercism.org/',
  },
  {
    title: 'W3Schools',
    type: 'Tutorial',
    description: 'Web developer tutorials on HTML, CSS, JavaScript, PHP, SQL, and more.',
    link: 'https://www.w3schools.com',
    level: 'Beginner',
  },
  {
    title: 'Glassdoor',
    type: 'Job Board',
    description: 'Job listings and company reviews for software engineers and developers.',
    link: 'https://www.glassdoor.com',
  },
];

function App() {
  return (
    <div className="App">
      <h1>Developer Resources</h1>
      <CardContainer resources={resources} />
    </div>
  );
}

export default App;

