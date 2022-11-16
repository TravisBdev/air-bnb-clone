export default function Card() {
  return (
    <div className="card">
      <img
        className="card-img"
        src="src\assets\swimmer.png"
        alt="olympic swimmer smiling"
      />
      <span>
        <img className="card-star" src="src\assets\star.png" alt="red star" />
        5.0 (6) • USA
      </span>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <strong>From $136</strong> / person
      </p>
    </div>
  );
}
