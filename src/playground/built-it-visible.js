class VisibiltyToggle extends React.Component {
    constructor(props){
        super(props);
        this.clickChange = this.clickChange.bind(this);
        this.state = {
            visibility: false
        }
    }

    clickChange() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return(
            <div>
                <h1>Visibility</h1>
                <button onClick={this.clickChange}>{this.state.visibility ? 'hide details' : 'show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>dsfsdfsdfsdfsfdsfsd</p>
                    </div>
                )}
            </div>
        )
    }
}
ReactDOM.render(<VisibiltyToggle />,document.getElementById('app'));











// let visibilty = false;

// const clickChange = () => {
//     visibilty = !visibilty;
//     render()
// }
// const render = () => {
// const template = (
//     <div>
//         <h1>Visibilty</h1>
//         <button onClick={clickChange}>
//             {visibilty ? 'hide details' : 'show details'}
//         </button>
//         {visibilty && (
//             <div>
//                 <p>dsfsdfsdfsdfsfdsfsd</p>
//             </div>
//         )}
//     </div>
// )
// ReactDOM.render(template,appIndex)
// }
// const appIndex = document.getElementById('app')
// render();