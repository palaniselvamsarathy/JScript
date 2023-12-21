import React from 'react'
import {UserContext,channelContext} from "../App"
function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <channelContext.Consumer>
                            {
                                channel => {
                                    return <div>
                                        <h1>User Contet Value {user}</h1>
                                        <h1>Channel Contet Value {channel}</h1>
                                    </div>
                                }
                            }
                        </channelContext.Consumer>
                    )
                    
                }
            }
        </UserContext.Consumer>

    </div>
  )
}

export default ComponentF
