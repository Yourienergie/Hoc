import React,{Component} from 'react';
import MovieCard from './MovieCard';
import Hoc from './Hoc';
class ListMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="cards">
            {this.props.movies.map(el => <MovieCard movie={el} key={el.id} />)}
            </div>
         );
    }
}
 
export default Hoc(ListMovies)  ;