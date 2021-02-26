import React from "react"
import Home from './home/Home';
import 'katex/dist/katex.min.css';
import { Helmet } from "react-helmet";

export default function HomeIndex() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AJB117</title>
      </Helmet>
      <Home/>
    </>
  )
}
