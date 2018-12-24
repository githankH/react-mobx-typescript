import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import {observable,action} from 'mobx';
import { any } from 'prop-types';



class inputstate {
    @observable name='jsldkf';
    @observable age= 33;
    @observable email='';

    @action onChangeHandler = (value:string):void =>{
       this.name = value;
    }
};

interface IInputState {
    store: inputstate;
}

@observer
class App extends React.Component<IInputState, {}> {

/*     constructor(props:AppProps){
        super(props);
        this.state = {
            name: this.props.text,
            age: this.props.age,
			email: '',
        };
    } */

    onChangeHandler = (e:React.FormEvent<HTMLInputElement>)=>{
	    const { value}: any = e.target;
        console.log(e.target);
        //this.props.store.name = value;
        this.props.store.onChangeHandler(value);
	}
	
    render(): JSX.Element{
        console.log(this.props);
        const {name, age} = this.props.store;
        return(
             <div> 
                 {name}
                 <br />
                 {age}
				 <br />
				 <input type='text' name='name'  value={name} onChange={this.onChangeHandler} />
             </div>
        );

    }

}

ReactDOM.render(<App store={new inputstate} />,document.querySelector('#root'));
