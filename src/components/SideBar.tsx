import { Button } from "./Button";
import { useState, useEffect } from "react";
import '../styles/sidebar.scss'

interface SideBar {
  id: string;
  name: string;
  title: string;
}

export function SideBar() {
  const [sideBar, setSideBar] = useState<SideBar[]>([]);
  useEffect(() => {
    fetch('http://localhost:3333/genres')
      .then(response => response.json())
      .then(data => setSideBar(data))
  }, []);

  return (
    <section className="sidebar">
      <h1>WatchMe</h1>
      <ul>
        {sideBar.map(film => {
          return <Button film={film.id} />
        })}
      </ul>
    </section>
  );
}