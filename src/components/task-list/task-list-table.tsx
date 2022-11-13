import React from "react";
import styles from "./task-list-table.module.css";
import { Task } from "../../types/public-types";




export const TaskListTableDefault: React.FC<{
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  tasks: Task[];
  selectedTaskId: string;
  setSelectedTask: (taskId: string) => void;
  onExpanderClick: (task: Task) => void;
}> = ({
  rowHeight,
  rowWidth,
  tasks,
  fontFamily,
  fontSize,
  onExpanderClick,
}) => {

  return (
    <div
      className={styles.taskListWrapper}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      {tasks.map(t => {
        let expanderSymbol = "";
        if (t.hideChildren === false) {
          expanderSymbol = "▼";
        } else if (t.hideChildren === true) {
          expanderSymbol = "▶";
        }

        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        return (
          <div
            className={styles.taskListTableRow}
            style={{ height: rowHeight }}
            key={`${t.id}row`}
          >
            <div
              className={styles.taskListCell}
              style={{
                minWidth: rowWidth,
                maxWidth: rowWidth,
              }}
              title={t.name}
            >
              <div className={styles.taskListNameWrapper}>
                <div
                  className={
                    expanderSymbol
                      ? styles.taskListExpander
                      : styles.taskListEmptyExpander
                  }
                  onClick={() => onExpanderClick(t)}
                >
                  {expanderSymbol}
                </div>
                <div>{t.name}</div>
              </div>
            </div>
            <div
              className={styles.taskListCell}
              style={{
                minWidth: '100px',
                maxWidth: '100px',
              }}
            >
              &nbsp;{
              ('0' + t.start.getDate()).slice(-2) + '.'
              + ('0' + (t.start.getMonth()+1)).slice(-2) + '.'
              + t.start.getFullYear()
            }
            </div>
            <div
              className={styles.taskListCell}
              style={{
                minWidth: '100px',
                maxWidth: '100px',
              }}
            >
              &nbsp;{
              ('0' + t.end.getDate()).slice(-2) + '.'
              + ('0' + (t.end.getMonth()+1)).slice(-2) + '.'
              + t.end.getFullYear()
            }</div>
          </div>
        );
      })}
    </div>
  );
};
