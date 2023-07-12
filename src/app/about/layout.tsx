import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <h2>About layout</h2>
            {children}

        </div>
    )
}

export default layout