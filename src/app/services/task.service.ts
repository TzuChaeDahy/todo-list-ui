import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Task from "../models/Task";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiURL: string = "http://localhost:8080/task"
  http: HttpClient = inject(HttpClient)

  retrieveAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL + "/all");
  }

  createTask(title: String): Observable<Task> {
    return this.http.post<Task>(
      this.apiURL + "/new",
      {
        "title": title
      }
    );
  }

  changeStatus(id: string): Observable<Task> {
    return this.http.put<Task>(
      this.apiURL + "/status/" + id,
      null
    );
  }

  removeTask(id: string): Observable<void> {
    return this.http.delete<void>(
      this.apiURL + "/delete/" + id
    )
  }
}
