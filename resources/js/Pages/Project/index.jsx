import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

// react functional component
export default function Index({auth, projects}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2
          className="text-xl font-semibold leading-tight text-gray-800
          dark:text-gray-200"
        >
          Projects
        </h2>
      }
    >
      <Head title="Projects" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <pre>{JSON.stringify(projects, undefined, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
