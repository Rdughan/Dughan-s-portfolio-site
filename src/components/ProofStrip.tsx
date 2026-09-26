import { proofStats } from "../data/content";

export default function ProofStrip() {
  return (
    <div className="proof">
      <div className="wrap proof-grid">
        {proofStats.map((s) => (
          <div key={s.label}>
            <div className="proof-num">{s.num}</div>
            <div className="proof-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
