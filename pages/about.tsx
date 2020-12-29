import Link from 'next/link';
import React from 'react';

class Content extends React.Component {
  render = () => {
    return (
      <div>
        <h3>This is about page.</h3>
        <Link href="/">
          <a>back to home page.</a>
        </Link>
      </div>
    );
  };
}

export default Content;
