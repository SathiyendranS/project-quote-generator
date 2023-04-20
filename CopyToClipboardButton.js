import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import './RandomQuote.css';

function CopyToClipboardButton({ text }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Reset the state after 2 seconds
  };

  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      <button className="c">
        {isCopied ? 'Copied' : 'Copy'}
      </button>
    </CopyToClipboard>
  );
}

export default CopyToClipboardButton;