"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Repository = {
  id: number;
  name: string;
  url: string;
  description: string;
}

const RepositoriesPage = () => {
  const URLS = {
    GITHUB: 'https://api.github.com/users/nortonx/repos',
    // REQRES: 'https://reqres.in/api',
  }
  
  const [repositories, setRepositories] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);

  // for repositories
  useEffect(() => {
    fetch(`${URLS.GITHUB}`)
      .then(response => response.json())
      .then(data => data.sort())
      .then(setRepositories)
      .catch(error => console.error(error));
      console.log("Repos:", repositories);
  }, []);

  // for fake users api:
  // useEffect(() => {
  //   fetch(`${URLS.REQRES}/users`)
  //     .then(response => response.json())
  //     .then(response => setUsers(response.data))
  //     .catch(error => console.error(error))
  //     console.log("users:", users);
  // }, []);

  return(
    <main className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        Repositories page
        <ul>
          { repositories.map( (repo: Repository) => {
            return(
              <li key={repo.id}>
                <Link href={repo.url}>
                  {repo.url}
                </Link>
                <p>{repo.description}</p>
              </li>
            )
          })}
          {/* { users && users.map( (user: any) => {
            return(
              <li key={user.id}>
                <p>{user.last_name}</p>
                <p>{user.email}</p>
                <Image 
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  width="200"
                  height="200"
                  priority
                />
              </li>
            )
          })} */}
        </ul>
      </div>
    </main>
  )
}

export default RepositoriesPage;