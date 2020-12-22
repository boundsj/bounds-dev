import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (  
    <Layout>
      <div className="flex rounded-lg p-24 h-auto w-auto justify-center">
        <img
          className="h-52 w-52 rounded-full mx-0 mr-5"
          src="/images/profile.jpg"
        />
        <div className="flex h-52">
          <div className="m-auto">
            <h2 className="text-black dark:text-white text-3xl font-bold pb-2">Jesse Bounds</h2>
            <div className="text-purple-600 dark:text-yellow-200">🎉 Happy New Year! 🤞</div>
            <div className="text-gray-600 dark:text-gray-200">Github: <a href="https://github.com/boundsj">@boundsj</a></div>
            <div className="text-black dark:text-white text-xs font-mono">bounds.dev</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
