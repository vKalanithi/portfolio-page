import Link from "next/link";
import "./profileDetails.css";
import React from "react";

const ProfileDetails = () => {
  return (
    <div className="profile-container">
      <p>Kalanithi Venkatesh</p>
      <p className="lite role">
        Front-End Developer | React.js | Next.js | JavaScript | TypeScript
      </p>

      <p>About Me</p>
      <p className="lite">
        Passionate front-end developer with around 4 years of experience in
        building responsive web applications. Skilled in React.js, Next.js,
        JavaScript, TypeScript, and modern UI libraries like Tailwind CSS,
        Material UI, and Ant Design.
      </p>

      <p>Expertise:</p>
      <ul className="lite">
        <li>Building mobile-first, high-performance applications.</li>
        <li>Creating intuitive, accessible UI/UX designs.</li>
        <li>Optimizing performance for smooth user experiences.</li>
        <li>Managing complex state with Redux.</li>
      </ul>

      <p className="lite">
        Always eager to learn and collaborate, I thrive in solving UI challenges
        and enhancing user experiences. Let’s connect!
      </p>

      <div className="links lite">
        <Link href={"https://www.linkedin.com/in/kalanithi-v"} target="_blank">
          linkedin
        </Link>
        <Link href={"https://wa.me/919952358134"}>whatsapp</Link>
        <Link href={"https://medium.com/@kalanithi-v"} target="_blank">
          medium
        </Link>
        <Link href={"https://github.com/vKalanithi"} target="_blank">
          github
        </Link>
      </div>
    </div>
  );
};

export default ProfileDetails;
