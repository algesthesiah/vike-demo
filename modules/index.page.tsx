export default { Page, onBeforeRender }
// import { Spin } from 'antd'
import React from 'react'
import { navigate } from 'vike/client/router'
import { Counter } from '../components/Counter'
import ClientOnly from '../components/client-only'
// import {Button} from '@nbit/vant';
// import {Button} from 'antd';
// import {Button} from 'react-vant';
function Page() {
  return     <ClientOnly
      component={() => import('../components/demo')}

    />
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