import React from "react";
import styles from "./task-list-table.module.css";
import { Task } from "../../types/public-types";
import ReactTooltip from "react-tooltip";




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
        let Goster = 1;
        if (t.hideChildren === false) {
          expanderSymbol = "▼";
        } else if (t.hideChildren === true) {
          expanderSymbol = "▶";

        }

        let currentTimes = new Date();
        if(currentTimes.getDate().toString() == ('0' + t.end.getDate()).slice(-2)
          && currentTimes.getFullYear() == t.end.getFullYear()
          && ('0' + (t.end.getMonth()+1)).slice(-2) == (currentTimes.getMonth()+1).toString()
      )
        {
           Goster = 0;

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
              <ReactTooltip id={`${t.id}tool`} type='warning' effect='solid'>
                <span>{t.name}</span>
              </ReactTooltip>

              <div className={styles.taskListNameWrapper}>
                   <div
                  className={
                    expanderSymbol
                      ? styles.taskListExpander
                      : styles.taskListEmptyExpander
                  }

                    >
                  {expanderSymbol}
                  </div>
                <div                   className={
                  expanderSymbol
                    ? styles.bold
                    : styles.nobold
                }>       <a data-tip data-for={`${t.id}tool`}  onClick={() => onExpanderClick(t)} >{t.name}</a></div>
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
              Goster==1 &&
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
