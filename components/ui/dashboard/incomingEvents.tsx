import {classNames,convertDates} from "@/utils/globalFunctions";

const statuses = {
    Complete: 'text-green-700 bg-green-50 ring-green-600/20',
    'In progress': 'text-gray-600 bg-gray-50 ring-gray-500/10',
    Archived: 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
}
const projects = [
    {
        id: 1,
        name: 'Event #1',
        status: 'Complete',
        createdBy: 'Leslie Alexander',
        dueDateTime: '2023-03-17T00:00Z',
    },
    {
        id: 2,
        name: 'Event #2',
        status: 'In progress',
        createdBy: 'Leslie Alexander',
        dueDateTime: '2023-05-05T00:00Z',
    },
    {
        id: 3,
        name: 'Event #3',
        status: 'In progress',
        createdBy: 'Courtney Henry',
        dueDateTime: '2023-05-25T00:00Z',
    },
    {
        id: 4,
        name: 'Event #4',
        status: 'In progress',
        createdBy: 'Leonard Krasner',
        dueDateTime: '2023-06-07T00:00Z',
    },
    {
        id: 5,
        name: 'Event #5',
        status: 'Archived',
        createdBy: 'Courtney Henry',
        dueDateTime: '2023-06-10T00:00Z',
    },
]

export default function IncomingEvents(){

    return(
        <>
            <div className="w-3/6 border border-gray-200 bg-white px-4 py-5 sm:px-6 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl mt-3">
                <h3 className="border-b border-gray-200 text-base font-semibold leading-6 text-gray-900 pb-3">Incoming Events</h3>
                <ul role="list"
                    className="divide-y divide-gray-100 overflow-hidden bg-white ">
                    {projects.map((project) => (
                        <li key={project.id} className="flex items-center justify-between gap-x-6 p-5">
                            <div className="min-w-0">
                                <div className="flex items-start gap-x-3">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{project.name}</p>
                                </div>
                                <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                                    <p className="whitespace-nowrap">
                                        Due on <time
                                        dateTime={project.dueDateTime}>{convertDates(project.dueDateTime)}</time>
                                    </p>
                                    <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                                        <circle cx={1} cy={1} r={1}/>
                                    </svg>
                                    <p className="truncate">Created by {project.createdBy}</p>
                                </div>
                            </div>
                            <div className="flex flex-none items-center gap-x-4">
                                <a
                                    href={''}
                                    className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                                >
                                    View event<span className="sr-only">, {project.name}</span>
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>


        </>
    )
}