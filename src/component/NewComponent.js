import React, { Component } from 'react'

class NewComponent extends Component {

    constructor(props) {
        super();
        this.state = props
    }

    render() {
        console.log(this.state);
        let employeeData = [
            {
                fName: "Manjunath",
                lName: "Asundi",
                age: 28,
                yob: 1995
            },
            {
                fName: "Aadvika",
                lName: "Asundi",
                age: 1,
                yob: 2022
            },
            {
                fName: "Vishwanath",
                lName: "Asundi",
                age: 26,
                yob: 1997
            },
            {
                fName: "Bhagyashree",
                lName: "Asundi",
                age: 28,
                yob: 1996
            },
            {
                fName: "Shivanagouda",
                lName: "Agasimani",
                age: 22,
                yob: 2002
            }
        ]

        let tds = employeeData.map(employee => {
            return (<tr>
                <td>
                    {employee.fName}
                </td>
                <td>
                    {employee.lName}
                </td>
                <td>
                    {employee.age}
                </td>
                <td>
                    {employee.yob}
                </td>
            </tr>)
        })

        const thead = (<tr>
            <th>Fname</th>
            <th>Lname</th>
            <th>Age</th>
            <th>YOB</th>
        </tr>)

        let table = <div>
            <table>
                <thead>
                    {thead}
                </thead>
                <tbody>
                    {tds}
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>;

        return (<>
            {table}
            <button id='submit'> Submit </button>
        </>);
    }

    componentDidMount() {

    }
}

export default NewComponent;