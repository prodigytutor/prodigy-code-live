import * as Y from "yjs";
import styles from "./toolbar.module.css";

type Props = {
  yUndoManager: Y.UndoManager;
};

export function Toolbar({ yUndoManager }: Props) {
  return (
    <div className={styles.toolbar}>
      <button className={styles.button} onClick={() => yUndoManager.undo()}>
        Undo
      </button>
      <button className={styles.button} onClick={() => yUndoManager.redo()}>
        Redo
      </button>
    </div>
  );
}