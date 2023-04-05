import React, { PropsWithChildren } from "react";

function MarkdownPage({children}: PropsWithChildren): JSX.Element {
  return (
    <div className="p-2 max-w-3xl mx-auto [&>img]:mb-4">
      {children}
    </div>
  );
};

export default MarkdownPage;
