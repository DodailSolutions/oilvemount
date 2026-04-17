"use client";

import React from "react";

interface ApplyButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function ApplyButton({ className, children }: ApplyButtonProps) {
  const open = () =>
    window.dispatchEvent(new Event("openAdmissionModal"));
  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}
