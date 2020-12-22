import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="flex rounded-lg p-24 justify-center">
        <img
          className="h-24 w-24 rounded-full mx-0 mr-5"
          src="/images/profile.jpg"
        />
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Jesse Bounds</h2>
          <div className="text-purple-600">Happy New Year</div>
          <div className="text-gray-600">Github: <a href="https://github.com/boundsj">@boundsj</a></div>
          <div className="text-xs font-mono">bounds.dev</div>
        </div>
      </div>
    </Layout>
  )
}
