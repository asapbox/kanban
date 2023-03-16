import { IDateModel } from "models/dateModel";
import { ITaskModel } from "models/taskModel";
import { v4 as uuidv4 } from "uuid";

export function fetchCreationDate(): IDateModel {
  let timeStamp: number = Date.now();
  let dateFormat: Date = new Date(timeStamp);

  return {
    creationDate: dateFormat.toString().slice(4, 15),
    creationDateFull: dateFormat.toString(),
  };
}

export function createUUID() {
  return uuidv4();
}

export function removeTaskById(
  arr: Array<ITaskModel>,
  id: string
): Array<ITaskModel> {
  const index = arr.findIndex((task) => task.id === id);
  if (index > -1) {
    arr.splice(index, 1);
  }

  return arr;
}
