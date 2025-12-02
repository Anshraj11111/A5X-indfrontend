import { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";

export default function useTeam() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axiosClient.get("/team")
      .then(res => setTeam(res.data))
      .catch(err => console.log(err));
  }, []);

  return team;
}
