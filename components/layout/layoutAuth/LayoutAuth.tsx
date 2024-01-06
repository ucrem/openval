import {ReactNode} from "react";


export interface LayoutAuthProps {
    children: ReactNode
}

export default function LayoutAuth(props: LayoutAuthProps){
    return(
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                {props.children}
            </div>
        </>
    )
}