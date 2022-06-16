import React from "react";
import Table, {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
} from "../components/tables/Table"; // new

const getData = () => {
  const data = [
    {
      name: "Jane Cooper",
      email: "jane.cooper@example.com",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      status: "Active",
      role: "Admin",
      age: 27,
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Cody Fisher",
      email: "cody.fisher@example.com",
      title: "Product Directives Officer",
      department: "Intranet",
      status: "Inactive",
      role: "Owner",
      age: 43,
      imgUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Esther Howard",
      email: "esther.howard@example.com",
      title: "Forward Response Developer",
      department: "Directives",
      status: "Active",
      role: "Member",
      age: 32,
      imgUrl:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Jenny Wilson",
      email: "jenny.wilson@example.com",
      title: "Central Security Manager",
      department: "Program",
      status: "Offline",
      role: "Member",
      age: 29,
      imgUrl:
        "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Kristin Watson",
      email: "kristin.watson@example.com",
      title: "Lean Implementation Liaison",
      department: "Mobility",
      status: "Inactive",
      role: "Admin",
      age: 36,
      imgUrl:
        "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Cameron Williamson",
      email: "cameron.williamson@example.com",
      title: "Internal Applications Engineer",
      department: "Security",
      status: "Active",
      role: "Member",
      age: 24,
      imgUrl:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  return [...data, ...data, ...data];
};

function TableGen() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: AvatarCell,
        imgAccessor: "imgUrl",
        emailAccessor: "email",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Role",
        accessor: "role",
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    // breadcrumps start

    <>
      <div class="bg-gray-200 dark:bg-gray-800">
        <div class="container flex items-center px-6 py-4 mx-auto overflow-y-auto whitespace-nowrap">
          <a href="#" class="text-gray-600 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>

          <span class="mx-5 text-gray-500 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>

          <a href="#" class="text-gray-600 dark:text-gray-200 hover:underline">
            Account
          </a>

          <span class="mx-5 text-gray-500 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>

          <a href="#" class="text-gray-600 dark:text-gray-200 hover:underline">
            Profile
          </a>

          <span class="mx-5 text-gray-500 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>

          <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">
            Settings
          </a>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="mt-6">
            <Table columns={columns} data={data} />
          </div>
        </main>
      </div>
    </>
  );
}

export default TableGen;
