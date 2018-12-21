import * as React from 'react';
import * as ReactDOM from 'react-dom'

interface AppProps {

   text: string;
   age: number;
}

interface AppState {
   name: string;
   email: string;
   age: number;
}

class App extends React.Component<AppProps,AppState> {

    constructor(props){
        super(props);
        this.state = {
            name: this.props.text,
            age: this.props.age,
			email: '',
        };

    }
	
	onChangeHandler = (e:React.FormEvent<HTMLInputElement>)=>{
	    const {name, value}: any = e.target;
		console.log(name,value);
		this.setState({name: value});
	    
	}
	
    render(): JSX.Element{
	    const {name,age} = this.state;
        return(
             <div> 
                 {this.state.name}
                 <br />
                 {this.state.age}
				 <br />
				 <input type='text' name='name'  value={name} onChange={this.onChangeHandler} />
             </div>
        );

    }

}

ReactDOM.render(<App text={'xxjskf'}  age={23} />,document.querySelector('#root'));
