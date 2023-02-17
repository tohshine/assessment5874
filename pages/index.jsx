import Head from "next/head";
import { Navbar, Footer,Header } from "../component";
import {store} from '../redux/store'
import { Provider } from 'react-redux';

import {
  CaseStudy,
  KindWordFromClient,
  WhatWeAllAboutrd,
  RecentProject,
  WhatWeCapability,
} from "../container";

export default function Home() {
  return (
    <Provider store={store}>
    <div className="">
      <Head>
        <title>5874 Interview</title>
        <meta name="description" content="Single page Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar/> */}
      <Header/>
      <WhatWeCapability/>
      <RecentProject/>
      <CaseStudy/>
      <WhatWeAllAboutrd/>
      <KindWordFromClient/>
      <Footer/>
    </div>
    </Provider>
  );
}
