import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`wordmark ${className}`.trim()}
      aria-label="Tatenda Safaris home"
    >
      <span className="wordmarkName">Tatenda</span>
      <span className="wordmarkSub">Safaris</span>
    </Link>
  );
}
