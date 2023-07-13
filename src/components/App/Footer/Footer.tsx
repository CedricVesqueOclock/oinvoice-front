import React from "react";

interface FooterProps {
  likes: number;
  setLikes: React.Dispatch<React.SetStateAction<number>>;
}

function Footer() {
  console.log('FOOTER > render');

  return (
    <footer>
      <h2>Footer</h2>
      {/* <button type="button" onClick={() => setLikes(likes + 1)}>
        Likes : {likes}
      </button> */}
    </footer>
  );
}

export default Footer;