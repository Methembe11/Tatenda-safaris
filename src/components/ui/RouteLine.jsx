export default function RouteLine({ stops, label = "Journey route" }) {
  return (
    <ol className="routeLine" aria-label={label}>
      {stops.map((stop, index) => (
        <li className="routeStop" key={stop}>
          <span className="routeStopNum">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="routeStopLabel">{stop}</span>
        </li>
      ))}
    </ol>
  );
}
