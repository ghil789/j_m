import { getSession } from "next-auth/client";
import Head from "next/head";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";


export default function Home({ session, posts }) {
  if (!session) return <Login/>;

  return (
   
    <div className="h-screen bg-blue-100 overflow-hidden">
      <Head>
        <title>J-media</title>
      </Head>

      <Header />

      <main className="flex">

        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
 
    </div>
  );
}

