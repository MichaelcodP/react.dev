import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const chemists = people.filter((person) => person.profession === "хімік");
  const everyoneElse = people.filter((person) => person.profession !== "хімік");

  return (
    <article>
      <h1>Науковці</h1>
      <h2>Хіміки</h2>
      <ul>
        {chemists.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + ", "}
              чиєю працею є {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
      <h2>Усі інші</h2>
      <ul>
        {everyoneElse.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + ", "}
              чиєю працею є {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
