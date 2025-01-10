import React, { useState } from "react";
import { CopyToClipboard as CTC } from "react-copy-to-clipboard";
import { MdOutlineContentCopy } from "react-icons/md";

const CopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const textToCopy = "mdtalha2008@gmail.com"; // The text you want to copy

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000); // Reset isCopied after 3 seconds
  };
  return (
    <CTC text={textToCopy} onCopy={handleCopy}>
      <div className="flex pt-4 items-center justify-center">
        <div className="font-mono text-xl font-bold">
          {textToCopy} {isCopied ? "Copied!" : ""}
        </div>
        <div>
          <MdOutlineContentCopy className="pl-2" size="2.3rem" />
        </div>
      </div>
    </CTC>
  );
};

export default CopyToClipboard;
