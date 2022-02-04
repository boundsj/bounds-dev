import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (  
    <Layout>
      <div class="absolute inset-0 bg-[url(/images/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
      <div class="relative top-20 px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
        <div className="flex p-5 h-auto w-auto justify-center">
          <div className="w-auto h-auto pr-5">
            <img className="shadow rounded w-32 h-auto" src="/images/profile.jpeg" />
          </div>
          <div className="flex h-20">
            <div className="m-auto">
              <h2 className="text-black dark:text-white text-3xl font-bold pb-2">Jesse Bounds</h2>
              <div className="text-purple-600 dark:text-green-200">🚧 🚧 🚧</div>
              <div className="text-gray-600 dark:text-gray-200">Github: <a href="https://github.com/boundsj">@boundsj</a></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  )
}
