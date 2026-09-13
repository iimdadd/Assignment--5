import type { Technology } from "../App";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="your-stack">
      <div className="stack-header">
        <div>
          <p className="stack-label">MY COLLECTION</p>
          <h2>Your Stack</h2>
        </div>

        <span className="stack-count">
          {stack.length}
        </span>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">+</div>

          <h3>Your stack is empty</h3>

          <p>
            Add technologies you want to learn or use in your
            projects.
          </p>
        </div>
      ) : (
        <>
          <div className="stack-items">
            {stack.map((technology) => (
              <div
                className="stack-item"
                key={technology.id}
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                />

                <div className="stack-item-info">
                  <h4>{technology.name}</h4>
                  <span>{technology.category}</span>
                </div>

                <button
                  className="remove-button"
                  onClick={() =>
                    onRemove(technology.id)
                  }
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            className="remove-all-button"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default YourStack;