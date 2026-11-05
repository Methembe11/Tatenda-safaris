export default function Accordion({ items }) {
  return (
    <div className="faqList">
      {items.map((item) => (
        <details className="faqItem" key={item.question}>
          <summary className="faqSummary">
            {item.question}
            <span className="faqIcon" aria-hidden="true" />
          </summary>
          <div className="faqAnswer">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
