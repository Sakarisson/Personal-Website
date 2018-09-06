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
  keys.forEach((key, index) => {
    navLinks.push(<NavLink href={links[key]} key={key}>{key}</NavLink>);
    if (index < keys.length - 1) {
      navLinks.push(' | ');
    }
  });
  return navLinks;
};

export default Links;
