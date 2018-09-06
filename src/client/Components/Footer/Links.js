import React from 'react';

import { NavLink } from './Components';

const links = {
  linkedin: 'https://www.linkedin.com/in/kristiansakarisson/',
  github: 'https://github.com/sakarisson',
  twitter: 'https://twitter.com/KSakarisson',
};

const Links = () => {
  const navLinks = [];
  const keys = Object.keys(links);
  keys.forEach((key) => {
    navLinks.push(<NavLink href={links[key]} key={key}>{key}</NavLink>);
    navLinks.push(' | ');
  });
  navLinks.pop();
  return navLinks;
};

export default Links;
