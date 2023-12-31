export default { Page, onBeforeRender }
// import { Spin } from 'antd'
import { Spin } from '@arco-design/web-react'
import React from 'react'
import { navigate } from 'vike/client/router'
import { Counter } from '../components/Counter'
// import {Button} from '@nbit/vant';
// import {Button} from 'antd';
// import {Button} from 'react-vant';
function Page() {
  return (
    <>
      <h1>
        Welcome to <code>vite-plugin-ssr</code>
      </h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <p>
        {/* <Button type="primary">Primary</Button> */}
        <Spin></Spin>
        <button
          onClick={() => {
            const randomIndex = Math.floor(Math.random() * 3)
            const url = ['/markdown', '/star-wars', '/hello/alice'][randomIndex]
            navigate(url, { keepScrollPosition: true })
          }}
        >
          Random Page
        </button>
      </p>
    </>
  )
}
async function onBeforeRender(pageContext) {
  const pageProps = {}
  const layoutParams = {}
  return {
    pageContext: {
      // unAuthTo: '/login?redirect=/',
      // authTo: '/messenger',
      pageProps,
      layoutParams
    }
  }
}