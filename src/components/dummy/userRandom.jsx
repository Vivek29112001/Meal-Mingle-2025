import React from "react"
class UserData extends React.Component {
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            Count: 0,
            Count2: 2,
        }
    }
    
    render(){
        const { name, location } = this.props;
        const { Count, Count2 } = this.state;
        return(
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h1 className="text-xl font-bold">Count : {Count}</h1>
                <h1 className="text-xl font-bold">Count2 : {Count2}</h1>
                <h1 className="text-lg">Name: {name}</h1>
                <h2 className="text-md">Location: {location}</h2>
                <h3 className="text-sm text-gray-700">Contact: @vivek</h3>
            </div>
        )
    }
}

export default UserData;