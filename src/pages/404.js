import React from 'react'
import Layout from '../components/layout'
import { Card } from '../style/elements'

const NotFoundPage = () => (
  <Layout>
    <Card>
      <h1>Oops</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Card>
  </Layout>
)

export default NotFoundPage
