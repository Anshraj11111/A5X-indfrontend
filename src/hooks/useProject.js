import { useState, useEffect } from "react";
import axiosClient from "../utils/axiosClient";

export default function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axiosClient.get("/content/projects")
      .then(res => setProjects(res.data.projects || []))
      .catch(err => console.log(err));
  }, []);

  return projects;
}
