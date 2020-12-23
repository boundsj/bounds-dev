import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (  
    <Layout>
      <div className="flex p-24 h-auto w-auto justify-center">
        <div class="w-auto h-auto pr-5">
          <img class="shadow rounded w-32 h-auto" src="/images/profile.jpeg" />
        </div>
        <div className="flex h-20">
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
